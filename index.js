//Toggle dark mode
let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);
//End toggle dark mode

// Petition form
let signNowButton = document.getElementById('sign');

const addSignature = () => {
  var name = document.getElementById('name').value;
  var hometown = document.getElementById('hometown').value;
  console.log(name);  document.getElementById("signatures").innerHTML = ("🖊️ " + name + " from "+ hometown + " supports this.");
  event.preventDefault();
}

const validateForm = () => {

  let containsErrors = false;

  let petitionInputs = document.getElementById("sign-petition").elements;

  for (let i = 0; i < petitionInputs.length; i++) {
    
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }
  if (containsErrors == false) {
    addSignature();
    for(let i = 0; i < petitionInputs.length; i++){
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }
}
signNowButton.addEventListener('click', validateForm);
//End petitions form

//Start news api
const apiKey = 'sZldM--DTf-CBL45r3V94nNw18N3NiWO05r3yqZnudAQ3ecC';
const keywords = 'health';
const url = 'https://api.currentsapi.services/v1/search?apiKey=' + apiKey + '&keywords=' + keywords;

const getAndDisplayNews = async () => {
  // Fetches News articles
const response = await fetch(url);

// Contains JavaScript objects with news articles
const data = await response.json();

// Parses the data and assigns the news article array from the objects
const news = data.news;

  for(let i = 0; i < 5; i++){
    const title = document.createElement('h3');
    title.textContent = news[i].title;
    
    const description = document.createElement('p');
    description.textContent = news[i].description;

    const article = document.createElement('article');
    article.appendChild(title);
    article.appendChild(description);

    const newsDiv = document.getElementById('news');
    newsDiv.append(article);
  }
  
}
getAndDisplayNews();
//End news api

//Books section
const getbooks = () => {
  const proxyURL = "https://cp-proxy5.herokuapp.com/";
  const olQueryURL = "https://openlibrary.org/works/";
  const bookId = "OL11185076M";
  const reading = document.getElementById("further-reading")
  
  const physicalFitnessURL = proxyURL + olQueryURL + bookId + ".json";
  
  fetch(physicalFitnessURL)
  .then((response) => response.json())
  .then((data) => {
    // more code here later
    console.log(data);
    
    let bookDescription = document.createElement('a');
    const hrefURL = "https://openlibrary.org/works/" + "OL11185076M";
      
    let newContent = "Read" + (data.title) + (data.subjects[0]);
    
    bookDescription.innerHTML = newContent ;
    bookDescription.href = physicalFitnessURL;
    reading.appendChild(bookDescription);
});
}
getbooks();