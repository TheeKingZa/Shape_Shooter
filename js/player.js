// player.js

// player.js
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

export function drawPlayer(x, y, size) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + size, y);
    ctx.lineTo(x + size / 2, y - size);
    ctx.closePath();

    ctx.fillStyle = '#0095DD'; // Blue color
    ctx.fill();
}



function handlePlayerMovement(playerElement) {
    // Code to handle player movement
}
