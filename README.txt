
This Service Portal is a web application that allows users to search for recipes and movies using different web services. The application utilizes the following services:

1. Edamam Recipe Search API
   - Endpoint: https://api.edamam.com/search
   - Description: This API allows users to search for recipes based on the specified query. It returns a list of recipes along with their details such as label, source, and image.

2. OMDB API (Open Movie Database)
   - Endpoint: http://www.omdbapi.com/
   - Description: This API provides access to a vast collection of movie data. Users can search for movies by IMDb ID or movie title, and retrieve details such as title, director, actors, plot, and more.

Usage:

1. Recipe Finder
   - Endpoint: Edamam Recipe Search API
   - Description: Users can search for recipes by entering a query in the search input field and clicking the "Search" button. The application makes an AJAX request to the Edamam API and displays the recipe results.

2. Movie Search
   - Endpoint: OMDB API
   - Description: Users can search for movies by entering a query (IMDb ID or movie title) in the search input field and clicking the "Search" button. The application makes an AJAX request to the OMDB API and displays the movie results.

Additional Functionality:

- Clicking on a recipe image displays the list of ingredients for that recipe.

Please note that certain features of the application may require API keys or registration with the respective services. Ensure that you have the necessary credentials to access the APIs mentioned above.

