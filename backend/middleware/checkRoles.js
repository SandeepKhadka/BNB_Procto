const { response } = require("express");

const checkAdmin = (req, res, next) => {
  if (req.body.user.role === "admin") {
    next();
  } else {
    return res.status(401).json({ message: "Not authorized" });
  }
};

const checkTeacher = (req, res, next) => {
  if (req.body.user.role === "teacher") {
    next();
  } else {
    return res.status(401).json({ message: "Not authorized" });
  }
};

const checkStudent = (req, res, next) => {
  if (req.body.user.role === "student") {
    next();
  } else {
    return res.status(401).json({ message: "Not authorized" });
  }
};

module.exports = {checkTeacher,checkStudent,checkAdmin};
