/**
 * profile-script.js
 * Universal script added to all pages to handle the Profile Dropdown and Edit Modal.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Set current role and profile info from localStorage
    const savedRole = localStorage.getItem('campusphere-role') || 'student-cspc';
    let profileData = {};
    let storageKey = '';

    if (savedRole === 'student-cspc') {
        storageKey = 'campusphere-student';
        profileData = JSON.parse(localStorage.getItem(storageKey)) || {
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
        storageKey = 'campusphere-instructor';
        profileData = JSON.parse(localStorage.getItem(storageKey)) || {
            name: 'Dr. Maria Santos',
            employeeId: 'CSPC-FAC-0087',
            email: 'maria.santos@cspc.edu.ph',
            department: 'College of Computer Studies',
            position: 'Associate Professor',
            status: 'Active'
        };
    } else if (savedRole === 'admin') {
        storageKey = 'campusphere-admin';
        profileData = JSON.parse(localStorage.getItem(storageKey)) || { name: 'Admin User', email: 'admin@cspc.edu.ph' };
    } else if (savedRole === 'student-non-cspc') {
        storageKey = 'campusphere-non-cspc';
        profileData = JSON.parse(localStorage.getItem(storageKey)) || { name: 'Guest Student', email: 'student@gmail.com' };
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

    // Apply Profile Image globally
    const applyProfileImage = (base64Img) => {
        const avatars = document.querySelectorAll('.dash-nav__avatar, .sidebar-profile__img, .sidebar__avatar');
        if (!base64Img) {
            // Revert back to default SVG
            avatars.forEach(avatar => {
                if (avatar.classList.contains('sidebar-profile__img')) {
                    avatar.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
                    avatar.style.padding = '8px';
                } else if (avatar.classList.contains('sidebar__avatar')) {
                    avatar.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
                    avatar.style.padding = '';
                } else {
                    avatar.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
                    avatar.style.padding = '';
                }
            });
            return;
        }

        // Show uploaded image
        avatars.forEach(avatar => {
            avatar.innerHTML = `<img src="${base64Img}" alt="Profile Image" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">`;
            avatar.style.padding = '0'; // Remove padding for full fill
        });
    };

    if (profileData.profileImage) {
        applyProfileImage(profileData.profileImage);
    }

    // 2. Build Dropdown
    const userContainer = document.querySelector('.dash-nav__user');
    if (!userContainer) return;

    const existingDropdown = document.querySelector('.profile-dropdown');
    if (existingDropdown) existingDropdown.remove();

    const dropdown = document.createElement('div');
    dropdown.className = 'profile-dropdown';

    const canEdit = savedRole !== 'guest';
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
        const currentImg = profileData.profileImage ? `<img src="${profileData.profileImage}" alt="Profile" id="previewProfileImg">` : `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" id="previewProfileSvg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;

        const photoUploadArea = `
            <div class="edit-profile-photo">
                <div class="edit-photo-preview" id="editPhotoPreviewContainer">
                    ${currentImg}
                </div>
                <div class="edit-photo-controls">
                    <input type="file" id="profileImageUpload" accept="image/*" style="display:none;">
                    <button class="edit-photo-btn upload" id="btnUploadPhoto">Upload Photo</button>
                    <button class="edit-photo-btn remove" id="btnRemovePhoto">Remove</button>
                </div>
            </div>
        `;

        if (savedRole === 'student-cspc') {
            modalFields = photoUploadArea + `
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
            modalFields = photoUploadArea + `
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
        } else {
            // admin, student-non-cspc — simple name + email + photo only
            modalFields = photoUploadArea + `
                <div class="edit-form-group">
                    <label class="edit-form-label">Full Name</label>
                    <input type="text" id="editName" class="edit-form-input" value="${profileData.name}">
                </div>
                <div class="edit-form-group">
                    <label class="edit-form-label">Email</label>
                    <input type="email" id="editEmail" class="edit-form-input" value="${profileData.email}">
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
            let base64String = profileData.profileImage || null;
            const previewImg = document.getElementById('previewProfileImg');
            if (previewImg) {
                base64String = previewImg.src;
            } else {
                base64String = null; // Removed
            }

            // Build newData based on role
            let newData = { ...profileData, profileImage: base64String };
            const nameEl = document.getElementById('editName');
            const emailEl = document.getElementById('editEmail');
            if (nameEl) newData.name = nameEl.value;
            if (emailEl) newData.email = emailEl.value;

            if (savedRole === 'student-cspc') {
                const idEl = document.getElementById('editId');
                const courseEl = document.getElementById('editCourse');
                const yearEl = document.getElementById('editYear');
                const sectionEl = document.getElementById('editSection');
                if (idEl) newData.studentId = idEl.value;
                if (courseEl) newData.course = courseEl.value;
                if (yearEl) newData.yearLevel = yearEl.value;
                if (sectionEl) newData.section = sectionEl.value;
                if (window.CampuSphereData) {
                    window.CampuSphereData.studentProfile = { ...window.CampuSphereData.studentProfile, ...newData };
                }
            } else if (savedRole === 'instructor') {
                const idEl = document.getElementById('editId');
                const deptEl = document.getElementById('editDept');
                const posEl = document.getElementById('editPos');
                if (idEl) newData.employeeId = idEl.value;
                if (deptEl) newData.department = deptEl.value;
                if (posEl) newData.position = posEl.value;
                if (window.CampuSphereData) {
                    window.CampuSphereData.instructorProfile = { ...window.CampuSphereData.instructorProfile, ...newData };
                }
            }

            // Save to localStorage using the role's key
            if (storageKey) {
                localStorage.setItem(storageKey, JSON.stringify(newData));
            }

            // Immediately apply the new name and image to the avatar label
            const newName = document.getElementById('editName').value;
            if (navUsername) navUsername.textContent = newName.split(' ')[0];
            if (sidebarName) sidebarName.textContent = newName;

            applyProfileImage(base64String);

            closeModal();
            // Optional: If dashboard, maybe re-render
            if (window.switchSection && window.currentRole && window.currentSection) {
                window.switchSection(window.currentSection);
            } else {
                window.location.reload(); // Hard reload if not full generic dashboard
            }
        });

        // Photo Upload Handlers
        const btnUpload = document.getElementById('btnUploadPhoto');
        const btnRemove = document.getElementById('btnRemovePhoto');
        const fileInput = document.getElementById('profileImageUpload');
        const previewContainer = document.getElementById('editPhotoPreviewContainer');

        if (btnUpload && fileInput) {
            btnUpload.addEventListener('click', () => {
                fileInput.click();
            });

            fileInput.addEventListener('change', function () {
                const file = this.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        previewContainer.innerHTML = `<img src="${e.target.result}" alt="Profile" id="previewProfileImg">`;
                    }
                    reader.readAsDataURL(file);
                }
            });
        }

        if (btnRemove) {
            btnRemove.addEventListener('click', () => {
                fileInput.value = ''; // clear input
                previewContainer.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" id="previewProfileSvg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
            });
        }
    }

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Just simulate logout by clearing role and going to landing
            localStorage.setItem('campusphere-role', 'guest');
            window.location.href = '/';
        });
    }
});
