import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';

import { buildLevel, level1, level2, level3 } from './levels.js';

const GAMESTATES = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    CONGRATULATION: 4
}
export default class Game {


    constructor(gameWidth, gameHeight) {

        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;

        this.gameState = GAMESTATES.MENU;

        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        new InputHandler(this.paddle, this);
        this.gameObjects = [];

        this.lives = 3;

        this.bricks = [];
        this.levels = [level1, level2, level3];

        this.currentLevel = 0;
    }


    start() {
        console.log('want to be started');
        this.gameState = GAMESTATES.RUNNING;
        this.ball.reset();

        this.bricks = buildLevel(this, this.levels[this.currentLevel]);
        this.gameObjects = [
            this.ball,
            this.paddle,

        ];

    }

    update(deltaTime) {

        if (this.lives === 0) this.gameState = GAMESTATES.GAMEOVER;

        if (this.gameState === GAMESTATES.PAUSED ||
            this.gameState === GAMESTATES.MENU ||
            this.gameState === GAMESTATES.GAMEOVER ||
            this.gameState === GAMESTATES.CONGRATULATION
        ) return;


        if (this.bricks.length === 0) {
            if (this.currentLevel < this.levels.length-1) {
                this.currentLevel++;
                this.start();
            } else {
                this.gameState = GAMESTATES.CONGRATULATION;
            }
           
        }



        [...this.gameObjects, ...this.bricks].forEach(object => object.update(deltaTime));


        this.bricks = this.bricks.filter(object => !object.markedForDeletion);
    }

    draw(ctx) {

        [...this.gameObjects, ...this.bricks].forEach(object => object.draw(ctx));


        if (this.gameState === GAMESTATES.PAUSED) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();

            ctx.font = "30px Arial"
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("paused", this.gameWidth / 2, this.gameHeight / 2);

        }

        if (this.gameState === GAMESTATES.MENU) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();

            ctx.font = "30px Arial"
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("press ENTER to start", this.gameWidth / 2, this.gameHeight / 2);

        }

        if (this.gameState === GAMESTATES.GAMEOVER) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();

            ctx.font = "30px Arial"
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("game over", this.gameWidth / 2, this.gameHeight / 2);

        }

        if (this.gameState === GAMESTATES.CONGRATULATION) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();

            ctx.font = "30px Arial"
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("congratulation, you won all the levels", this.gameWidth / 2, this.gameHeight / 2);

        }



    }

    togglePause() {
        if (this.gameState === GAMESTATES.PAUSED) {
            this.gameState = GAMESTATES.RUNNING;
        } else {
            this.gameState = GAMESTATES.PAUSED;
        }
    }


}