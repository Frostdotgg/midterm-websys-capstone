/* ========================================
   CampuSphere — Express Server
   MVC Architecture Entry Point
   ======================================== */

const express = require('express');
const path = require('path');

// Import middleware
const logger = require('./middleware/logger');
const { notFound, serverError } = require('./middleware/errorHandler');

// Import route modules
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const buildingsRoutes = require('./routes/buildings');
const eventsRoutes = require('./routes/events');
const mapRoutes = require('./routes/map');
const adminRoutes = require('./routes/admin');

const app = express();
const PORT = process.env.PORT || 3000;

/* ---- View Engine Setup ---- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* ---- Built-in Middleware ---- */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* ---- Static Files ---- */
app.use(express.static(path.join(__dirname, 'public')));

/* ---- Custom Middleware ---- */
app.use(logger);

/* ---- Routes ---- */
app.use('/', indexRoutes);
app.use('/', authRoutes);
app.use('/', dashboardRoutes);
app.use('/', buildingsRoutes);
app.use('/', eventsRoutes);
app.use('/', mapRoutes);
app.use('/admin', adminRoutes);

/* ---- Error Handling Middleware ---- */
app.use(notFound);
app.use(serverError);

/* ---- Start Server ---- */
app.listen(PORT, () => {
  console.log(`✅ CampusSphere server running at http://localhost:${PORT}`);
});

module.exports = app;
