# Rate a Movie
This page was created to simulate rating movies by it's users. You can find the movie you just have watched and give it appropriate number of stars.

Visit the site here: https://rateamovie-ump.herokuapp.com

## How does the app work?
Using the app is simple: you just type a movie title and click "Search" button (or press Enter on your keyboard). After that the page fetches data from API and shows ten movies, which titles are consistent with the typed one.
### Sort
You can make finding your movie even easier by sorting the list by title or year of production (both ascending or descending).
### Rating
It is possible to rate a movie from a main page view. Just click on the "Rate it" button and choose how many stars you want to give, and then click "Send". Please remember, that this site is only a simulation, created for recruitment purposes. Your rate will not be stored in any database (at least for now). 
### Movie details
There is not a lot of information about the movie on the main page. To see more details about it, you can simply click "See details" button, and you will find out a lot of stuff like director, writers, actors etc. You can also read a summary of the movie's plot or see the movie's rating from other websites like Rotten Tomatoes or IMDb. There is also a possibility to rate the movie yourself from the details page view.

## Technical information
The page was created by using React (Create React App environment) and SCSS. All the information about movies is fetched from OMDb API (visit it here:  http://www.omdbapi.com).

## Future development:
Add a connection with a database to store user's rates and display medium rate based on stored ones.
