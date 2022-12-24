// array and tuple in typescript


let players = ["Messi", "Neymar"];
// let players: string[] = ["Messi", "Neymar"]; // we can infar datatype

console.log(players);

players.push("Ronaldo");

const newPlayers = players.map((player, index) => index + 1 + ". " + player);
console.log(newPlayers);
