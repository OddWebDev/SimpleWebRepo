class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  Plus(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }
  Minus(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
  }
}
let Vect = new Vec(13, 12);
console.log(Vect);
let SecondVect = new Vec(5, 5);
console.log(SecondVect);

Vect.Plus(SecondVect);
console.log(Vect);

Vect.Minus(SecondVect);
Vect.Minus(SecondVect);
console.log(Vect);
