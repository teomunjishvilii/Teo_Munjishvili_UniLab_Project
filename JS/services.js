//////////////////////////////////////// Services

document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("searchButton");
  const georgianAirlinesSection = document.querySelector(".georgian_airlines");

  searchButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Set display property to flex
    georgianAirlinesSection.style.display = "flex";
  });
});
