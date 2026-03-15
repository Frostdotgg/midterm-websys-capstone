/* ========================================
   CampuSphere — Auth Routes
   Authentication-related pages
   ======================================== */

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// GET /auth — Combined Sign In / Register
router.get('/auth', authController.auth);

// GET /login — Standalone Login
router.get('/login', authController.login);

// GET /register — Standalone Register
router.get('/register', authController.register);

module.exports = router;
