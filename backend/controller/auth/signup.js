const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendMail = require("../../functions/sendMail");
const { PRIVATE_KEY, FRONTEND_DOMAIN } = require("../../constants/constants");

const User = require("../../model/user");

const signup = async (req, res) => {
  try {
    const userData = req.body;

    // Validate user input
    const userValidationSchema = Joi.object({
      username: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
      role: Joi.string().valid("student", "teacher", "admin", "superadmin", "parent").required(),
    });
    const { error } = userValidationSchema.validate(userData);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Create new user
    const newUser = await User.create({
      username: userData.username,
      email: userData.email,
      password: hashedPassword,
      role: userData.role,
    });

    // Send verification email
    const token = jwt.sign({ email: newUser.email }, PRIVATE_KEY, { expiresIn: "365d" });
    const verficationUrl = `${FRONTEND_DOMAIN}/verify?token=${token}`;
    sendMail(verficationUrl, "Verify Your Mail", newUser.email);

    return res.status(201).json({ message: "Verification mail sent successfully" });
  } catch (error) {
    console.error("Error signing up:", error);
    return res.status(500).json({ message: "Failed to SignUp" });
  }
};

const verifyEmail = async (req, res) => {
  try {
    const token = req.query.token;
    if (!token) {
      return res.status(400).json({ error: "Token missing" });
    }

    const decodedToken = jwt.verify(token, PRIVATE_KEY);
    const userEmail = decodedToken.email;

    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(400).json({ error: "No user exists" });
    }

    await User.updateOne({ email: userEmail }, { status: "verified" });

    return res.status(200).json({ message: "Successfully verified" });
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Token unverified" });
    }
    console.error("Error verifying email:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { signup, verifyEmail };
