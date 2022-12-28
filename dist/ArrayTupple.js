"use strict";
// array and tuple in typescript
// let players = ["Messi", "Neymar"];
// let players: string[] = ["Messi", "Neymar"]; // we can infar datatype
// let players: (string | boolean | number)[];
var players;
players = ["Messi", "Neymar"];
players = [false, true];
// players = "2345";
console.log(players);
// players.push("Ronaldo");
var newPlayers = players.map(function (player, index) { return index + 1 + ". " + player; });
console.log(newPlayers);
