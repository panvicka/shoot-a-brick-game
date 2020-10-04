import detectCollision from './collisionDetection.js'

export default class Ball {
    constructor(game) {
        this.image = document.getElementById("imgBall");

        this.size = 25;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.gameStatusBarHeight = game.gameStatusBarHeight;

        this.game = game;

        this.reset();
    }

    reset() {
        this.position = {
            x: 300,
            y: 400,
        }
        this.speed = {
            x: 4,
            y: -4
        }
    }

    draw(ctx) {

 /*        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.size/2, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'white';
        ctx.fill();
    
        ctx.stroke();
 */
       ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime) {
        //console.log(this.game.paddle.position.x);
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;


        // wall on the left or right 
        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }
        // wall of top 
        if (this.position.y < this.gameStatusBarHeight) {
            this.speed.y = -this.speed.y;
        }

        if (this.position.y + this.size > this.gameHeight) {
            this.game.lives--;
            this.reset();
        }

        if (detectCollision(this, this.game.paddle)) {
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }

        /*         // wall on the left or right 
                if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
                    this.speed.x= -this.speed.x;
                }
                // wall of top or bottom
                if (this.position.y+this.size > this.gameHeight || this.position.y < 0) {
                    this.speed.y= -this.speed.y;
                }
        
                //check collision with paddle 
                const bottomOfBall = this.position.y+ this.size;
                const topOfPaddle = this.game.paddle.position.y;
                const leftSideOfPaddle = this.game.paddle.position.x;
                const rightSideOfPaddle = this.game.paddle.position.x+this.game.paddle.width;
                console.log({bottomOfBall, topOfPaddle});
                
                if (topOfPaddle <= bottomOfBall && (this.position.x >= leftSideOfPaddle && this.position.x <= rightSideOfPaddle)) {
                    this.speed.y= -this.speed.y;
                }  */

    }


}