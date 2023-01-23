/*

let rabbit = {};

rabbit.speak = function (line) {
  console.log(`rabbit speaks "${line}"`);
};

rabbit.speak("co");

function speak2(line) {
  console.log(`${this.type} królik mówi ${line}`);
}

let whiteRabbit = {
  type: "biały",
  speak2
};
let czarnyRabbit = {
  type: "czarny",
  speak2
};

whiteRabbit.speak2("Biały rabbit!");
czarnyRabbit.speak2("black rabbit!");

whiteRabbit.speak2;
czarnyRabbit.speak2;

*/

class rabbit {
  constructor(typ, lina) {
    this._type = typ;
    this._line = lina;
  }
  speak() {
    console.log(`${this._type} rabbit says ${this._line}`);
  }
}

// newrabbit = new rabbit("new", "im new");
// rabbit.prototype.teeth = "sharp";

// KillerRabbit = new rabbit("bloody", "I kill");
// console.log(KillerRabbit.teeth);
// KillerRabbit.teeth = "big and sharp";
// console.log(KillerRabbit.teeth);

let map = {
  John: 15,
  Joanna: 32,
  Martin: 22
};

rabbit.prototype.toString = function () {
  return `${this._type} + rabbit`;
};

krolik = new rabbit("lol", "lol");

console.log(krolik.toString());
