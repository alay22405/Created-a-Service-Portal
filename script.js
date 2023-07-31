/*
Author Alay Kidane
*/
$(document).ready(function() {
  // Recipe Finder search button click event
  $('#search-btn').click(function() {
    var query = $('#search-input').val();
    searchRecipes(query);
  });

  // Movie Search button click event
$('#movie-btn').click(function() {
  var query = $('#movie-input').val();
  searchMovies(query);
});
  

  // Recipe Finder search function
  function searchRecipes(query) {
    // Make AJAX request to Edamam Recipe Search API
    $.ajax({
     
      url: 'https://api.edamam.com/search?q=' + query + '&app_id= "HIDE API-KEY FOR NOW"    ',

      method: 'GET',
      success: function(data) {
        displayRecipes(data.hits);
      },
      error: function(error) {
        console.log(error);
      }
    });
  }

// Movie Search function
function searchMovies(query) {
  // Make AJAX request to OMDB API
  $.ajax({
    url: 'http://www.omdbapi.com/',
    method: 'GET',
    data: {
      s: query,
      apikey: '9c0894af' 
    },
    success: function(data) {
      displayMovies(data.Search);
    },
    error: function(error) {
      console.log(error);
    }
  });
}



// Display recipe results
function displayRecipes(hits) {
  var resultsDiv = $('#recipe-results');
  resultsDiv.empty();

  if (hits.length === 0) {
    resultsDiv.append('<p>No recipes found.</p>');
  } else {
    hits.forEach(function(hit) {
      var recipe = hit.recipe;
      var recipeDiv = $('<div class="recipe"></div>');
      recipeDiv.append('<h3>' + recipe.label + '</h3>');
      recipeDiv.append('<p>' + recipe.source + '</p>');

      // Create a click event listener for the recipe image
      var image = $('<img src="' + recipe.image + '" alt="' + recipe.label + '">');
      image.click(function() {
        displayIngredientDetails(recipe.ingredients);
      });
      recipeDiv.append(image);

      resultsDiv.append(recipeDiv);
    });
  }
}

// Display ingredient details
function displayIngredientDetails(ingredients) {
  var ingredientDetails = ingredients.map(function(ingredient) {
    return ingredient.text;
  });

  alert('Ingredients:\n' + ingredientDetails.join('\n'));
}

// Display movie results
function displayMovies(movies) {
  var resultsDiv = $('#movie-results');
  resultsDiv.empty();

  if (movies === undefined) {
    resultsDiv.append('<p>No movies found.</p>');
  } else {
    movies.forEach(function(movie) {
      var movieDiv = $('<div class="movie"></div>');
      movieDiv.append('<h3>' + movie.Title + '</h3>');
      movieDiv.append('<p>' + movie.Year + '</p>');
      var image = $('<img src="' + movie.Poster + '" alt="' + movie.Title + '">');
      image.attr('data-imdbid', movie.imdbID); 
      movieDiv.append(image);
      resultsDiv.append(movieDiv);
    });
  }

  // Attach click event handler to movie images
  $('#movie-results img').click(function() {
    var imdbID = $(this).attr('data-imdbid');
    showMovieDetails(imdbID);
  });
}

// Show movie details
function showMovieDetails(imdbID) {
  // Make AJAX request to fetch movie details
  $.ajax({
    url: 'http://www.omdbapi.com/',
    method: 'GET',
    data: {
      i: imdbID,
      apikey: '9c0894af' 
    },
    success: function(data) {
      displayMovieDetails(data);
    },
    error: function(error) {
      console.log(error);
    }
  });
}

// Display movie details
function displayMovieDetails(movie) {
  var detailsDiv = $('#movie-details');
  detailsDiv.empty();

  detailsDiv.append('<h3>' + movie.Title + '</h3>');
  detailsDiv.append('<p><strong>Director:</strong> ' + movie.Director + '</p>');
  detailsDiv.append('<p><strong>Actors:</strong> ' + movie.Actors + '</p>');
  detailsDiv.append('<p><strong>Plot:</strong> ' + movie.Plot + '</p>');
}


});

