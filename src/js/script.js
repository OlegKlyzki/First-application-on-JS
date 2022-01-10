"use strict"; // Strict regime

const numberOfFilms = +prompt("How many films have you watched?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

const a = prompt("One of the last watched films?", ""), 
	  b = prompt("How much would you rate it?", ""),
	  c = a,
	  d = c;

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

