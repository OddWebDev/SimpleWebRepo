const protoRabbit = {
  speak(line) {
    console.log(`${this.type} rabbit mówi ${line}`);
  }
};

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

let newrabbit = makeRabbit("zwykly2");
newrabbit.speak("co");
// cojest.speak("co jest doktorku");

function rabbit(typ) {
  let rabbit = {
    type: typ,
    speak(line) {
      console.log(`rabbit ${this.type} mowi ${line}`);
    }
  };
  return rabbit;
}

cojestdoktor = rabbit("fajny");

console.log(cojestdoktor.type);
cojestdoktor.speak("Co jest doktorku?");
