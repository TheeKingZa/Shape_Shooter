// main.js
import { handlePlayerMovement } from './player.js';

const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 30,
    // Add more properties as needed
};

document.addEventListener('keydown', (event) => {
    handlePlayerMovement(player);
    // Handle other game events
});
