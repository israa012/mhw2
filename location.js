function toggleLocation() {
    const menu = document.getElementById("menuPanel");
    const location = document.getElementById("locationPanel");
  
    // Hide menu panel if it's open
    if (menu.style.display === "block") {
      menu.style.display = "none";
    }
  
    // Toggle location panel
    if (location.style.display === "block") {
      location.style.display = "none";
    } else {
      location.style.display = "block";
    }
  }

  
  document.querySelector('.join-button').addEventListener('click', function() {
    alert('You have joined!');
});




  // Get elements
  const showMoreBtn = document.querySelectorAll(".card_chef_finestra")[0];
  const showLessBtn = document.querySelectorAll(".card_chef_finestra")[1];
  const showMoreContent = document.querySelector(".show_more_card");

  // Show the extra cards
  showMoreBtn.addEventListener("click", () => {
    showMoreContent.style.display = "block";
    showMoreBtn.style.display = "none";
  });

  // Hide the extra cards
  showLessBtn.addEventListener("click", () => {
    showMoreContent.style.display = "none";
    showMoreBtn.style.display = "block";
  });


