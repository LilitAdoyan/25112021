const numberOfFilms=prompt("how many films did you watch?");
const personalMovieDB={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

/*const a = prompt("One of the movies you've watched recently", "");
const b = prompt("How do you rate it", "");
const c = prompt("One of the movies you've watched recently", "");
const d = prompt("How do you rate it", "");
personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;
console.log(personalMovieDB);*/


for (let i=0; i<2; i++){
    const a = prompt("One of the movies you've watched recently", "");
    const b = prompt("How do you rate it", "");
if(a !=null&&b!=null&&a!=''&&b!=''&&a.length<50){
    personalMovieDB.movies[a]=b;
    console.log("done!");
} else {
    console.log("error!");
    i--;
}
}

if (personalMovieDB.count<10){
    console.log("Not so much!");
} else if (personalMovieDB.count>=10&&personalMovieDB.count<30) {
    console.log("You're a classical watcher!");
} else if (personalMovieDB.count>=30){
    console.log("you're a real movie fan!");
} else {
    console.log("there is an error");
}
