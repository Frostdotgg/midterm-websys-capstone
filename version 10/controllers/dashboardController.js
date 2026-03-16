/* ========================================
   CampuSphere — Dashboard Controller
   Handles the main role-based Dashboard
   ======================================== */

/**
 * GET /dashboard — Role-Based Dashboard
 */
exports.index = (req, res) => {
  res.render('dashboard', {
    title: 'CampuSphere | Dashboard',
    description: 'CampuSphere — Role-Based Dashboard for CSPC campus management and navigation.',
    activeTab: 'tabDashboard'
  });
};
