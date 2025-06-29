window.addEventListener('scroll', function () {
  const sticky = document.getElementById('nombreSticky');
  if (window.scrollY > 200) {
    sticky.classList.add('scrolled');
  } else {
    sticky.classList.remove('scrolled');
  }
});
