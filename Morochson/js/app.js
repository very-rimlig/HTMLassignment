// Exempel: toggle för mobilmeny
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.main-nav');
  const toggleBtn = document.querySelector('.nav-toggle');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }
});
