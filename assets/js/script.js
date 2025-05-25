'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}



// LinkedIn embed lazy loading function
function loadLinkedInEmbed(button) {
  const placeholder = button.closest('.linkedin-embed-placeholder');
  const container = placeholder.parentElement;
  const iframe = container.querySelector('iframe');
  
  // Show loading state
  button.innerHTML = '<ion-icon name="hourglass-outline"></ion-icon> Loading...';
  button.disabled = true;
  
  // Set the src attribute to load the content
  iframe.src = iframe.getAttribute('data-src');
  
  // When the iframe is loaded, hide the placeholder
  iframe.onload = function() {
    iframe.classList.add('loaded');
    placeholder.classList.add('hidden');
  };
  
  // Fallback if onload doesn't trigger
  setTimeout(() => {
    iframe.classList.add('loaded');
    placeholder.classList.add('hidden');
  }, 3000);
}

// Handle project overlay buttons visibility
document.addEventListener('DOMContentLoaded', function() {
  // Process all project items to ensure proper button display
  const projectItems = document.querySelectorAll('.project-item');
  
  projectItems.forEach(item => {
    const appButton = item.querySelector('.btn-view-app');
    
    // Check if this project has a view app button but no actual link yet
    if (appButton && (appButton.getAttribute('href') === '#' || appButton.getAttribute('href') === '' || !appButton.hasAttribute('href'))) {
      // Hide the app button if there's no valid link
      appButton.style.display = 'none';
    }
  });
});

// Blog filtering functionality - similar to project filtering
const blogFilterBtn = document.querySelectorAll("[data-blog-filter-btn]");
const blogItems = document.querySelectorAll(".blog-post-item");

// Add event to all blog filter button items
let lastClickedBlogBtn = blogFilterBtn[0];

for (let i = 0; i < blogFilterBtn.length; i++) {
  blogFilterBtn[i].addEventListener("click", function() {
    const selectedCategory = this.getAttribute("data-blog-filter-btn");
    
    // Filter blog posts
    for (let j = 0; j < blogItems.length; j++) {
      if (selectedCategory === "all" || blogItems[j].dataset.blogCategory === selectedCategory) {
        blogItems[j].style.display = "block";
        setTimeout(() => {
          blogItems[j].classList.add("active");
        }, 10);
      } else {
        blogItems[j].classList.remove("active");
        setTimeout(() => {
          blogItems[j].style.display = "none";
        }, 300);
      }
    }
    
    // Update button styles
    lastClickedBlogBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBlogBtn = this;
  });
}

// Theme toggle functionality
const themeToggleBtn = document.getElementById('theme-toggle-btn');
if (themeToggleBtn) {
  // Check for saved theme preference or use preferred color scheme
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = localStorage.getItem('theme') || 
                      (prefersDarkScheme.matches ? 'dark' : 'light');
  
  // Apply the saved theme or default
  document.body.classList.toggle('light-theme', currentTheme === 'light');
  document.body.classList.toggle('dark-theme', currentTheme === 'dark');
  
  // Update the toggle button appearance
  updateThemeToggleIcon(currentTheme);
  
  // Add click event to theme toggle button
  themeToggleBtn.addEventListener('click', function() {
    let theme;
    
    // Toggle theme
    if (document.body.classList.contains('light-theme')) {
      document.body.classList.replace('light-theme', 'dark-theme');
      theme = 'dark';
    } else {
      document.body.classList.replace('dark-theme', 'light-theme');
      theme = 'light';
    }
    
    // Save the preference
    localStorage.setItem('theme', theme);
    
    // Update button icon
    updateThemeToggleIcon(theme);
  });
}

// Function to update theme toggle button appearance
function updateThemeToggleIcon(theme) {
  const moonIcon = document.querySelector('.moon-icon');
  const sunIcon = document.querySelector('.sun-icon');
  
  if (theme === 'dark') {
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
  } else {
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
  }
}

// Enhanced testimonials functionality
const testimonialItems = document.querySelectorAll('.testimonials-item');
if (testimonialItems.length > 0) {
  // Add animation when testimonials come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  testimonialItems.forEach(item => {
    observer.observe(item);
  });
}

// Add skill level indicators animation
document.addEventListener('DOMContentLoaded', function() {
  const skillItems = document.querySelectorAll('.skills-item[data-skill-level]');
  
  skillItems.forEach(item => {
    const level = item.getAttribute('data-skill-level');
    item.classList.add(`skill-${level}`);
    
    // Add tooltip showing skill level
    const tooltip = document.createElement('span');
    tooltip.className = 'skill-level-tooltip';
    tooltip.textContent = level.charAt(0).toUpperCase() + level.slice(1);
    item.appendChild(tooltip);
  });
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId !== '#') {
      e.preventDefault();
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});