var toggledOn = false;


function toggleMenu()  {
    const menu = document.getElementById("menu-items");
    if (toggledOn) {
        menu.style.display = 'none'
        toggledOn = false;
    } else {
        menu.style.display = 'block'
        toggledOn = true;
    }
}