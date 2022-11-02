"Use strict";

console.log("Hello, i see you!");

//alert("Hey");
//const result = confirm("Are you here?");
//console.log(result);
//const answer = prompt("Answer?", "No");
// const answers = [];
// answers[0] = prompt("What's youre name?");
// answers[1] = prompt("How are you?");
// document.write(answers);
// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);

let numberOfFilms = prompt("How much films you see?", "");

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false

};

let lastFilm = prompt("What last film you see?",""),
    rating = prompt("How much?", "");

personalMovieDB.movies[lastFilm] = rating;

lastFilm = prompt("What last film you see?","");
rating = prompt("How much?", "");

personalMovieDB.movies[lastFilm] = rating;

console.log(personalMovieDB);