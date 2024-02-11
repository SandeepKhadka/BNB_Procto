const jwt = require("jsonwebtoken");
const PRIVATE_KEY = require("../constants/constants");

const checkAuth = (req, res, next) => {
    try{
        if (req.headers["authorization"]) {
            const token = req.headers["authorization"].replace(/^Bearer\s/, "");
            const decodedToken = jwt.verify(token, PRIVATE_KEY);
            req.body.user = { email: decodedToken.email, role: decodedToken.email };
            next();
        }
        
    }catch(error){
        return res.status(401).json({message:"Not Authorized"});
    }
};

module.exports = checkAuth;
