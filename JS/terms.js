/////////////////////////////////////////// Sign In Page - Terms and Privacy Policy Window ///////////////////////////////////////////

const hidden_window = document.querySelector(
  ".terms_and_privacy_policy_window"
);
const overlay = document.querySelector(".overlay");
const termsOpenWindow = document.querySelector(".terms_and_conditions");
const privacyOpenWindow = document.querySelector(".privacy_policy");
const agreeButton = document.querySelector(".agree_button");

let initialScrollPosition = 0; // Store initial scroll position

// function for opening the window
const openWindow = function () {
  initialScrollPosition = window.scrollY; // Store current scroll position
  hidden_window.classList.remove("hidden");
  overlay.classList.remove("hidden");

  // scroll the page up
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Open Window when clicked on Terms and conditions or Privacy Policy
termsOpenWindow.addEventListener("click", openWindow);
privacyOpenWindow.addEventListener("click", openWindow);

// Close Window when user clicks on "I Agree" button
if (agreeButton) {
  agreeButton.addEventListener("click", function () {
    hidden_window.classList.add("hidden");
    overlay.classList.add("hidden");

    //scroll back to initial position
    window.scrollTo({
      top: initialScrollPosition,
      behavior: "smooth",
    });
  });
}

/////////////////////////////////////////// Input field validation - making sure they're not left empty ///////////////////////////////////////////

//Sign In Page

document.addEventListener("DOMContentLoaded", function () {
  const signInForm = document.getElementById("sign-in-form");
  const continueButton = document.querySelector("button[type='submit']");

  continueButton.addEventListener("click", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    if (emailInput.value.trim() === "") {
      showError("email-error");
    } else {
      hideError("email-error");
    }

    if (passwordInput.value.trim() === "") {
      showError("password-error");
    } else {
      hideError("password-error");
    }
  });

  function showError(id) {
    const errorElement = document.getElementById(id);
    errorElement.classList.remove("hidden");
  }

  function hideError(id) {
    const errorElement = document.getElementById(id);
    errorElement.classList.add("hidden");
  }
});

//Sign Up Page

document.addEventListener("DOMContentLoaded", function () {
  const signInForm = document.getElementById("sign-in-form");
  const continueButton = signInForm.querySelector("button[type='submit']");

  continueButton.addEventListener("click", function (event) {
    event.preventDefault();

    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const emailInput = document.getElementById("_email");
    const passwordInput = document.getElementById("_password");
    const confirmPasswordInput = document.getElementById("confirm_password");

    validateInput(firstNameInput, "firstname-error");
    validateInput(lastNameInput, "lastname-error");
    validateInput(emailInput, "_email-error");
    validateInput(passwordInput, "_password-error");
    validateInput(confirmPasswordInput, "confirm-password-error");
  });

  function validateInput(inputElement, errorId) {
    if (inputElement.value.trim() === "") {
      showError(errorId);
    } else {
      hideError(errorId);
    }
  }

  function showError(id) {
    const errorElement = document.getElementById(id);
    errorElement.classList.remove("hidden");
  }

  function hideError(id) {
    const errorElement = document.getElementById(id);
    errorElement.classList.add("hidden");
  }
});


