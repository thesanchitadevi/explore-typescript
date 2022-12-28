// array and tuple in typescript


// let players = ["Messi", "Neymar"];
// let players: string[] = ["Messi", "Neymar"]; // we can infar datatype
// let players: (string | boolean | number)[];
let players: string[] | boolean[] | number[];

players = ["Messi", "Neymar"];

players = [false, true];

// players = "2345";

console.log(players);

// players.push("Ronaldo");

const newPlayers = players.map((player, index) => index + 1 + ". " + player);
console.log(newPlayers);
