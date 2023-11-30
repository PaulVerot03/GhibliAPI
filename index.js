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

    const nomOriginal = document.createElement("p");
    nomOriginal.setAttribute("class", "original");
    nomOriginal.textContent = movie.original_title;

    const nomLatin = document.createElement("p");
    nomLatin.setAttribute("class", "latin");
    nomLatin.textContent = movie.original_title_romanised;

    const realisateur = document.createElement("p");
    realisateur.setAttribute("class", "realisateur");
    realisateur.textContent = movie.director;

    const resume = document.createElement("p");
    movie.description = movie.description.substring(0, 150); //faire bouger au cas ou 
    resume.textContent = `${movie.description}...`;

    movieList.appendChild(card);
    card.appendChild(image);
    card.appendChild(h1);
    card.appendChild(nomOriginal);
    card.appendChild(nomLatin);
    card.appendChild(realisateur);
    card.appendChild(resume);
    
  });
}
