const sidebar = document.querySelector('.sidebar');
const pinButton = document.querySelector('.pin-button');
const closeButton = document.querySelector('.sidebar-close');

// Toggle the sidebar on hover
sidebar.addEventListener('mouseenter', () => {
  sidebar.style.width = '280px';
});

sidebar.addEventListener('mouseleave', () => {
  if (!pinButton.classList.contains('pinned')) {
    sidebar.style.width = '80px';
  }
});

// Pin/unpin the sidebar on click
pinButton.addEventListener('click', () => {
  pinButton.classList.toggle('pinned');
  if (pinButton.classList.contains('pinned')) {
    sidebar.style.left = '0';
  } else {
    sidebar.style.width = '80px';
  }
});

// Close the sidebar on click
closeButton.addEventListener('click', () => {
  sidebar.style.width = '80px';
  pinButton.classList.remove('pinned');
});
