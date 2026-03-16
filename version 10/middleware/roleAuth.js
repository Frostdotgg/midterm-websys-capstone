/* ========================================
   CampuSphere — Role-Based Auth Middleware
   Validates user role for protected routes
   ======================================== */

/**
 * Factory function that returns middleware to check user roles.
 * Since authentication is handled client-side via localStorage,
 * this middleware reads the 'campusphere-role' cookie to validate access.
 *
 * @param {...string} allowedRoles - Roles allowed to access the route
 * @returns {Function} Express middleware
 *
 * Usage:
 *   router.get('/admin', requireRole('admin'), controller.index);
 */
const requireRole = (...allowedRoles) => {
  return (req, res, next) => {
    // Read role from cookie (set by client-side JS)
    const userRole = req.cookies
      ? req.cookies['campusphere-role']
      : req.query.role || 'guest';

    if (allowedRoles.length === 0 || allowedRoles.includes(userRole)) {
      // Role is allowed — proceed
      req.userRole = userRole;
      next();
    } else {
      // Role not authorized — redirect to home
      res.status(403).render('error', {
        title: '403 — Access Denied',
        statusCode: 403,
        message: 'You do not have permission to access this page.',
      });
    }
  };
};

/**
 * Middleware to extract and attach the user role to the request object.
 * Always allows the request through — used for informational purposes.
 */
const attachRole = (req, res, next) => {
  req.userRole = req.cookies
    ? req.cookies['campusphere-role']
    : req.query.role || 'guest';
  next();
};

module.exports = { requireRole, attachRole };
