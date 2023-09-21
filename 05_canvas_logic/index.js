// Get canvas element
const canvas = document.getElementById('drawing-board');

// Get context (handler) for canvas object.
const ctx = canvas.getContext('2d');

// Get distance of canvas object from left and top of page
const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

// Set canvas width to take up all remaining space on page
canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false; // will only be true when mouse is currently being clicked
let lineWidth = 5;
let startX;
let startY;

// Function to handle draw action - e is the movement of the mouse event
const draw = (e) => {

    // If mouse not being clicked, don't draw
    if(!isPainting) {
        return;
    }

    // Set context values
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    // Stroke where the mouse currently is
    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
    ctx.stroke();
}

// Listen for mouse being clicked
canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
});


canvas.addEventListener('mouseup', e => {
    isPainting = false;

    // start new stroke
    ctx.beginPath();
});

// Listen to movement of mouse
canvas.addEventListener('mousemove', draw);
