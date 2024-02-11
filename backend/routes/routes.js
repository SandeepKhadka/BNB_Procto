const express = require('express');
const { signup, verifyEmail } = require('../controller/auth/signup');
const checkAuth = require('../middleware/checkAuth');
const login = require('../controller/auth/login');
const { reqLink, isLinkValid, passwordChanged } = require('../controller/auth/forgetPassword');
const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);

router.get('/reqLink',reqLink);
router.get('/validLink',isLinkValid);
router.put('/passwordChanged',passwordChanged);
router.get('/verifyEmail',verifyEmail);

module.exports = router