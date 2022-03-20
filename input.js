import Game from "./game.js";

export default class InputHandler {
  constructor(paddle, game) {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowLeft":
          paddle.moveLeft();
          break;
        case "ArrowRight":
          paddle.moveRight();
          break;
        default:
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      console.log(event.key);
      switch (event.key) {
        case "ArrowLeft":
          if (paddle.speed < 0) paddle.stop();

          break;
        case "ArrowRight":
          if (paddle.speed > 0) paddle.stop();

          break;
        case " ":
          game.togglePause();
          break;
        case "Enter":
          game.start();
          break;
        default:
          break;
      }
    });
  }
}
