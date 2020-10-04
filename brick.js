export default class Brick {

    constructor(game, position) {

        this.image = document.getElementById("imgBrick");

        this.width = 80;
        this.height = 40;



        this.game = game;

        this.position = position;


    }

    update(deltaTime) {

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