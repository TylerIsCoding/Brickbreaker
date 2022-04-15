export default class Brick {
    constructor(game, position) {
        this.width = 80;
        this.height = 24;
        this.image = document.getElementById('img_brick_orange');
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game = game;
        this.position = position;
    }
    update(deltaTime) {}
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
