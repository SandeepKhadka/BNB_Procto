const bcrypt = require("bcrypt");
const User = require("../../model/user");
const jwt = require("jsonwebtoken");
const {PRIVATE_KEY} = require("../../constants/constants");

const login = async (req, res) => {
  let loginCredentials = req.body;
  let login;
  let statusCode = 200;
  let queryRes;
  let errorFlag;
  try {
    await User.findOne({ where: { email: loginCredentials.email } }).then(
      async (user) => {
        if (!user) {
          statusCode = 401;
          throw new Error("No User Found");
        }
        queryRes = user.get({ plain: true });
        console.log(queryRes);

        if(queryRes.status === 'unverified'){
            errorFlag = 'Please verify your mail';
            throw new Error(errorFlag);
        }

        const result = await new Promise((resolve, reject) => {
          bcrypt.compare(
            loginCredentials.password,
            user.password,
            async function (err, result) {
              if (err) {
                statusCode = 500;
                reject();
              }

              if (result) {
                login = true;
                resolve(result);
                return;
              } 

              else {
                statusCode = 401;
                errorFlag = "Invalid Password";
                reject(errorFlag);
              }
            }
          );
        });
      }
    );
    if (login) {
      const token = jwt.sign(
        { email: queryRes.email, role: queryRes.role, },
        PRIVATE_KEY,
        {expiresIn:'1h'}
      );
      console.log(queryRes);
      queryRes = { ...queryRes, token: token };
      delete queryRes.password;
      delete queryRes.createdAt;
      delete queryRes.updatedAt;
      return res
        .status(200)
        .json({ message: "Successfully Logged In", data: queryRes });
    }

    throw new Error(errorFlag);
  } catch (error) {
    
    if (errorFlag) {
      return res.status(401).json({ error: errorFlag });
    }
    if (error.message === "No User Found") {
      return res.status(401).json({ error: error.message });
    }
    return res.status(500).json({ error: "Server Error" });
  }
};
module.exports = login;
