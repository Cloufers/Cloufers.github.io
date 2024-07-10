document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const header = document.querySelector('.header');
    const toggleButton = document.querySelector('.header-nav-button');
  
    toggleButton.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      mainContent.classList.toggle('sidebar-open');
      header.classList.toggle('sidebar-open');
    });
  });