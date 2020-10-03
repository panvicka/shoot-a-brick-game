export default class InputHandler {

    constructor(paddle) {
        document.addEventListener('keydown', event => {
            //alert(event.key);
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

        document.addEventListener('keyup', event => {
            //alert(event.key);
            switch (event.key) {
                case "ArrowLeft":
                    if (paddle.speed < 0) paddle.stop();

                    break;
                case "ArrowRight":
                    if (paddle.speed > 0) paddle.stop();

                     break;
                default:
                    break;



            }
        });

    }


}