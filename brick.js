import detectCollision from './collisionDetection.js'

export default class Brick {

    constructor(game, position) {

        this.image = document.getElementById("imgBrick");

        this.width = 80;
        this.height = 40;



        this.game = game;

        this.position = position;

        this.markedForDeletion =false;


    }

    update(deltaTime) {

        if (detectCollision(this.game.ball, this)) {
            this.game.ball.speed.y = -this.game.ball.speed.y;
            this.markedForDeletion = true;

        }


    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );

    }


}