/* ========================================
   CampuSphere — Data Module
   Role-based data for EJS-style templating
   ======================================== */

const CampuSphereData = {

  // ---- School Info ----
  school: {
    name: 'Camarines Sur Polytechnic Colleges',
    acronym: 'CSPC',
    address: 'Nabua, Camarines Sur, Philippines',
    founded: 1983,
    description: 'Camarines Sur Polytechnic Colleges is a state-funded institution of higher learning in Nabua, Camarines Sur providing quality education in engineering, technology, and other disciplines.'
  },

  // ---- Navigation Links per Role ----
  sidebarNav: {
    'student-cspc': [
      { id: 'overview', icon: 'home', label: 'Overview' },
      { id: 'profile', icon: 'user', label: 'Personal Info' },
      { id: 'enrollment', icon: 'book', label: 'Enrollment' },
      { id: 'schedule', icon: 'calendar', label: 'Class Schedule' },
      { id: 'news', icon: 'bell', label: 'News & Announcements' },
      { id: 'map', icon: 'map', label: 'Campus Map' },
    ],
    'student-non-cspc': [
      { id: 'overview', icon: 'home', label: 'Overview' },
      { id: 'offices', icon: 'door', label: 'Campus Offices' },
      { id: 'admission', icon: 'book', label: 'Admission Info' },
      { id: 'map', icon: 'map', label: 'Campus Map' },
    ],
    'instructor': [
      { id: 'overview', icon: 'home', label: 'Overview' },
      { id: 'profile', icon: 'user', label: 'Profile' },
      { id: 'all-rooms', icon: 'door', label: 'All Rooms' },
      { id: 'rooms', icon: 'door', label: 'Assigned Rooms' },
      { id: 'schedule', icon: 'calendar', label: 'Teaching Schedule' },
      { id: 'announcements', icon: 'megaphone', label: 'Instructor News' },
      { id: 'status', icon: 'check', label: 'Status' },
    ],
    'admin': [
      { id: 'overview', icon: 'home', label: 'Overview' },
      { id: 'users', icon: 'users', label: 'User Management' },
      { id: 'map-data', icon: 'map', label: 'Map Data' },
      { id: 'news-editor', icon: 'edit', label: 'News / FAQ Editor' },
      { id: 'logs', icon: 'file', label: 'System Logs' },
    ],
    'guest': [
      { id: 'overview', icon: 'home', label: 'Overview' },
      { id: 'corridors', icon: 'door', label: 'Building Corridors' },
      { id: 'news-events', icon: 'bell', label: 'News & Events' },
      { id: 'achievements', icon: 'check', label: 'Achievements' },
      { id: 'map', icon: 'map', label: 'Campus Map (2D)' },
    ]
  },

  // ---- Role display info ----
  roles: {
    'student-cspc': { label: 'Student (CSPC)', color: '#2563a8', badge: 'CSPC Verified' },
    'student-non-cspc': { label: 'Student', color: '#16a34a', badge: 'Limited Access' },
    'instructor': { label: 'Instructor', color: '#d4a843', badge: 'Faculty' },
    'admin': { label: 'Administrator', color: '#dc2626', badge: 'Full Access' },
    'guest': { label: 'Guest', color: '#6b7280', badge: 'View Only' }
  },

  // ---- Sample student profile ----
  studentProfile: {
    name: 'Aaron V. Lasprillas',
    studentId: 'CSPC-2024-001234',
    email: 'aaron.lasprillas@cspc.edu.ph',
    course: 'BS Information Technology',
    yearLevel: '3rd Year',
    section: 'IT-3A',
    status: 'Regular',
    enrollmentStatus: 'Enrolled',
    semester: '2nd Semester, A.Y. 2025-2026',
    assignedRoom: 'Room 301 - CCS Building',
    gwa: '1.45'
  },

  // ---- Instructor profile ----
  instructorProfile: {
    name: 'Dr. Maria Santos',
    employeeId: 'CSPC-FAC-0087',
    email: 'maria.santos@cspc.edu.ph',
    department: 'College of Computer Studies',
    position: 'Associate Professor',
    status: 'Active',
    assignedRooms: [
      { room: 'Room 301 - CCS Building', subject: 'Web Development', schedule: 'MWF 8:00-9:30 AM' },
      { room: 'Room 205 - Academic Bldg', subject: 'Database Systems', schedule: 'TTH 10:00-11:30 AM' },
      { room: 'CompLab 2 - CCS Building', subject: 'Mobile App Dev', schedule: 'MWF 1:00-2:30 PM' },
    ]
  },

  // ---- Class schedule ----
  schedule: [
    { time: '8:00 - 9:30 AM', subject: 'Web Development', room: 'Room 301', day: 'MWF', instructor: 'Dr. Santos' },
    { time: '10:00 - 11:30 AM', subject: 'Database Systems', room: 'Room 205', day: 'TTH', instructor: 'Dr. Santos' },
    { time: '1:00 - 2:30 PM', subject: 'Data Structures', room: 'Room 102', day: 'MWF', instructor: 'Prof. Reyes' },
    { time: '3:00 - 4:30 PM', subject: 'Operating Systems', room: 'CompLab 1', day: 'TTH', instructor: 'Engr. Cruz' },
    { time: '4:30 - 6:00 PM', subject: 'Elective 3', room: 'Room 301', day: 'MWF', instructor: 'Prof. Garcia' },
  ],

  // ---- News ----
  news: [
    { id: 1, title: 'Enrollment for 2nd Semester Now Open', date: 'March 5, 2026', category: 'Academic', excerpt: 'Online enrollment for the second semester of A.Y. 2025-2026 is now open. Students may access the enrollment portal.' },
    { id: 2, title: 'CSPC Foundation Day Celebration', date: 'March 12, 2026', category: 'Events', excerpt: 'Join us in celebrating the 43rd Foundation Anniversary of CSPC with various activities and programs.' },
    { id: 3, title: 'New CCS Building Facilities', date: 'March 8, 2026', category: 'Facilities', excerpt: 'The College of Computer Studies now has upgraded computer laboratories with new workstations.' },
    { id: 4, title: 'Scholarship Application Deadline', date: 'March 15, 2026', category: 'Academic', excerpt: 'Deadline for scholarship applications for the upcoming semester. Submit requirements to the registrar.' },
  ],

  // ---- Admin Users ----
  adminUsers: [
    { name: 'Aaron V. Lasprillas', email: 'aaron@cspc.edu.ph', role: 'Student', status: 'Active' },
    { name: 'Carl Andrie Baldoza', email: 'carl@cspc.edu.ph', role: 'Student', status: 'Active' },
    { name: 'Dr. Maria Santos', email: 'maria.santos@cspc.edu.ph', role: 'Instructor', status: 'Active' },
    { name: 'John Guest', email: 'john@gmail.com', role: 'Guest', status: 'Active' },
    { name: 'Admin User', email: 'admin@cspc.edu.ph', role: 'Admin', status: 'Active' },
  ],

  // ---- System Logs ----
  logs: [
    { time: '19:30:05', action: 'User Login', user: 'aaron@cspc.edu.ph', detail: 'Logged in via Google OAuth' },
    { time: '19:28:12', action: 'Map Updated', user: 'admin@cspc.edu.ph', detail: 'Updated CCS Building info' },
    { time: '19:25:00', action: 'News Published', user: 'admin@cspc.edu.ph', detail: 'Foundation Day announcement' },
    { time: '19:20:33', action: 'User Login', user: 'maria.santos@cspc.edu.ph', detail: 'Logged in via Google OAuth' },
    { time: '19:15:10', action: 'Profile Updated', user: 'carl@cspc.edu.ph', detail: 'Updated contact info' },
  ],

  // ---- Contact Info ----
  contact: {
    address: 'San Miguel, Nabua, Camarines Sur 4434',
    phone: '(054) 473-1234',
    email: 'info@cspc.edu.ph',
    website: 'www.cspc.edu.ph',
    hours: 'Monday - Friday, 8:00 AM - 5:00 PM'
  },

  // ---- Campus Offices (for Non-CSPC / Freshmen) ----
  campusOffices: [
    { name: 'Registrar', location: 'Admin Building, Ground Floor', description: 'Handles student records, enrollment verification, and transcript requests.', hours: 'Mon-Fri 8:00 AM - 5:00 PM' },
    { name: 'Cashier', location: 'Admin Building, Ground Floor', description: 'Processes tuition payments, releases financial clearances and receipts.', hours: 'Mon-Fri 8:00 AM - 4:00 PM' },
    { name: 'ICTU (ICT Unit)', location: 'CCS Building, 2nd Floor', description: 'Manages student email accounts, LMS access, and campus Wi-Fi.', hours: 'Mon-Fri 8:00 AM - 5:00 PM' },
    { name: 'Gate 1 — Main Entrance', location: 'Front of Campus, San Miguel Road', description: 'Main entry/exit point. Guard booth with visitor sign-in.' },
    { name: 'Gate 2 — Back Gate', location: 'Rear of Campus, Barangay Road', description: 'Secondary entry/exit. Pedestrian and motorcycle access.' }
  ],

  // ---- Admission Info (for Non-CSPC) ----
  admissionInfo: {
    requirements: ['High School Report Card (Form 137 / SF10)', 'PSA Birth Certificate', '2x2 ID Photo (4 copies)', 'Certificate of Good Moral Character', 'CSPC Admission Test Results'],
    steps: ['1. Visit the Registrar or apply online at cspc.edu.ph', '2. Submit the required documents', '3. Take the CSPC Admission Test', '4. Wait for admission results via email', '5. Proceed to enrollment upon acceptance'],
    deadline: 'April 30, 2026',
    contactEmail: 'admissions@cspc.edu.ph'
  },

  // ---- All Campus Rooms (for Instructor) ----
  allRooms: [
    { building: 'CCS Building', room: 'Room 301', type: 'Lecture', capacity: 45 },
    { building: 'CCS Building', room: 'Room 302', type: 'Lecture', capacity: 45 },
    { building: 'CCS Building', room: 'CompLab 1', type: 'Computer Lab', capacity: 40 },
    { building: 'CCS Building', room: 'CompLab 2', type: 'Computer Lab', capacity: 40 },
    { building: 'Academic Building', room: 'Room 101', type: 'Lecture', capacity: 50 },
    { building: 'Academic Building', room: 'Room 102', type: 'Lecture', capacity: 50 },
    { building: 'Academic Building', room: 'Room 201', type: 'Lecture', capacity: 40 },
    { building: 'Academic Building', room: 'Room 205', type: 'Lecture', capacity: 40 },
    { building: 'Engineering Building', room: 'ENG-101', type: 'Lecture', capacity: 45 },
    { building: 'Engineering Building', room: 'ENG-Lab', type: 'Engineering Lab', capacity: 30 },
    { building: 'Main Building', room: 'Function Hall', type: 'Multi-purpose', capacity: 200 },
    { building: 'Gymnasium', room: 'Main Court', type: 'Sports', capacity: 500 }
  ],

  // ---- Guest Building Corridors ----
  guestBuildings: [
    { name: 'CCS Building', description: 'College of Computer Studies — houses lecture rooms and computer labs.', floors: 3 },
    { name: 'Academic Building', description: 'General purpose academic building with classrooms and faculty offices.', floors: 3 },
    { name: 'Engineering Building', description: 'Engineering labs, lecture rooms, and workshop spaces.', floors: 2 },
    { name: 'Admin Building', description: 'Administrative offices including Registrar, Cashier, and HR.', floors: 2 },
    { name: 'Library', description: 'Main campus library with reading areas and digital resources.', floors: 2 },
    { name: 'Gymnasium', description: 'Indoor sports court and fitness facilities.', floors: 1 }
  ],

  // ---- Public Achievements ----
  achievements: [
    { title: 'Level IV Accreditation — BS Information Technology', year: '2025', detail: 'AACCUP granted Level IV status, the highest accreditation for the BSIT program.' },
    { title: 'National IT Skills Competition — Champion', year: '2025', detail: 'CSPC students won 1st place in the national collegiate IT skills competition.' },
    { title: 'ISO 9001:2015 Certified', year: '2024', detail: 'CSPC earned ISO certification for quality management systems.' },
    { title: 'Best State College in Bicol Region', year: '2024', detail: 'Recognized by CHED as the top-performing state college in the region.' }
  ]
};

// Override default profiles with localStorage data if modified by user
if (typeof localStorage !== 'undefined') {
  const savedStudent = localStorage.getItem('campusphere-student');
  if (savedStudent) {
    CampuSphereData.studentProfile = {
      ...CampuSphereData.studentProfile,
      ...JSON.parse(savedStudent)
    };
  }

  const savedInstructor = localStorage.getItem('campusphere-instructor');
  if (savedInstructor) {
    CampuSphereData.instructorProfile = {
      ...CampuSphereData.instructorProfile,
      ...JSON.parse(savedInstructor)
    };
  }
}
