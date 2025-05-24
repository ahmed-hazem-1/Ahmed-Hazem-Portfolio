document.addEventListener('DOMContentLoaded', function() {
  // Get all portfolio items
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  portfolioItems.forEach(item => {
    // Check if this item has an app link
    const projectData = {
      // Extract project data from the DOM or define manually for each project
      hasAppLink: true // Default value
    };
    
    // For specific projects without app links, set hasAppLink to false
    // This could be expanded to read from a data attribute or other source
    if (item.classList.contains('no-app-link')) {
      projectData.hasAppLink = false;
    }
    
    // Get the overlay element
    const overlay = item.querySelector('.portfolio-overlay');
    if (overlay) {
      const appButton = overlay.querySelector('.btn-view-app');
      if (appButton && !projectData.hasAppLink) {
        appButton.style.display = 'none';
      }
    }
  });
});