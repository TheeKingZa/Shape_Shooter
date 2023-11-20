// Add any game logic here if needed
// This example just centers the player triangle

// You can add more functionality and game logic to this script as needed.
// For now, we are just centering the player triangle.

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Get the player element
    const player = document.querySelector(".player");

    // Center the player initially
    centerPlayer();

    // Function to center the player
    function centerPlayer() {
        // Get the dimensions of the game container
        const container = document.querySelector(".game-container");
        const containerRect = container.getBoundingClientRect();

        // Calculate the center of the container
        const centerX = containerRect.width / 2;
        const centerY = containerRect.height / 2;

        // Set the player position to the center
        player.style.left = `${centerX}px`;
        player.style.top = `${centerY}px`;
    }
});
