## Plan: Snake Game in JavaScript

This plan outlines the development of a classic Snake Game using HTML, CSS, and vanilla JavaScript. The game will run in the browser and use HTML5 Canvas for rendering.

### High-Level Architecture
The game will follow a modular architecture with the following key components:
1. **Game Loop**: Manages the game state and updates the screen at regular intervals.
2. **Rendering**: Draws the game elements (snake, food, grid) on the canvas.
3. **Input Handling**: Captures user input (arrow keys) to control the snake's movement.
4. **Collision Detection**: Checks for collisions with walls, the snake's body, or food.
5. **Game State Management**: Tracks the snake's position, direction, food location, score, and game-over state.

### Key Components/Modules
1. **Game Loop**:
   - Runs at a fixed interval (e.g., 100ms).
   - Updates the game state and triggers rendering.
2. **Rendering**:
   - Uses the Canvas API to draw the snake, food, and grid.
3. **Input Handling**:
   - Listens for arrow key presses and updates the snake's direction.
4. **Collision Detection**:
   - Detects when the snake hits a wall, itself, or food.
5. **Game State Management**:
   - Stores the snake's body (array of coordinates), direction, food position, and score.
6. **Restart Functionality**:
   - Resets the game state and restarts the game loop.

### Folder Structure
```
snake-game/
├── index.html       # HTML structure
├── style.css        # Game styling
├── script.js        # Main game logic
```

### Step-by-Step Implementation Plan
1. **Setup the Project**:
   - Create `index.html`, `style.css`, and `script.js`.
   - Link the CSS and JavaScript files in the HTML.
2. **Create the Canvas**:
   - Add a `<canvas>` element in the HTML.
   - Use JavaScript to set up the canvas dimensions and context.
3. **Implement the Game Loop**:
   - Use `setInterval` to create a loop that updates the game state and renders the canvas.
4. **Draw the Snake**:
   - Represent the snake as an array of coordinates.
   - Render the snake on the canvas.
5. **Handle Input**:
   - Add an event listener for `keydown` to capture arrow key presses.
   - Update the snake's direction based on the input.
6. **Add Food**:
   - Generate random coordinates for the food.
   - Render the food on the canvas.
7. **Collision Detection**:
   - Check if the snake collides with the walls or itself.
   - Check if the snake eats the food.
8. **Update the Score**:
   - Increment the score when the snake eats food.
   - Display the score on the screen.
9. **Game Over and Restart**:
   - Stop the game loop on collision.
   - Display a "Game Over" message and a restart button.
   - Reset the game state when restarting.

### Pseudocode for the Game Loop
```plaintext
initialize game state
start game loop:
    clear canvas
    update snake position
    check for collisions:
        if collision with wall or self:
            end game
        if collision with food:
            grow snake
            generate new food
    render snake
    render food
    render score
```

### Important Edge Cases to Handle
1. **Simultaneous Key Presses**:
   - Prevent the snake from reversing direction instantly (e.g., left to right).
2. **Food Placement**:
   - Ensure food does not spawn on the snake's body.
3. **Canvas Boundaries**:
   - Detect when the snake hits the edges of the canvas.
4. **Game Restart**:
   - Properly reset all game variables and clear the canvas.