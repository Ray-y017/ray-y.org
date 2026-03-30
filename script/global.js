let localStorageAllowed = localStorage.getItem('consent') === 'true';
let localStorageAlertShown = false;
let theme = Number(localStorage.getItem('savedTheme')) || 1;

const pages = ["index.html", "proj", "technologies", "contact"];
const path = window.location.pathname.split("/").pop();
const currentFile = path === "" ? "index.html" : path;

let currentPageIndex = pages.indexOf(currentFile);
if (currentPageIndex === -1) currentPageIndex = 0;


if (localStorageAllowed) {
    document.body.setAttribute('data-theme', theme);
}

document.addEventListener("keyup", (event => {
    if (event.key == "ArrowUp") {
        if (checkLocalStoragePerm()) {
            theme = (theme % 8) + 1;
            document.body.setAttribute('data-theme', theme);
            localStorage.setItem('savedTheme', theme);
        }
    }
    else if (event.key == "ArrowDown") {
        if (checkLocalStoragePerm()) {
            theme = ((theme - 2 + 8) % 8) + 1;
            document.body.setAttribute('data-theme', theme);
            localStorage.setItem('savedTheme', theme);
        }
    }
    if (event.key === "ArrowRight") {
        if (pages.includes(currentFile)) {
            let next = (currentPageIndex + 1) % pages.length;
            window.location.href = pages[next];
        }
    }
    else if (event.key === "ArrowLeft") {
        if (pages.includes(currentFile)) {
            let prev = (currentPageIndex - 1 + pages.length) % pages.length;
            window.location.href = pages[prev];
        }
    }

    else if (event.key == "Enter") {
        if (localStorageAlertShown) {
            localStorageAllowed = true;
            document.getElementById("alertdiv").hidden = true
            localStorageAlertShown = false;
            localStorage.setItem('consent', 'true'); 
        }
    }
    else if (event.key == "Escape") {
        if (localStorageAlertShown) {
            localStorageAllowed = false;
            document.getElementById("alertdiv").hidden = true
            console.log("false");
            localStorageAlertShown = false;
        }
    }
}))

function checkLocalStoragePerm() {
    if (localStorageAllowed)
        return true
    if (localStorageAlertShown)
        return false
    document.getElementById("alertdiv").hidden = false
    localStorageAlertShown = true;
    return false;
} 

function revokeConsent() {
    localStorage.removeItem('savedTheme');
    localStorage.setItem('consentGranted', 'false');
    localStorageAllowed = false;
    localStorage.clear(); 
    alert("Preferences and consent have been removed.");
    location.reload();
}
