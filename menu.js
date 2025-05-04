function toggleMenu() {
    const menu = document.getElementById("menuPanel");
    const location = document.getElementById("locationPanel");
  

    if (location.style.display === "block") {
      location.style.display = "none";
    }
  
    
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
  