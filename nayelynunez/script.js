window.addEventListener('scroll', function () {
  const header = document.getElementById('stickyHeader');
  if (window.scrollY > 80) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
