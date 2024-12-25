

const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

themeToggle.addEventListener('click', () => {
if (root.style.getPropertyValue('--background-color') === '#1a1a1a') {
    root.style.setProperty('--background-color', '#ffffff');
    root.style.setProperty('--text-color', '#000000');
    root.style.setProperty('--card-background-color', '#e6e8fa');
    root.style.setProperty('--card-text-color', '#000000');
    root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.3)'); // Light mode shadow color
    themeToggle.textContent = 'Dark Mode';
} else {
    root.style.setProperty('--background-color', '#1a1a1a');
    root.style.setProperty('--text-color', '#e0e0e0');
    root.style.setProperty('--card-background-color', '#2a2a2a');
    root.style.setProperty('--card-text-color', '#e0e0e0');
    root.style.setProperty('--shadow-color', 'rgba(255, 255, 255, 0.3)'); // Dark mode shadow color
    themeToggle.textContent = 'Light Mode';
}
});
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
// Scroll to top on page load
window.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    // Remove hash from URL
    if (window.location.hash) {
        history.replaceState(null, null, ' ');
    }
});



// Fetch content from localStorage
function fetchContent() {
    const data = JSON.parse(localStorage.getItem('data')) || {
        bio: {
            name: '',
            description: '',
            email: '',
            phone: '',
            linkedin: '',
            github: '',
            kaggle: '',
            photo: ''
        },
        summary: '',
        experiences: [],
        projects: [],
        education: [],
        certifications: [],
        skills: [],
        involvement: []
    };

    // Display bio
    displayBio(data.bio);

    // Display summary
    const summaryContent = document.getElementById('summary-content');
    if (summaryContent) {
        summaryContent.value = data.summary;
    }

    // Display experiences
    displayExperiences(data.experiences);

    // Display projects
    displayProjects(data.projects);

    // Display education
    displayEducation(data.education);

    // Display certifications
    displayCertifications(data.certifications);

    // Display skills
    displaySkills(data.skills);

    // Display involvement
    displayInvolvement(data.involvement);
}

function displayBio(bioData) {
    if (!bioData) {
        console.error("bioData is undefined or null.");
        return;
    }

    const bioName = document.getElementById('bio-name');
    const bioDescription = document.getElementById('bio-description');
    const bioEmail = document.getElementById('bio-email');
    const bioPhone = document.getElementById('bio-phone');
    const bioLinkedin = document.getElementById('bio-linkedin');
    const bioGithub = document.getElementById('bio-github');
    const bioKaggle = document.getElementById('bio-kaggle');
    const bioPhoto = document.getElementById('bio-photo');

    // Check that all required elements are available before accessing
    if (bioName && bioDescription && bioEmail && bioPhone && bioLinkedin && bioGithub && bioKaggle && bioPhoto) {
        // Display the profile data in the form
        bioName.textContent = bioData.name || '';
        bioDescription.textContent = bioData.description || '';
        bioEmail.textContent = bioData.email || '';
        bioEmail.href = `mailto:${bioData.email || ''}`;
        bioPhone.textContent = bioData.phone || '';
        bioLinkedin.textContent = 'LinkedIn';
        bioLinkedin.href = bioData.linkedin || '';
        bioGithub.textContent = 'GitHub';
        bioGithub.href = bioData.github || '';
        bioKaggle.textContent = 'Kaggle';
        bioKaggle.href = bioData.kaggle || '';
        bioPhoto.src = bioData.photo || '';
    } else {
        console.error("One or more elements are missing in the DOM.");
    }
}
// Load bio data on page load
window.onload = function() {
    const bioData = JSON.parse(localStorage.getItem('bioData'));
    if (bioData) {
        displayBio(bioData);
    }
};

// Initial call to display the BIO content if it exists
// displayBio();   // Removed to prevent calling displayBio without a valid argument

