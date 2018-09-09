var x = 0;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0);
    ellipse(x, 120, 16, 16);

    x = x + 1;
    if (x > width) {
        x = 0;
    }
}