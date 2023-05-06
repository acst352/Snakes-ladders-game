export default class Dice {
  throwdice() {
    return Math.ceil(Math.random() * 6);
  }
}
let d1 = new Dice();
let record = new Array();
let notebook = [0, 0, 0, 0, 0, 0];
let position = 0;

for (let i = 1; i <= 100; i++) {
  let result = d1.throwdice();
  record.push(result);

  console.log("Face of the dice is " + result);
  position += result;

  console.log("Current position is " + position);
}

for (let i = 0; i <= record.length; i++) {
  if (record[i] == 1) {
    notebook[0]++;
  } else if (record[i] == 2) {
    notebook[1]++;
  } else if (record[i] == 3) {
    notebook[2]++;
  } else if (record[i] == 4) {
    notebook[3]++;
  } else if (record[i] == 5) {
    notebook[4]++;
  } else if (record[i] == 6) {
    notebook[5]++;
  }
}

new Dice();