function displayExperiences(experiences) {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
        experienceSection.innerHTML = '<h2>Experience</h2>';
        experiences.forEach((experience) => {
            const experienceDiv = document.createElement('div');
            experienceDiv.className = 'content-item';
            experienceDiv.innerHTML = `
                <h3>${experience.title}</h3>
                <p><strong>${experience.subtitle}</strong></p>
                <ul>
                    ${experience.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
                </ul>
            `;
            experienceSection.appendChild(experienceDiv);
        });
    }
}

function displayProjects(projects) {
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projectsContainer.innerHTML = '';
        projects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank" rel="noopener noreferrer">Link</a>
            `;
            if (index >= 2) {
                card.style.display = 'none'; // Hide all cards except the first two
            }
            projectsContainer.appendChild(card);
        });

        const viewMoreButton = document.getElementById('view-more');
        const viewLessButton = document.getElementById('view-less');

        viewMoreButton.addEventListener('click', () => {
            const hiddenCards = projectsContainer.querySelectorAll('.card[style*="display: none"]');
            hiddenCards.forEach(card => {
                card.style.display = 'block'; // Show all hidden cards
            });
            viewMoreButton.style.display = 'none'; // Hide the "View More" button
            viewLessButton.style.display = 'block'; // Show the "View Less" button
        });

        viewLessButton.addEventListener('click', () => {
            const allCards = projectsContainer.querySelectorAll('.card');
            allCards.forEach((card, index) => {
                if (index >= 2) {
                    card.style.display = 'none'; // Hide all cards except the first two
                }
            });
            viewMoreButton.style.display = 'block'; // Show the "View More" button
            viewLessButton.style.display = 'none'; // Hide the "View Less" button
        });
    }
}

function displayEducation(education = []) {
    const educationSection = document.getElementById('education');
    if (educationSection) {
        educationSection.innerHTML = '<h2>Education</h2>';
        education.forEach((edu) => {
            const educationDiv = document.createElement('div');
            educationDiv.className = 'content-item';
            educationDiv.innerHTML = `
                <h3>${edu.title}</h3>
                <p>${edu.subtitle}</p>
            `;
            educationSection.appendChild(educationDiv);
        });
    }
}

function displayCertifications(certifications = []) {
    const certificationsSection = document.getElementById('certifications');
    if (certificationsSection) {
        certificationsSection.innerHTML = '<h2>Certifications</h2>';
        certifications.forEach((cert) => {
            const certificationDiv = document.createElement('div');
            certificationDiv.className = 'content-item';
            certificationDiv.innerHTML = `
                <h3>${cert.title}</h3>
                <p>${cert.subtitle}</p>
            `;
            certificationsSection.appendChild(certificationDiv);
        });
    }
}

function displaySkills(skills = []) {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsSection.innerHTML = '<h2>Skills</h2>';
        skills.forEach((skill) => {
            const skillDiv = document.createElement('div');
            skillDiv.className = 'content-item';
            skillDiv.innerHTML = `
                <h3>${skill.title}</h3>
                <p>${skill.subtitle}</p>
            `;
            skillsSection.appendChild(skillDiv);
        });
    }
}

function displayInvolvement() {
    const data = JSON.parse(localStorage.getItem('data')) || { involvement: [] };
    const involvementList = document.getElementById('involvement-list');
    if (!involvementList) {
        console.error("Element with id 'involvement-list' not found in the DOM");
        return;
    }
    involvementList.innerHTML = '';  // Clear the list before appending new items

    data.involvement.forEach((involve, index) => {
        const involvementDiv = document.createElement('div');
        involvementDiv.className = 'content-item';
        involvementDiv.innerHTML = `
            <article>
                <h3>${involve.title}</h3>
                <p><strong>${involve.subtitle}</strong></p>
                <p>${involve.description}</p>
                <button onclick="deleteInvolvement(${index})">Delete</button>
            </article>
        `;
        involvementList.appendChild(involvementDiv);
    });
}

// Fetch content on page load
window.addEventListener('DOMContentLoaded', (event) => {
    fetchContent();
});