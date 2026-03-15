/* ========================================
   CampuSphere — Buildings Controller
   Handles the Buildings page
   ======================================== */

/**
 * GET /buildings — Buildings Explorer
 */
exports.index = (req, res) => {
  res.render('buildings', {
    title: 'CampuSphere | Buildings',
    description: 'Explore all campus buildings at Camarines Sur Polytechnic Colleges.',
    activeTab: 'tabBuildings'
  });
};
