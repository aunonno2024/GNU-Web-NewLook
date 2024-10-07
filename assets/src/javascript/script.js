const sidebarItems = document.querySelectorAll('.sidebar a');
const contentContainers = document.querySelectorAll('.content > div');

sidebarItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = item.getAttribute('data-target');
    contentContainers.forEach((container) => {
      if (container.id === targetId) {
        container.style.display = 'block';
      } else {
        container.style.display = 'none';
      }
    });
  });
});