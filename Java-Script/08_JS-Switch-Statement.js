// Erstelle eine Zufallszahl zwischen 5 und 10

// Wenn der Wert 10 ist gib aus Ten
// Wenn der Wert 9 ist gib aus Nine
// Wenn der Wert 8 ist gib aus Eight
// etc.

let random = Math.random() * 10;
let randomRounded = Math.round(random);

switch (randomRounded) {
  case 0:
    randomRounded == 10;
    console.log("Ten", randomRounded)
    break;
  case 1:
    randomRounded = 9;
    console.log("Nine", randomRounded)
    break;
  case 2:
    randomRounded = 8;
    console.log("Eight", randomRounded)
    break;
  case 3:
    randomRounded = 7;
    console.log("Seven", randomRounded)
    break;
  case 4:
    randomRounded = 6;
    console.log("Six", randomRounded)
    break;
  case 5:
    randomRounded = 5;
    console.log("Five", randomRounded)
    break;
  case 6:
    randomRounded = 4;
    console.log("Four", randomRounded)
    break;
  case 7:
    randomRounded = 3;
    console.log("Three", randomRounded)
    break;
  case 8:
    randomRounded = 2;
    console.log("Two", randomRounded)
    break;
  case 9:
    randomRounded = 1;
    console.log("One", randomRounded)
    break;
  case 10:
    randomRounded = 0;
    console.log("Zero", randomRounded)
    break;
}

