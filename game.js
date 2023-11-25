// game.js
import { player } from './player';

// Canvas setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Handle keyboard input
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            player.y -= player.speed;
            break;
        case 'ArrowDown':
            player.y += player.speed;
            break;
        case 'ArrowLeft':
            player.x -= player.speed;
            break;
        case 'ArrowRight':
            player.x += player.speed;
            break;
    }
});

// Draw function
function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the player as a green triangle
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(player.x, player.y);
    ctx.lineTo(player.x + 20, player.y + 30);
    ctx.lineTo(player.x - 20, player.y + 30);
    ctx.fill();

    // Request next animation frame
    requestAnimationFrame(draw);
}

// Start the game loop
draw();
