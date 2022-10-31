let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);

// Petition form

var goals = document.querySelector("sign-now-button");

const addSignature = (name , hometown) => {
  // Write your code to manipulate the DOM here
  console.log(name);
  event.preventDefault();
}

// Add a click event listener to the sign now button here
form.addEventListener("submit", addSignature);