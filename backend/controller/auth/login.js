const bcrypt = require("bcrypt");
const User = require("../../model/user");
const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = require("../../constants/constants");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "No User Found" });
    }

    if (user.status === 'unverified') {
      return res.status(401).json({ error: 'Please verify your mail' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid Password" });
    }

    const token = jwt.sign({ email: user.email, role: user.role }, PRIVATE_KEY, { expiresIn: '1h' });
    const userData = {
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      token
    };

    return res.status(200).json({ message: "Successfully Logged In", data: userData });
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ error: "Server Error" });
  }
};

module.exports = login;
