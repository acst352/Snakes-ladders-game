import Dice from "./dice.js";
import Board from "./board.js";

let board = new Board();

export default class Player {
  constructor(player) {
    let dice = new Dice();
    this.player = player;
    return board.indexOf() + dice.throwdice();
  }

  position() {}
}