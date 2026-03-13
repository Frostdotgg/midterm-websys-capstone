/**
 * profile-script.js
 * Universal script added to all pages to handle the Profile Dropdown and Edit Modal.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Set current role and profile info from localStorage
    const savedRole = localStorage.getItem('campusphere-role') || 'student-cspc';
    let profileData = {};

    if (savedRole === 'student-cspc') {
        profileData = JSON.parse(localStorage.getItem('campusphere-student')) || {
            name: 'Aaron V. Lasprillas',
            studentId: 'CSPC-2024-001234',
            email: 'aaron.lasprillas@cspc.edu.ph',
            course: 'BS Information Technology',
            yearLevel: '3rd Year',
            section: 'IT-3A',
            assignedRoom: 'Room 301 - CCS Building',
            gwa: '1.45',
            status: 'Regular',
            enrollmentStatus: 'Enrolled',
            semester: '2nd Semester, A.Y. 2025-2026'
        };
    } else if (savedRole === 'instructor') {
        profileData = JSON.parse(localStorage.getItem('campusphere-instructor')) || {
            name: 'Dr. Maria Santos',
            employeeId: 'CSPC-FAC-0087',
            email: 'maria.santos@cspc.edu.ph',
            department: 'College of Computer Studies',
            position: 'Associate Professor',
            status: 'Active'
        };
    } else if (savedRole === 'admin') {
        profileData = { name: 'Admin User', email: 'admin@cspc.edu.ph' };
    } else {
        profileData = { name: 'Guest User', email: '' }; // Guest
    }

    // Update nav username dynamically globally
    const navUsername = document.getElementById('navUsername') || document.querySelector('.dash-nav__username');
    if (navUsername && profileData.name) {
        navUsername.textContent = profileData.name.split(' ')[0];
    }
    const sidebarName = document.getElementById('sidebarName');
    if (sidebarName && profileData.name) {
        sidebarName.textContent = profileData.name;
    }
    const sidebarEmail = document.getElementById('sidebarEmail');
    if (sidebarEmail && profileData.email) {
        sidebarEmail.textContent = profileData.email;
    }

    // 2. Build Dropdown
    const userContainer = document.querySelector('.dash-nav__user');
    if (!userContainer) return;

    const existingDropdown = document.querySelector('.profile-dropdown');
    if (existingDropdown) existingDropdown.remove();

    const dropdown = document.createElement('div');
    dropdown.className = 'profile-dropdown';

    const canEdit = savedRole === 'student-cspc' || savedRole === 'instructor';
    let dropdownHTML = '';

    if (canEdit) {
        dropdownHTML += `
            <button class="profile-dropdown__btn" id="editProfileBtn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                Edit Profile
            </button>
        `;
    }
    dropdownHTML += `
        <button class="profile-dropdown__btn" id="logoutBtn" style="color:var(--red);">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            Logout
        </button>
    `;

    dropdown.innerHTML = dropdownHTML;
    userContainer.appendChild(dropdown);

    userContainer.addEventListener('click', (e) => {
        dropdown.classList.toggle('show');
        e.stopPropagation();
    });

    document.addEventListener('click', () => {
        dropdown.classList.remove('show');
    });

    // 3. Build Edit Modal if applicable
    if (canEdit) {
        let modalFields = '';
        if (savedRole === 'student-cspc') {
            modalFields = `
                <div class="edit-form-group">
                    <label class="edit-form-label">Full Name</label>
                    <input type="text" id="editName" class="edit-form-input" value="${profileData.name}">
                </div>
                <div class="edit-form-group">
                    <label class="edit-form-label">Student ID</label>
                    <input type="text" id="editId" class="edit-form-input" value="${profileData.studentId}">
                </div>
                <div class="edit-form-group">
                    <label class="edit-form-label">Email</label>
                    <input type="email" id="editEmail" class="edit-form-input" value="${profileData.email}">
                </div>
                <div class="edit-form-group">
                    <label class="edit-form-label">Course</label>
                    <input type="text" id="editCourse" class="edit-form-input" value="${profileData.course}">
                </div>
                <div class="edit-form-group" style="display:flex; gap:16px;">
                    <div style="flex:1;">
                        <label class="edit-form-label">Year Level</label>
                        <input type="text" id="editYear" class="edit-form-input" value="${profileData.yearLevel}">
                    </div>
                    <div style="flex:1;">
                        <label class="edit-form-label">Section</label>
                        <input type="text" id="editSection" class="edit-form-input" value="${profileData.section}">
                    </div>
                </div>
            `;
        } else if (savedRole === 'instructor') {
            modalFields = `
                <div class="edit-form-group">
                    <label class="edit-form-label">Full Name</label>
                    <input type="text" id="editName" class="edit-form-input" value="${profileData.name}">
                </div>
                <div class="edit-form-group">
                    <label class="edit-form-label">Employee ID</label>
                    <input type="text" id="editId" class="edit-form-input" value="${profileData.employeeId}">
                </div>
                <div class="edit-form-group">
                    <label class="edit-form-label">Email</label>
                    <input type="email" id="editEmail" class="edit-form-input" value="${profileData.email}">
                </div>
                <div class="edit-form-group">
                    <label class="edit-form-label">Department</label>
                    <input type="text" id="editDept" class="edit-form-input" value="${profileData.department}">
                </div>
                <div class="edit-form-group">
                    <label class="edit-form-label">Position</label>
                    <input type="text" id="editPos" class="edit-form-input" value="${profileData.position}">
                </div>
            `;
        }

        const modalHTML = `
            <div class="edit-modal-overlay" id="editModalOverlay">
                <div class="edit-modal" onclick="event.stopPropagation()">
                    <div class="edit-modal__header">
                        <div class="edit-modal__title">Edit Profile</div>
                        <button class="edit-modal__close" id="closeEditModal">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    <div class="edit-modal__body">
                        ${modalFields}
                    </div>
                    <div class="edit-modal__footer">
                        <button class="btn btn--outline btn--sm" id="cancelEditBtn">Cancel</button>
                        <button class="btn btn--primary btn--sm" id="saveEditBtn">Save Changes</button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);

        const overlay = document.getElementById('editModalOverlay');
        const closeBtn = document.getElementById('closeEditModal');
        const cancelBtn = document.getElementById('cancelEditBtn');
        const saveBtn = document.getElementById('saveEditBtn');
        const editBtn = document.getElementById('editProfileBtn');

        if (editBtn) {
            editBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                overlay.classList.add('show');
                dropdown.classList.remove('show');
            });
        }

        const closeModal = () => overlay.classList.remove('show');
        closeBtn.addEventListener('click', closeModal);
        cancelBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', closeModal);

        saveBtn.addEventListener('click', () => {
            if (savedRole === 'student-cspc') {
                const newData = {
                    ...profileData,
                    name: document.getElementById('editName').value,
                    studentId: document.getElementById('editId').value,
                    email: document.getElementById('editEmail').value,
                    course: document.getElementById('editCourse').value,
                    yearLevel: document.getElementById('editYear').value,
                    section: document.getElementById('editSection').value
                };
                localStorage.setItem('campusphere-student', JSON.stringify(newData));

                if (window.CampuSphereData) {
                    window.CampuSphereData.studentProfile = {
                        ...window.CampuSphereData.studentProfile,
                        ...newData
                    };
                }
            } else if (savedRole === 'instructor') {
                const newData = {
                    ...profileData,
                    name: document.getElementById('editName').value,
                    employeeId: document.getElementById('editId').value,
                    email: document.getElementById('editEmail').value,
                    department: document.getElementById('editDept').value,
                    position: document.getElementById('editPos').value
                };
                localStorage.setItem('campusphere-instructor', JSON.stringify(newData));

                if (window.CampuSphereData) {
                    window.CampuSphereData.instructorProfile = {
                        ...window.CampuSphereData.instructorProfile,
                        ...newData
                    };
                }
            }

            // Immediately apply the new name to the avatar label
            const newName = document.getElementById('editName').value;
            if (navUsername) navUsername.textContent = newName.split(' ')[0];
            if (sidebarName) sidebarName.textContent = newName;

            closeModal();
            // Optional: If dashboard, maybe re-render
            if (window.switchSection && window.currentRole && window.currentSection) {
                window.switchSection(window.currentSection);
            } else {
                window.location.reload(); // Hard reload if not full generic dashboard
            }
        });
    }

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Just simulate logout by going to landing or clearing role
            localStorage.setItem('campusphere-role', 'guest');
            window.location.href = 'landing.html';
        });
    }
});
