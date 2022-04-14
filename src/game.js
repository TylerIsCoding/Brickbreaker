import Paddle from '/src/paddle.js';
import InputHandler from '/src/input.js';
import Ball from '/src/ball.js';

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }
    start() {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        new InputHandler(this.paddle);
        this.gameObjects = [this.ball, this.paddle];
    }
    update(deltaTime) {
        this.gameObjects.forEach(object => object.update(deltaTime));
    }
    draw(ctx) {
        this.gameObjects.forEach(object => object.draw(ctx));
    }
}
