//
// ray-y.co.uk © 2025 Ray Dunn
//
// This source code is licensed under the terms of GPL-2.0
// https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html/

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