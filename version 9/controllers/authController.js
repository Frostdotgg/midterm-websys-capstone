/* ========================================
   CampuSphere — Auth Controller
   Handles Auth, Login, and Register pages
   ======================================== */

/**
 * GET /auth — Combined Sign In / Register page
 */
exports.auth = (req, res) => {
  res.render('auth', {
    title: 'CampusSphere | Get Started',
    description: 'Get started with CampusSphere — Sign in or create your account to explore the CSPC virtual map tour.'
  });
};

/**
 * GET /login — Standalone Login page
 */
exports.login = (req, res) => {
  res.render('login', {
    title: 'CampusSphere | Sign In',
    description: 'Sign in to CampusSphere.'
  });
};

/**
 * GET /register — Standalone Register page
 */
exports.register = (req, res) => {
  res.render('register', {
    title: 'CampusSphere | Register',
    description: 'Register to CampusSphere - Choose your role to access the virtual map tour.'
  });
};
