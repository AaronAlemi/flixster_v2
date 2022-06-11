// GLOBAL CONSTANTS
const API_KEY = '63c18f8e9bf0a0d4521f32497a933ba9';
const limit = 4;

// GLOBAL VARIABLES
var offset = 0;
let nowPlayingStatus = true;
let index = 0; 
let searchPageNum = 1;
let nowPlayingPageNum = 1;

// DOM
const searchArea = document.getElementById("search-input");
const findMoviesButton = document.getElementById("submit-button");
const form = document.getElementById("form");
const moviesGrid = document.getElementById("movies-grid");
const loadButton = document.getElementById("load-more-movies-btn");
const resetButton = document.getElementById("close-search-btn");
const overlayContainer = document.getElementById("overlay-container")
const nowPlayingText = document.getElementById("now-playing-text")
const searchText = document.getElementById("search-results-text")

// EVENT LISTENERS
form.addEventListener("submit", formSubmitHandler)
loadButton.addEventListener("click", showMore)
window.addEventListener("load", getNowPlaying)
resetButton.addEventListener("click", resetButtonHandler)

// FUNCTIONS
async function getNowPlaying(evt) {
    resetButton.classList.add("hidden")
    console.log("Inside getCurrentMovies()")
    evt.preventDefault()

    let apiUrl = ("https://api.themoviedb.org/3/movie/now_playing?api_key=" + API_KEY + "&page=" + nowPlayingPageNum) // Limit and offset removed
    let apiFetch = await fetch(apiUrl)
    let apiFetchData = await apiFetch.json()

    console.log(apiFetchData)

    displayResults(apiFetchData.results)

}

function resetButtonHandler(evt) {
    nowPlayingStatus = true;
    nowPlayingText.classList.remove("hidden")
    searchText.classList.add("hidden")
    offset = 0;
    index = 0;
    moviesGrid.innerHTML = '';
    getNowPlaying(evt)
}

function formSubmitHandler(evt) {
    nowPlayingStatus = false;
    nowPlayingText.classList.add("hidden")
    searchText.classList.remove("hidden")
    offset = 0;
    index = 0;
    moviesGrid.innerHTML = '';
    searchPageNum = 1;
    resetButton.classList.remove("hidden")
    getResults(evt);

}

async function getResults(evt) {
    evt.preventDefault()

    let data = searchArea.value
    let apiUrl = ("https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&query=" + data + "&page=" + searchPageNum)
    let apiFetch = await fetch(apiUrl)
    let apiFetchData = await apiFetch.json()

    loadButton.classList.remove("hidden")

    displayResults(apiFetchData.results)
}

function displayResults(data) {
    data.forEach(movie => {
        let posterPath = "http://image.tmdb.org/t/p/w500" + movie.poster_path;
        moviesGrid.innerHTML += `
         <div class="movie-card">
            
            <img class="movie-poster" src='${posterPath}' onclick="openNav(${movie.id})"></img> 
            <div class="movie-votes">
                <i class="material-icons">star</i>

                ${movie.vote_average}</div>
            <p1 class="movie-title">${movie.title}</p1>
        </div>
        `
    })
}

function showMore(evt) {
    //offset += limit;
    //pageNum++;

    // insert code here that, if there are no more avilable movies,
    // replaces show more with text reding "No more results"

    if (nowPlayingStatus == true) {
        nowPlayingPageNum++;
        getNowPlaying(evt);
    }
    else {
        searchPageNum++;
        getResults(evt);
    }

}

/* Open when someone clicks on the span element */
async function openNav(movieId) {
    document.getElementById("page-overlay").style.width = "100%";

    let apiUrl = ("https://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + API_KEY)
    let apiFetch = await fetch(apiUrl)
    let apiFetchData = await apiFetch.json()

    let videoApiUrl =  ("https://api.themoviedb.org/3/movie/" + movieId + "/videos?api_key=" + API_KEY)
    let videoApiFetch = await fetch(videoApiUrl)
    let videoApiFetchData = await videoApiFetch.json()
    let trailer = videoApiFetchData.results[0].key;

    let movie = apiFetchData;

    // let backDropPath = "http://image.tmdb.org/t/p/w500" + movie.backdrop_path;

    let movieGenres = '';

    // Iterates through array of movie genres and puts them in string separated by commas
    for (let i = 0; i<movie.genres.length; i++) {
        movieGenres += movie.genres[i].name;
        if (i + 1 < movie.genres.length) {
            movieGenres += ', ';
        }
    }

    overlayContainer.innerHTML = `
         <div class="movie-info">
            
            <iframe width="560" height="315" class="overlay-trailer" src="https://www.youtube.com/embed/${trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <div class="overlay-text-container">
                <p3 class="overlay-movie-tagline">${movie.tagline}</p3>
            </div>

            <div class="overlay-text-container">
                <p3 class="overlay-movie-title">${movie.title}</p2>
            </div>

            <div class="overlay-text-container">
                <p3 class="overlay-movie-rating">Rating: ${movie.vote_average}/10</p2>
            </div>

            <div class="overlay-text-container">
                <p3 class="overlay-movie-overview">${movie.overview}</p3>
            </div>
            <div class="overlay-text-container">
                <p3 class="overlay-movie-genres">Genres: ${movieGenres}</p3>
            </div>
            <div class="overlay-text-container">
                <p3 class="overlay-movie-release-date">Release date: ${movie.release_date}</p3>
            </div>

            
        </div>
        `

  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("page-overlay").style.width = "0%";
    overlayContainer.innerHTML = ``
  }
