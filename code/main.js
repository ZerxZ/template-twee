const Game = {};
Game.chara = require("./json/chara.json");
Game.tesy = require("./yaml/test.yaml");
Game.csvManager = require("./csv.js");
setup.hello = function (name) {
  return "Hello " + name + ", how are you?";
};
window.Game = Game;
console.log(window.Game);
