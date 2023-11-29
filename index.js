/* async function logMovies() {
    const response = await fetch("https://ghibliapi.vercel.app/films");
    const movies = await response.json();
    console.log(movies);
    //console.log("test");

  }
logMovies()

console.log(movies.title);
 */

//const axios = require("axios");

//projet similaire mais sur une autre BDD https://github.com/taniarascia/sandbox/tree/master/ghibli

//const apiUrl = "https://ghibliapi.vercel.app/films";

/* axios.get(apiUrl)
    .then(response => {
        const movies = response.data;
        displayMovies(movies);
    })
    .catch(error => console.error('Error fetching movies:', error));
 */

fetch("https://ghibliapi.vercel.app/films")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Shit out of Luck");
    }
    return response.json();
  })
  .then((data) => {
    const movies = data;
    displayMovies(movies);
  });

function printsMovies(movies) {
  movies.forEach((movie) => {
    console.log("Title:", movie.title);
    console.log("Image:", movie.image);
    console.log("Description:", movie.description);
    console.log("Release Date:", movie.release_date);
    console.log("------------------------");
  });
}

function displayMovies(movies) {
  const movieList = document.getElementById("movieList");
  //const container = document.createElement("div");
  //container.setAttribute("class", "container");

  movies.forEach((movie) => {
    /* const listItem = document.createElement("li");
    listItem.textContent = movie.title;
    movieList.appendChild(listItem); */

    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const h1 = document.createElement("h1");
    h1.textContent = movie.title;

    const image = document.createElement("img")
    image.setAttribute("src", movie.image);
    image.setAttribute("class", "movieImage");
    image.setAttribute("style", "width:200px;height:300px;"); // 6:9

    const p = document.createElement("p");
    movie.description = movie.description.substring(0, 300); //faire bouger au cas ou 
    p.textContent = `${movie.description}...`;

    movieList.appendChild(card);
    card.appendChild(h1);
    card.appendChild(image);
    card.appendChild(p);
    
  });
}
