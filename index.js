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
    h1.textContent = movie.title ;
    h1.setAttribute("class" , "titre-film");

    const image = document.createElement("img");
    image.setAttribute("src", movie.image);
    image.setAttribute("class", "movieImage");

    const nomOriginal = document.createElement("p");
    nomOriginal.setAttribute("class", "original");
    nomOriginal.setAttribute("id", "japonais");

    nomOriginal.textContent = movie.original_title;

    const nomLatin = document.createElement("p");
    nomLatin.setAttribute("class", "latin");
    nomLatin.textContent = movie.original_title_romanised;

    const realisateur = document.createElement("p");
    realisateur.setAttribute("class", "realisateur");
    realisateur.textContent = movie.director;

    const annee = document.createElement("p");
    annee.setAttribute("class", "annee");
    annee.textContent = movie.release_date;

    const toggle = document.createElement("button");
    toggle.setAttribute("id", "boutton");

    const resume = document.createElement("p");
    movie.description = movie.description.substring(0, 150); //faire bouger au cas ou

    resume.textContent = `${movie.description}...`;
    resume.setAttribute("class", "descr");

    movieList.appendChild(card);
    card.appendChild(image);
    card.appendChild(annee);

    card.appendChild(h1);
    card.appendChild(nomOriginal);
    card.appendChild(nomLatin);
    card.appendChild(realisateur);
    card.appendChild(toggle);
    card.appendChild(resume);
  });
}


function search_film() { 
  let input = document.getElementById('searchbar').value 
  input=input.toLowerCase(); 
  let x = document.getElementsByClassName('titre-film'); 
    
  for (i = 0; i < x.length; i++) {  
      if (!x[i].innerHTML.toLowerCase().includes(input)) { 
          x[i].style.display="none"; 
      } 
      else { 
          x[i].style.display="list-item";                  
      } 
  } 
} 