const sequelize = require("../../db");
const Joi = require("joi"); //for req.body data validation
const bcrypt = require("bcrypt");
const User = require("../../model/user");
const jwt = require("jsonwebtoken");
const sendMail = require("../../functions/sendMail");
const { PRIVATE_KEY, FRONTEND_DOMAIN } = require("../../constants/constants");
const { response } = require("express");

//this creates table if not exists in db
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Tables synced successfully");
  })
  .catch((error) => {
    console.error("Error syncing tables:", error);
  });

const signup = async (req, res) => {
  let userData = req.body;
  let errorFlag = false;

  const userValidationSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    role: Joi.string()
      .valid("student", "teacher", "admin", "superadmin", "parent")
      .required(),
  });

  const { error, value } = userValidationSchema.validate(userData);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    await User.findOne({ where: { email: userData.email } }).then((user) => {
      if (user) {
        errorFlag = "Email already exists";
        throw new Error(errorFlag);
      }
    });
  } catch (error) {
    return res.status(400).json({ error: errorFlag });
  }

  bcrypt.hash(userData.password, 10, async function (err, hash) {
    if (err) {
      errorFlag = true;
      return;
    } else {
      errorFlag = false;
      userData = { ...userData, password: hash };

      await User.create(userData)
        .then((newUser) => {
          errorFlag = false;
          return;
        })
        .catch((err) => {
          errorFlag = err;
          return;
        });
    }
  });

  if (errorFlag) {
    return res.status(500).json({ message: "Failed to SignUp" });
  }

  //sendmail for verfication email
  const token = jwt.sign({ email: userData.email }, PRIVATE_KEY, {
    expiresIn: "365d",
  });
  const verficationUrl = `${FRONTEND_DOMAIN}/verify?token=${token}`;
  sendMail(verficationUrl, "Verify Your Mail", userData.email);

  return res
    .status(201)
    .json({ message: "Verification mail sent successfully" });
};

verifyEmail = async (req, res) => {
  
  try {
    if (req.query.token) {
      const decodedToken = jwt.verify(req.query.token, PRIVATE_KEY);
      await User.findOne({ where: { email: decodedToken.email } }).then(
        async (user) => {
          if (!user) {
            errorFlag = "No user exists";
            throw new Error(errorFlag);
          }
          console.log("gandu");
          await User.update(
            { status: "verified" },
            { where: { email: decodedToken.email } }
          );
        }
      );
    }
    return res.status(200).json({ message: "Successfully verified" });

  } catch (error) {

    if (error.message === "jwt malformed") {
      return res.status(401).json({ error: "Token unverified" });
    }
    console.log("yeha ni ho ra");
    return res.status(401).json({ error: error.message });
  }
};

module.exports = { signup, verifyEmail };
