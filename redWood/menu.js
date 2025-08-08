function openMenu() {
  document.getElementById("sideMenu").style.left = "0";
}

function closeMenu() {
  document.getElementById("sideMenu").style.left = "-250px";
}

function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  if (menu.style.left === "0px") {
    closeMenu();
  } else {
    openMenu();
  }
}

// Close sidebar when clicking a link
document.addEventListener("click", (e) => {
  if (e.target.closest("#sideMenu a")) {
    closeMenu();
  }
});

