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
window.addEventListener('DOMContentLoaded', (event) => {
    window.scrollTo(0, 0);
    // Remove hash from URL
    if (window.location.hash) {
        history.replaceState(null, null, ' ');
    }
    fetchContent();
});

// Fetch content from localStorage
function fetchContent() {
    const data = JSON.parse(localStorage.getItem('data')) || {
        bio: '',
        summary: '',
        experiences: [],
        projects: [],
        education: [],
        certifications: [],
        skills: [],
        involvement: []
    };

    // Display bio
    const bioContent = document.getElementById('bio-content');
    if (bioContent) {
        bioContent.value = data.bio;
    }

    // Display summary
    const summaryContent = document.getElementById('summary-content');
    if (summaryContent) {
        summaryContent.value = data.summary;
    }

    // Display experiences
    displayExperiences();

    // Display projects
    displayProjects();

    // Display education
    displayEducation();

    // Display certifications
    displayCertifications();

    // Display skills
    displaySkills();

    // Display involvement
    displayInvolvement();
}

// Function to display the BIO content
document.getElementById('bio-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('bio-name').value.trim();
    const description = document.getElementById('bio-description').value.trim();
    const email = document.getElementById('bio-email').value.trim();
    const phone = document.getElementById('bio-phone').value.trim();
    const linkedin = document.getElementById('bio-linkedin').value.trim();
    const github = document.getElementById('bio-github').value.trim();
    const kaggle = document.getElementById('bio-kaggle').value.trim();
    const photo = document.getElementById('bio-photo').value.trim();

    // Validate the inputs
    if (!name || !description || !email || !phone || !linkedin || !github || !kaggle || !photo) {
        alert("All fields are required!");
        return;
    }

    // Create bio data object
    const bioData = {
        name,
        description,
        email,
        phone,
        linkedin,
        github,
        kaggle,
        photo
    };

    // Save to localStorage
    localStorage.setItem('bioData', JSON.stringify(bioData));

    // Display updated bio information
    displayBio(bioData);
    alert("Bio updated successfully!");
});

function displayBio(bioData) {
    const bioName = document.getElementById('bio-name');
    const bioDescription = document.getElementById('bio-description');
    const bioEmail = document.getElementById('bio-email');
    const bioPhone = document.getElementById('bio-phone');
    const bioLinkedin = document.getElementById('bio-linkedin');
    const bioGithub = document.getElementById('bio-github');
    const bioKaggle = document.getElementById('bio-kaggle');
    const bioPhoto = document.getElementById('bio-photo');
    const bioPhotoDisplay = document.getElementById('bio-photo-display');

    // Check that all required elements are available before accessing
    // This ensures that the elements exist in the DOM and prevents errors when trying to access or modify them
    if (bioName && bioDescription && bioEmail && bioPhone && bioLinkedin && bioGithub && bioKaggle && bioPhoto && bioPhotoDisplay) {
        // Display the profile data in the form
        bioName.value = bioData.name;
        bioDescription.value = bioData.description;
        bioEmail.value = bioData.email;
        bioPhone.value = bioData.phone;
        bioLinkedin.value = bioData.linkedin;
        bioGithub.value = bioData.github;
        bioKaggle.value = bioData.kaggle;
        bioPhoto.value = bioData.photo;

        // Update the displayed photo
        bioPhotoDisplay.src = bioData.photo;
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

document.getElementById('summary-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const summary = document.getElementById('summary-content').value;
    saveContent({ summary });
    alert('Summary saved!');
});

document.getElementById('experience-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form inputs
    const title = document.getElementById('experience-title').value;
    const subtitle = document.getElementById('experience-subtitle').value;
    const bullets = document.getElementById('experience-bullets').value
        .split('\n') // Split into lines
        .map(bullet => bullet.trim()) // Trim whitespace
        .filter(bullet => bullet.startsWith('-')); // Keep only lines starting with '-'

    const experience = {
        title,
        subtitle,
        bullets: bullets.map(bullet => bullet.slice(1).trim()) // Remove leading '-'
    };

    let data = JSON.parse(localStorage.getItem('data')) || { experiences: [], projects: [] };
    data.experiences.push(experience);
    localStorage.setItem('data', JSON.stringify(data));

    displayExperiences();
    this.reset();
});

