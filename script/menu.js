var toggledOn = false;
const menu = document.getElementById("menu-items");
const menuButton = document.getElementById('menuBtn');

function toggleMenu()  {
    if (toggledOn) {
        menu.style.display = 'none'
        toggledOn = false;
    } else {
        menu.style.display = 'block'
        toggledOn = true;
    }
}
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    menu.style.display = 'none';
  }
});