export default class StatusBar {

    constructor(game) {
        this.game = game;

        this.heartImage = document.getElementById("imgHeart");

        
    }

    update() {



    }

    draw(ctx) {

        ctx.fillStyle = "white"
        //ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        //console.log(this.game.S);
        ctx.fillRect(0,0, this.game.gameWidth, this.game.gameStatusBarHeight);
        ctx.font = 'bold  13px Arial';
        ctx.fillStyle = "black";

        ctx.fillText(`LEVEL ${this.game.currentLevel+1} of ${this.game.levels.length}`, 60, 20);
        ctx.fillText(`USER: ${this.game.username}`, 300, 20);

        for (let i =0; i < this.game.lives; i++) {
            ctx.drawImage(this.heartImage, this.game.gameWidth-100+30*i, 5, 20, 20);

        }

    }



}