document.getElementById('projects-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form inputs and trim whitespace
    const title = document.getElementById('project-title').value.trim();
    const description = document.getElementById('project-description').value.trim();
    const link = document.getElementById('project-link').value.trim();

    console.log('Form inputs:', { title, description, link });

    // Validate inputs
    if (!title || !description || !link) {
        alert("All fields are required!");
        return;
    }

    // Validate link format (basic URL check)
    const urlPattern = /^(https?:\/\/)?([\w\d\-]+\.)+[\w\d]{2,}(\/.*)?$/;
    if (!urlPattern.test(link)) {
        alert("Please enter a valid URL!");
        return;
    }

    // Create the project object
    const project = {
        title,
        description,
        link
    };

    console.log('Project object:', project);

    // Fetch existing projects from localStorage or initialize an empty array
    let data = JSON.parse(localStorage.getItem('data')) || { experiences: [], projects: [] };
    if (!data.projects) {
        data.projects = [];
    }
    data.projects.push(project);

    console.log('Updated data:', data);

    // Save updated data back to localStorage
    localStorage.setItem('data', JSON.stringify(data));

    // Display updated projects list
    displayProjects();

    // Reset the form
    this.reset();
});

function displayExperiences() {
    const data = JSON.parse(localStorage.getItem('data')) || { experiences: [], projects: [] };
    const experiences = data.experiences || [];
    const experienceList = document.getElementById('experience-list');
    experienceList.innerHTML = '';

    experiences.forEach((experience, index) => {
        const experienceDiv = document.createElement('div');
        experienceDiv.className = 'content-item';
        experienceDiv.innerHTML = `
            <article>
                <h3>${experience.title}</h3>
                <p><strong>${experience.subtitle}</strong></p>
                <ul>
                    ${experience.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
                </ul>
                <button onclick="deleteExperience(${index})">Delete</button>
            </article>
        `;
        experienceList.appendChild(experienceDiv);
    });
}

function deleteExperience(index) {
    let data = JSON.parse(localStorage.getItem('data')) || { experiences: [], projects: [] };
    data.experiences.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(data));
    displayExperiences();
}

function displayProjects() {
    const data = JSON.parse(localStorage.getItem('data')) || { experiences: [], projects: [] };
    const projects = data.projects || [];
    const projectsList = document.getElementById('projects-list');
    projectsList.innerHTML = '';

    projects.forEach((project, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'content-item';
        projectDiv.innerHTML = `
            <article>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">Visit Project</a>
                <button onclick="deleteProject(${index})">Delete</button>
            </article>
        `;
        projectsList.appendChild(projectDiv);
    });
}

function deleteProject(index) {
    let data = JSON.parse(localStorage.getItem('data')) || { experiences: [], projects: [] };
    data.projects.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(data));
    displayProjects();
}

function displayEducation() {
    const data = JSON.parse(localStorage.getItem('data')) || { education: [] };
    const educationList = document.getElementById('education-list');

    // Clear existing entries
    educationList.innerHTML = '';

    // Populate the list with entries from localStorage
    data.education.forEach((edu, index) => {
        const educationDiv = document.createElement('div');
        educationDiv.className = 'content-item';
        educationDiv.innerHTML = `
            <article>
                <h3>${edu.title}</h3>
                <p>${edu.subtitle}</p>
                <button onclick="deleteEducation(${index})">Delete</button>
            </article>
        `;
        educationList.appendChild(educationDiv);
    });
}

// Delete Education Entry
function deleteEducation(index) {
    let data = JSON.parse(localStorage.getItem('data')) || { education: [] };

    // Remove the specified entry
    data.education.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(data));

    // Refresh the education list
    displayEducation();
}

// Initial Load
document.addEventListener('DOMContentLoaded', displayEducation);

function displayCertifications() {
    const data = JSON.parse(localStorage.getItem('data')) || { certifications: [] };
    const certificationsList = document.getElementById('certifications-list');

    certificationsList.innerHTML = '';

    data.certifications.forEach((cert, index) => {
        const certificationDiv = document.createElement('div');
        certificationDiv.className = 'content-item';
        certificationDiv.innerHTML = `
            <article>
                <h3>${cert.title}</h3>
                <p>${cert.subtitle}</p>
                <button onclick="deleteCertification(${index})">Delete</button>
            </article>
        `;
        certificationsList.appendChild(certificationDiv);
    });
}

function deleteCertification(index) {
    let data = JSON.parse(localStorage.getItem('data')) || { certifications: [] };
    data.certifications.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(data));
    displayCertifications();
}

// Initial Load
document.addEventListener('DOMContentLoaded', displayCertifications);


function displaySkills() {
    const data = JSON.parse(localStorage.getItem('data')) || { skills: [] };
    const skillsList = document.getElementById('skills-list');

    // Clear the current list
    skillsList.innerHTML = '';

    // Check if skills exist in data
    (data.skills || []).forEach((skill, index) => {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'content-item';
        skillDiv.innerHTML = `
            <article>
                <h3>${skill.title}</h3>
                <p>${skill.subtitle}</p>
                <button onclick="deleteSkill(${index})">Delete</button>
            </article>
        `;
        skillsList.appendChild(skillDiv);
    });
}

