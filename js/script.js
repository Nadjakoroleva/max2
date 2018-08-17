let x = 0;

let dx = 5;

let y = 0;

let dy = 3;

let count = 0;

let a = 1;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("#2E2E2E");

  fill("#00FF40");
  ellipse(x, y, 40, 40);
  rect(mouseX, height - 30, 120, 25);

  if (x > width) {
    dx = -dx;
  }

  if (x < 0) {
    dx = -dx;
  }

  if (y < 0 || y > height) {
    dy = -dy;
  }

  fill("#00FF40");
  textSize(25);
  text("Level", 25, 60);

  fill("#00FF40");
  textSize(25);
  text(a, 100, 60);

  fill("#00FF40");
  textSize(50);
  text(count, 225, 175);

  if (x > mouseX && x < mouseX + 120) {
    if (y > height - 30 && y < height - 10) {
      dy = -dy;

      count = count + 1;
      if (count > 4 && count % 5 == 0) {
        dy = dy - 1;

        a = a + 1;
      }
    }
  }

  if (y > height) {
    dy = 0;
    dx = 0;
    fill("#00FF40");
    textSize(50);
    text("GAME OVER!", 100, 275);
  }

  if (count > 4 && count % 5 == 0 && y < height + 50) {
    textSize(20);
    fill("#0000FF");
    text("Picking up the pace...", 150, 350);
  }

  y = y + dy;
  x = x + dx;
}
