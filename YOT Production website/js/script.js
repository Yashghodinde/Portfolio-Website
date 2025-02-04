document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('active');
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
      sidebar.classList.remove('active');
    }
  });

  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  
  document.body.classList.toggle('light-mode', savedTheme === 'light');
  themeToggle.checked = savedTheme === 'light';

  themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', themeToggle.checked ? 'light' : 'dark');
  });

  // Dropdown functionality
  document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = e.target.closest('.portfolio-dropdown');
      const content = parent.querySelector('.dropdown-content');
      const chevron = button.querySelector('.fa-chevron-down');
      
      // Toggle current dropdown
      content.classList.toggle('active');
      chevron.classList.toggle('fa-rotate-180');
      
      // Close other dropdowns
      document.querySelectorAll('.portfolio-dropdown').forEach(other => {
        if (other !== parent) {
          other.querySelector('.dropdown-content').classList.remove('active');
          other.querySelector('.fa-chevron-down').classList.remove('fa-rotate-180');
        }
      });
    });
  });

  // Video hover play
  document.querySelectorAll('.video-thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('mouseenter', () => {
      const video = thumbnail.querySelector('video');
      video.play();
    });
    
    thumbnail.addEventListener('mouseleave', () => {
      const video = thumbnail.querySelector('video');
      video.pause();
      video.currentTime = 0;
    });
  });
});

// Close dropdowns on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest('.portfolio-dropdown')) {
    document.querySelectorAll('.dropdown-content').forEach(content => {
      content.classList.remove('active');
    });
    document.querySelectorAll('.fa-chevron-down').forEach(chevron => {
      chevron.classList.remove('fa-rotate-180');
    });
  }
});