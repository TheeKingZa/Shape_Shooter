// main.js
import { drawPlayer } from './player.js';

const player = {
    x: 100,
    y: 100,
    size: 30,
};

function gameLoop() {
    // Clear the canvas and redraw the player
    drawPlayer(player.x, player.y, player.size);

    // Update game logic here

    // Repeat the loop
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();