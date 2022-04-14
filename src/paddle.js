export default class Paddle {
    constructor(gameWidth, gameHeight) {
        this.width = 150;
        this.height = 20;

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10,
        };
    }

    draw(ctx) {
        ctx.fillStyle = '#568EA3';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if (!deltaTime) return;
    }

    moveLeft() {
        this.position.x -= 10;
    }

    moveRight() {
        this.position.x += 10;
    }
}
