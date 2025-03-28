function toggleMenu() {
    var menu = document.getElementById("sideMenu");
    var overlay = document.getElementById("overlay");

    // Toggle the menu
    menu.classList.toggle("open");

    // Show overlay when menu opens, hide when it closes
    if (menu.classList.contains("open")) {
        overlay.style.display = "block";
        setTimeout(() => overlay.style.opacity = "1", 10); // Smooth fade-in
    } else {
        overlay.style.opacity = "0";
        setTimeout(() => overlay.style.display = "none", 300); // Smooth fade-out
    }
    
}

