
// JavaScript Snake example
// Author Jan Bodnar
// http://zetcode.com/javascript/snake/

let canvas;
let ctx;

let head;
let apple;
let ball;

let dots;
let apple_x;
let apple_y;

const directions = {
    left: 0,
    right: 1,
    up: 2,
    down: 3
};
let direction = directions.right;

let inGame = true;

const DOT_SIZE = 10;
const ALL_DOTS = 900;
const MAX_RAND = 29;
const DELAY = 140;
const C_HEIGHT = 300;
const C_WIDTH = 300;

let x = new Array(ALL_DOTS);
let y = new Array(ALL_DOTS);

function init() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');

    loadImages();
    createSnake();
    locateApple();
    setTimeout(gameCycle, DELAY);
}

function loadImages() {
    head = new Image();
    head.src = 'head.png';
    
    ball = new Image();
    ball.src = 'dot.png';
    
    apple = new Image();
    apple.src = 'apple.png';
}

function createSnake() {
    dots = 3;

    for (let z = 0; z < dots; z++) {
        x[z] = 50 - z * 10;
        y[z] = 50;
    }
}

function checkApple() {
    if ((x[0] == apple_x) && (y[0] == apple_y)) {

        dots++;
        locateApple();
    }
}

function doDrawing() {
    ctx.clearRect(0, 0, C_WIDTH, C_HEIGHT);
    
    if (inGame) {
        ctx.drawImage(apple, apple_x, apple_y);

        for (let z = 0; z < dots; z++) {
            if (z == 0) {
                ctx.drawImage(head, x[z], y[z]);
            } else {
                ctx.drawImage(ball, x[z], y[z]);
            }
        }    
    } else {
        gameOver();
    }
}

function gameOver() {
    ctx.fillStyle = 'white';
    ctx.textBaseline = 'middle'; 
    ctx.textAlign = 'center'; 
    ctx.font = 'normal bold 18px serif';
    
    ctx.fillText('Game over', C_WIDTH/2, C_HEIGHT/2);
}

function checkApple() {
    if ((x[0] == apple_x) && (y[0] == apple_y)) {
        dots++;
        locateApple();
    }
}

function move() {
    for (let z = dots; z > 0; z--) {
        x[z] = x[(z - 1)];
        y[z] = y[(z - 1)];
    }

    switch (direction)
    {
        case directions.left:
            x[0] -= DOT_SIZE;
            break;
        case directions.right:
            x[0] += DOT_SIZE;
            break;
        case directions.up:
            y[0] -= DOT_SIZE;
            break;
        case directions.down:
            y[0] += DOT_SIZE;
            break;
    }
}

function checkCollision() {
    for (let z = dots; z > 0; z--) {
        if ((z > 4) && (x[0] == x[z]) && (y[0] == y[z])) {
            inGame = false;
        }
    }

    if (y[0] >= C_HEIGHT) {
        inGame = false;
    }

    if (y[0] < 0) {
       inGame = false;
    }

    if (x[0] >= C_WIDTH) {
      inGame = false;
    }

    if (x[0] < 0) {
      inGame = false;
    }
}

function locateApple() {
    let r = Math.floor(Math.random() * MAX_RAND);
    apple_x = r * DOT_SIZE;

    r = Math.floor(Math.random() * MAX_RAND);
    apple_y = r * DOT_SIZE;
}

function gameCycle() {
    if (inGame) {
        checkApple();
        checkCollision();
        move();
        doDrawing();
        setTimeout(gameCycle, DELAY);
    }
}

onkeydown = ({key}) => {
    if((key === "ArrowLeft" || key ==="a") && direction !== 1) 
    {direction = directions.left}
    else if((key === "ArrowRight" || key ==="d") && direction !== 0)
    {direction = directions.right}
    else if((key === "ArrowUp" || key ==="w") && direction !== 3)
    {direction = directions.up}
    else if ((key === "ArrowDown" || key ==="s") && direction !== 2)
    {direction = directions.down}
};
