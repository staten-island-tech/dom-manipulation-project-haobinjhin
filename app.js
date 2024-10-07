const students = ["Emerson", "Leo", "Deniz", "Eric"];

//console.log(students[0]);

//students.forEach((student) => console.log(student));
//allows us to loop through every element in the list
//=> arrow function automatically returns what is inside

/* const game = {
  title: "Elden Ring",
  release: "2022",
   characters: ["Tarnished", "Melina" , "Ranni"],
}; */

const games = [
    {
    title: "Dark Souls III",
    release: 2016,
    characters: ["Ashen One", "Fire Keeper", "Nameless King"],

    },
    {   title: "Sekiro",
        release: 2019,
        characters: ["Wolf", "Sword Saint Isshin", "Enma"],
    },

    {   title: "Elden Ring",
        release: 2022,
        characters: ["Tarnished", "Melina" , "Ranni"],
    }
];

games.forEach((games)=> console.log(games.title));

const newgames = games.filter(((game) => game.release > 2018))
console.log(newgames)