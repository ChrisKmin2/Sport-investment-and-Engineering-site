console.log("script is running");

document.addEventListener("DOMContentLoaded", function(){

  // ---------------- BUTTONS (CLASS BASED) ----------------
  const buttons = document.querySelectorAll(".learn-btn");

  buttons.forEach(button => {
    button.addEventListener("click", function(event){
      alert("clicked");
      event.stopPropagation();

      const card = button.closest(".card");
      const link = card.getAttribute("data-link");

      if (link) {
        window.location.href = link;
      }
    });
  });

  // ---------------- CARDS ----------------
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("click", function(event){

      if (event.target.closest("button")) {
        return;
      }

      alert("This project is under construction. Will be posted when ready!");
    });
  });

});