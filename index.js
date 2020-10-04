import Game from './game.js';

const canvas = document.getElementById('gameScreen');
console.log(canvas);
const ctx = canvas.getContext('2d');

//ctx.clearRect(0,0, 400,300);




const GAME_WIDTH = 800;
const GAME_HEIGHT = 500;


const game = new Game(GAME_WIDTH, GAME_HEIGHT);
//game.start();



let lastTime = 0;




 

function gameLoop(timeStamp) {

    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    game.update(deltaTime);
    game.draw(ctx);


    requestAnimationFrame(gameLoop);


}

requestAnimationFrame(gameLoop);





