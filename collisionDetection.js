export default function detectCollision(ball, gameObject) {

    //check collision with paddle 
    const bottomOfBall = ball.position.y + ball.size;
    const topOfBall = ball.position.y;

    const topOfGameObject = gameObject.position.y;
    const bottomOfGameObject = gameObject.position.y + gameObject.height;

    const leftSideOfGameObject = gameObject.position.x;
    const RightSideOfGameObject = gameObject.position.x + gameObject.width;


    if ((topOfGameObject <= bottomOfBall && bottomOfGameObject >= topOfBall) &&
        (ball.position.x >= leftSideOfGameObject && ball.position.x+ball.size <= RightSideOfGameObject)) {
        return true;
    } else {
        return false;
    }

}