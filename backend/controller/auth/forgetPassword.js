const jwt = require("jsonwebtoken");
const User = require("../../model/user");
const sendMail = require("../../functions/sendMail");
const bcrypt = require("bcrypt");
const { FRONTEND_DOMAIN, PRIVATE_KEY } = require("../../constants/constants");

const reqLink = async (req, res) => {
  const email = req.query.email;
  let mailError;
  if (email) {
    try {
      const user = await User.findOne({ where: { email: email } });
      console.log();

      if (user) {
        let token = jwt.sign({ email: email }, PRIVATE_KEY, {
          expiresIn: "30m",
        });
        let passResetLink = `${FRONTEND_DOMAIN}/reset_password?token=${token}`;

        sendMail(
          passResetLink,
          "Passport Reset Link Sent Successfully",
          email,
          mailError
        );
        if (mailError) {
          res.status(500).json({ error: mailError });
        }

        return res.status(200).json({
          message:
            "Password reset link sent successfully. Please check your mail to reset the password",
        });
      }
      return res
        .status(400)
        .json({ message: "No user exist. Please provide a valid mail" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  return res.status(400).json({ error: "No email sent" });
};

const isLinkValid = (req, res) => {
    try{

        token = req.query.token;
        if (token) {
            let decodedToken = jwt.verify(token, PRIVATE_KEY);
            if (decodedToken) {
                return res.status(200).json({ message: "Valid Link" });
            }
            
            return res.status(404).json({ error: "Invalid Link" });
        }
        return res.status(401).json({error:"No token provided in query"});
        
    }catch(error){
        return res.status(500).json({error:error.messagae})
    }
};

const passwordChanged = async (req, res) => {
  try {
    const password = req.body.password;
    const token = req.query.token;

    if (password && token) {
      if (String(password).length < 8) {
        return res.status(404).json({ error: "Password must be greater than 8 digits" });
      }
      try {
        let decodedToken = jwt.verify(token,PRIVATE_KEY);
       await new Promise((resolve,reject)=>{

           bcrypt.hash(password, 10, async function (err, hash) {
              if (hash) {
                const data = await User.update(
                  
                  { password: hash },
                  { where:{email:decodedToken.email} }
                );
                console.log(data);
                resolve();
              } else {
                reject("Unable to hash the password");
                
              }
            });
       });
       return res.status(200).json({message:"Password changed Successfully"})
      } catch (error) {
        console.log('k timi')
        return res.status(500).json({ error:error.message });
      }
    }
  } catch (error) {
    return res.status(500).json({error:error.message});
  }
};
module.exports = { reqLink, isLinkValid, passwordChanged };
