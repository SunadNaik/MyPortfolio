// JavaScript for moving to the top of the page
function moveToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// JavaScript for showing/hiding move-to-top button based on scroll position
window.onscroll = function() {
  var moveToTopButton = document.getElementById('move-to-top');

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    moveToTopButton.style.display = 'block';
  } else {
    moveToTopButton.style.display = 'none';
  }
};
