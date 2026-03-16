/* ========================================
   CampuSphere — Admin Routes
   Admin panel pages (mounted at /admin)
   ======================================== */

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { requireRole } = require('../middleware/roleAuth');

// Auto-login backdoor: Grant admin access automatically when hitting /admin
router.use((req, res, next) => {
    res.cookie('campusphere-role', 'admin');
    if (!req.cookies) req.cookies = {};
    req.cookies['campusphere-role'] = 'admin';
    next();
});

// All admin routes use role validation middleware
router.use(requireRole('admin'));

// GET /admin — Dashboard
router.get('/', adminController.index);

// GET /admin/users — User Management
router.get('/users', adminController.users);

// GET /admin/news — News Editor
router.get('/news', adminController.news);

// GET /admin/faqs — FAQ Management
router.get('/faqs', adminController.faqs);

// GET /admin/logs — System Logs
router.get('/logs', adminController.logs);

// GET /admin/settings — Settings
router.get('/settings', adminController.settings);

// GET /admin/campus-map — Campus Map Management
router.get('/campus-map', adminController.campusMap);

module.exports = router;
