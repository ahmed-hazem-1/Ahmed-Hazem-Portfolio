document.addEventListener('DOMContentLoaded', function() {
  // Get all portfolio items
  const portfolioItems = document.querySelectorAll('.project-item');
  
  portfolioItems.forEach(item => {
    // Check if this item has an app link
    const projectData = {
      hasAppLink: true // Default value
    };
    
    // For specific projects without app links, set hasAppLink to false
    if (item.classList.contains('no-app-link')) {
      projectData.hasAppLink = false;
    }
    
    // Get the overlay element
    const overlay = item.querySelector('.project-overlay');
    if (overlay) {
      const appButton = overlay.querySelector('.btn-view-app');
      if (appButton && !projectData.hasAppLink) {
        appButton.style.display = 'none';
      }
    }
  });

  // Clean up skill items - remove all data attributes and ensure clean display
  const skillItems = document.querySelectorAll('.skills-item');
  skillItems.forEach(item => {
    // Remove any data attributes that might trigger tooltips
    item.removeAttribute('data-skill-level');
    item.removeAttribute('title');
    item.removeAttribute('data-tooltip');
    
    // Clean up any potential CSS content issues
    item.style.position = 'relative';
    
    // Ensure the text content is clean (no concatenated values)
    const originalText = item.textContent.trim();
    // Remove any concatenated skill levels (like "pythoadvanced")
    const cleanText = originalText.replace(/(beginner|intermediate|advanced|expert)$/i, '').trim();
    if (cleanText !== originalText) {
      item.textContent = cleanText;
    }
  });
});