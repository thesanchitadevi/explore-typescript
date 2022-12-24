"use strict";
// array and tuple in typescript
var players = ["Messi", "Neymar"];
// let players: string[] = ["Messi", "Neymar"]; // we can infar datatype
console.log(players);
players.push("Ronaldo");
var newPlayers = players.map(function (player, index) { return index + 1 + ". " + player; });
console.log(newPlayers);
