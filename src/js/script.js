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
<<<<<<< HEAD
	  c = prompt("One of the last watched films?", ""),
	  d = prompt("How much would you rate it?", "");
=======
	  c = a,
	  d = c;
>>>>>>> 47e704ceea82ebb68617756ec24d291b7adef72d

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

<<<<<<< HEAD
let num = 50;

// while(num < 50) {
// 	console.log(num);
// 	num++;
// }

// do {
// 	console.log(num);
// 	num++;
// } while(num < 50);

for(let i = 1; i < 10; i++) {
	if (i === 6) {
		break;
	}
	console.log(i);
}
=======
>>>>>>> 47e704ceea82ebb68617756ec24d291b7adef72d
