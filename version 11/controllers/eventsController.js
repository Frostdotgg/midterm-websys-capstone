/* ========================================
   CampuSphere — Events Controller
   Handles the Events page
   ======================================== */

/**
 * GET /events — Events & News
 */
exports.index = (req, res) => {
  res.render('events', {
    title: 'CampuSphere | Events',
    description: 'Stay updated with campus events and news at CSPC.',
    activeTab: 'tabEvents'
  });
};
