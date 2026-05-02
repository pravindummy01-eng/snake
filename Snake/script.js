// Initialize the canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = 500;
canvas.height = 500;

// Basic canvas rendering
ctx.fillStyle = 'green';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Snake game variables
const snake = [
    { x: 250, y: 250 }, // Initial snake head position
    { x: 240, y: 250 },
    { x: 230, y: 250 }
];
let dx = 10; // Horizontal movement
let dy = 0; // Vertical movement

// Food variables
let foodX;
let foodY;
let score = 0;

// Generate random food position
function generateFood() {
    foodX = Math.floor(Math.random() * (canvas.width / 10)) * 10;
    foodY = Math.floor(Math.random() * (canvas.height / 10)) * 10;

    // Ensure food does not spawn on the snake
    snake.forEach(segment => {
        if (segment.x === foodX && segment.y === foodY) {
            generateFood();
        }
    });
}

// Draw food on the canvas
function drawFood() {
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'darkred';
    ctx.fillRect(foodX, foodY, 10, 10);
    ctx.strokeRect(foodX, foodY, 10, 10);
}

// Check if the snake eats the food
function checkFoodCollision() {
    if (snake[0].x === foodX && snake[0].y === foodY) {
        // Increase score
        score += 10;

        // Grow the snake
        snake.push({});

        // Generate new food
        generateFood();
    }
}

// Move the snake
function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head); // Add new head
    snake.pop(); // Remove the last segment
}

// Draw the snake
function drawSnake() {
    ctx.fillStyle = 'lightgreen';
    ctx.strokeStyle = 'darkgreen';
    snake.forEach(segment => {
        ctx.fillRect(segment.x, segment.y, 10, 10);
        ctx.strokeRect(segment.x, segment.y, 10, 10);
    });
}

// Change direction
function changeDirection(event) {
    const LEFT_KEY = 37;
    const UP_KEY = 38;
    const RIGHT_KEY = 39;
    const DOWN_KEY = 40;

    const keyPressed = event.keyCode;
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;

    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0;
    }

    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -10;
    }

    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
    }

    if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 10;
    }
}

// Clear the canvas
function clearCanvas() {
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Check for collisions
function checkCollision() {
    // Check wall collision
    if (
        snake[0].x < 0 ||
        snake[0].x >= canvas.width ||
        snake[0].y < 0 ||
        snake[0].y >= canvas.height
    ) {
        endGame();
    }

    // Check self collision
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            endGame();
        }
    }
}

// End the game
function endGame() {
    alert(`Game Over! Your score: ${score}`);
    document.location.reload(); // Reload the page to restart the game
}

// Update game loop to include collision detection
function gameLoop() {
    setTimeout(() => {
        clearCanvas();
        moveSnake();
        checkCollision();
        checkFoodCollision();
        drawFood();
        drawSnake();
        gameLoop(); // Repeat the loop
    }, 100); // 100ms interval
}

// Initialize food position
generateFood();

// Start the game
gameLoop();

// Fix: Ensure the event listener is properly set up and uses the correct event
// Event listener for key presses
document.addEventListener('keydown', changeDirection, false);