/* ========================================
   CampusSphere — Role-Based Navigation
   1. Route guard – redirects if role cannot access current page
   2. Tab visibility – hides nav tabs the role should not see
   ======================================== */
(function () {
    const role = localStorage.getItem('campusphere-role') || 'guest';

    /* ---- Which pages (filenames) each role may visit ---- */
    const rolePageAccess = {
        'student-cspc': ['home.html', 'dashboard.html', 'buildings.html', 'events.html', 'map.html', 'about.html', 'login.html', 'auth.html', 'register.html', 'landing.html'],
        'student-non-cspc': ['home.html', 'dashboard.html', 'buildings.html', 'events.html', 'map.html', 'about.html', 'login.html', 'auth.html', 'register.html', 'landing.html'],
        'instructor': ['home.html', 'dashboard.html', 'buildings.html', 'events.html', 'map.html', 'about.html', 'login.html', 'auth.html', 'register.html', 'landing.html'],
        'admin': ['home.html', 'dashboard.html', 'buildings.html', 'events.html', 'map.html', 'about.html', 'login.html', 'auth.html', 'register.html', 'landing.html'],
        'guest': ['home.html', 'dashboard.html', 'buildings.html', 'events.html', 'map.html', 'about.html', 'login.html', 'auth.html', 'register.html', 'landing.html']
    };

    /* ---- Which nav-tab IDs each role can see ---- */
    const roleNavAccess = {
        'student-cspc': ['tabHome', 'tabDashboard', 'tabBuildings', 'tabEvents', 'tabMap', 'tabAbout'],
        'student-non-cspc': ['tabHome', 'tabDashboard', 'tabBuildings', 'tabEvents', 'tabMap', 'tabAbout'],
        'instructor': ['tabHome', 'tabDashboard', 'tabBuildings', 'tabEvents', 'tabMap', 'tabAbout'],
        'admin': ['tabHome', 'tabDashboard', 'tabBuildings', 'tabEvents', 'tabMap', 'tabAbout'],
        'guest': ['tabHome', 'tabDashboard', 'tabBuildings', 'tabEvents', 'tabMap', 'tabAbout']
    };

    /* ---- Route Guard ---- */
    const currentPage = location.pathname.split('/').pop() || 'home.html';
    const allowedPages = rolePageAccess[role] || rolePageAccess['guest'];

    if (!allowedPages.includes(currentPage)) {
        // Redirect to dashboard if the user shouldn't be on this page
        window.location.href = 'dashboard.html';
        return;   // stop further execution
    }

    /* ---- Hide disallowed nav tabs ---- */
    const allowedTabs = roleNavAccess[role] || roleNavAccess['guest'];
    const allTabs = document.querySelectorAll('.dash-nav__tab[id]');
    allTabs.forEach(tab => {
        if (!allowedTabs.includes(tab.id)) {
            tab.style.display = 'none';
        }
    });

    /* ---- Set display name from profile data ---- */
    let displayName = 'User';
    if (role === 'student-cspc') {
        const saved = localStorage.getItem('campusphere-student');
        const profile = saved ? JSON.parse(saved) : null;
        displayName = profile && profile.name ? profile.name.split(' ')[0] : 'Aaron';
    } else if (role === 'instructor') {
        const saved = localStorage.getItem('campusphere-instructor');
        const profile = saved ? JSON.parse(saved) : null;
        displayName = profile && profile.name ? profile.name.split(' ')[0] : 'Dr. Santos';
    } else if (role === 'student-non-cspc') {
        displayName = 'Student';
    } else if (role === 'admin') {
        displayName = 'Admin';
    } else {
        displayName = 'Guest';
    }
    const usernameEl = document.getElementById('navUsername');
    if (usernameEl) {
        usernameEl.textContent = displayName;
    }
})();
