export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }

export function removeMovieFavorite(payload) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload };
  }
   
export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("https://www.omdbapi.com/?apikey=27addf9c&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }
  
export function getDetails(id) {
    return function(dispatch) {
      return fetch("https://www.omdbapi.com/?apikey=27addf9c&i=" + id)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_DETAILS", payload: json });
        });
    };
  }
  
