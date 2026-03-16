/* ========================================
   CampuSphere — Dashboard Routes
   Role-based dashboard
   ======================================== */

const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// GET /dashboard — Main dashboard
router.get('/dashboard', dashboardController.index);

module.exports = router;
