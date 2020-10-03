import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';

const canvas = document.getElementById('gameScreen');
console.log(canvas);
const ctx = canvas.getContext('2d');

//ctx.clearRect(0,0, 400,300);

const GAME_WIDTH = 900;
const GAME_HEIGHT = 900;







let lastTime = 0;



const paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
const ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle);


paddle.draw(ctx);

function gameLoop(timeStamp) {

    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    paddle.update(deltaTime);
    paddle.draw(ctx);

    ball.update(deltaTime);
    ball.draw(ctx);

    requestAnimationFrame(gameLoop);


}

requestAnimationFrame(gameLoop);