function deleteSkill(index) {
    let data = JSON.parse(localStorage.getItem('data')) || { skills: [] };

    // Ensure skills array exists
    if (Array.isArray(data.skills) && data.skills.length > index) {
        data.skills.splice(index, 1); // Remove the selected skill
        localStorage.setItem('data', JSON.stringify(data)); // Save updated data
        displaySkills(); // Refresh the displayed skills
    } else {
        console.error("Skill index out of bounds or data missing.");
    }
}

// Initial Load
document.addEventListener('DOMContentLoaded', displaySkills);

function displayInvolvement() {
    const data = JSON.parse(localStorage.getItem('data')) || { involvement: [] };
    const involvementList = document.getElementById('involvement-list');
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

function deleteInvolvement(index) {
    let data = JSON.parse(localStorage.getItem('data')) || { involvement: [] };
    data.involvement.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(data));
    displayInvolvement();
}


// Initial Load
document.addEventListener('DOMContentLoaded', displayInvolvement);


document.getElementById('education-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form inputs and trim whitespace
    const title = document.getElementById('education-title').value.trim();
    const subtitle = document.getElementById('education-subtitle').value.trim();

    console.log('Form inputs:', { title, subtitle });

    // Validate inputs
    if (!title || !subtitle) {
        alert("Both Title and Subtitle fields are required!");
        return;
    }

    // Create the education object
    const education = {
        title,
        subtitle
    };

    console.log('Education object:', education);

    // Fetch existing education entries from localStorage or initialize an empty array
    let data = JSON.parse(localStorage.getItem('data')) || { education: [] };
    if (!data.education) {
        data.education = [];
    }
    data.education.push(education);

    console.log('Updated data:', data);

    // Save updated data back to localStorage
    localStorage.setItem('data', JSON.stringify(data));

    // Display updated education list
    displayEducation();

    // Reset the form
    this.reset();
});

document.getElementById('certifications-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form inputs
    const title = document.getElementById('certification-title').value.trim();
    const subtitle = document.getElementById('certification-subtitle').value.trim();

    // Validate inputs
    if (!title || !subtitle) {
        alert("Both Title and Subtitle fields are required!");
        return;
    }

    // Create certification object
    const certification = { title, subtitle };

    // Fetch and update data in localStorage
    let data = JSON.parse(localStorage.getItem('data')) || { certifications: [] };
    if (!data.certifications) {
        data.certifications = [];
    }
    data.certifications.push(certification);

    localStorage.setItem('data', JSON.stringify(data));

    // Refresh the list and reset the form
    displayCertifications();
    this.reset();
});

document.getElementById('skills-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get values of both title and subtitle
    const title = document.getElementById('skill-title').value.trim();
    const subtitle = document.getElementById('skill-subtitle').value.trim();

    // Validation to check both fields
    if (!title || !subtitle) {
        alert("Both Title and Subtitle fields are required!");
        return;
    }

    // Create skill object
    const skill = { title, subtitle };

    // Fetch existing data from localStorage or initialize empty array
    let data = JSON.parse(localStorage.getItem('data')) || { skills: [] };

    // Add new skill to the array
    data.skills.push(skill);

    // Save updated data back to localStorage
    localStorage.setItem('data', JSON.stringify(data));

    // Display updated list of skills
    displaySkills();

    // Reset the form
    this.reset();
});


document.getElementById('involvement-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form inputs and trim whitespace
    const title = document.getElementById('involvement-title').value.trim();
    const subtitle = document.getElementById('involvement-subtitle').value.trim();
    const description = document.getElementById('involvement-description').value.trim();

    // Validate that all fields are filled
    if (!title || !subtitle || !description) {
        alert("All fields are required!");
        return;
    }

    // Create the involvement object
    const involvement = {
        title,
        subtitle,
        description
    };

    // Fetch existing involvement data from localStorage or initialize an empty array
    let data = JSON.parse(localStorage.getItem('data')) || { involvement: [] };

    // Ensure involvement array exists
    if (!data.involvement) {
        data.involvement = [];
    }

    // Push the new involvement into the array
    data.involvement.push(involvement);

    // Save the updated data back to localStorage
    localStorage.setItem('data', JSON.stringify(data));

    // Display updated involvement list
    displayInvolvement();

    // Reset the form
    this.reset();
});

// Save content to localStorage
function saveContent(content) {
    let data = JSON.parse(localStorage.getItem('data')) || { experiences: [], projects: [] };
    data = { ...data, ...content };
    localStorage.setItem('data', JSON.stringify(data));
}

// Display content on page load
fetchContent();