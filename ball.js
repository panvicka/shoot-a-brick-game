export default class Ball {
    constructor(gameWidth, gameHeight) {
        this.image = document.getElementById("imgBall");

        this.size = 16;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.position = {
            x: 10,
            y: 10,
        }
        this.speed = {
            x: 2,
            y: 2
        }
    }

    draw(ctx) {       
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        //todo
    }


}