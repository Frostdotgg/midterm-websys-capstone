/* ========================================
   CampuSphere — Admin Controller
   Handles all Admin panel pages
   ======================================== */

/**
 * GET /admin — Admin Dashboard
 */
exports.index = (req, res) => {
  res.render('admin/index', {
    title: 'CampusSphere Admin | Dashboard',
    description: 'CampusSphere Admin Dashboard — Manage campus data, users, and settings.',
    activePage: 'dashboard'
  });
};

/**
 * GET /admin/users — User Management
 */
exports.users = (req, res) => {
  res.render('admin/users', {
    title: 'CampusSphere Admin | Users',
    description: 'Manage CampusSphere users.',
    activePage: 'users'
  });
};

/**
 * GET /admin/news — News Editor
 */
exports.news = (req, res) => {
  res.render('admin/news', {
    title: 'CampusSphere Admin | News',
    description: 'Manage campus news and announcements.',
    activePage: 'news'
  });
};

/**
 * GET /admin/faqs — FAQ Management
 */
exports.faqs = (req, res) => {
  res.render('admin/faqs', {
    title: 'CampusSphere Admin | FAQs',
    description: 'Manage frequently asked questions.',
    activePage: 'faqs'
  });
};

/**
 * GET /admin/logs — System Logs
 */
exports.logs = (req, res) => {
  res.render('admin/logs', {
    title: 'CampusSphere Admin | Logs',
    description: 'View system activity logs.',
    activePage: 'logs'
  });
};

/**
 * GET /admin/settings — Settings
 */
exports.settings = (req, res) => {
  res.render('admin/settings', {
    title: 'CampusSphere Admin | Settings',
    description: 'CampusSphere system settings.',
    activePage: 'settings'
  });
};

/**
 * GET /admin/campus-map — Campus Map Management
 */
exports.campusMap = (req, res) => {
  res.render('admin/campus-map', {
    title: 'CampusSphere Admin | Campus Map',
    description: 'Manage campus map data and markers.',
    activePage: 'campus-map'
  });
};
