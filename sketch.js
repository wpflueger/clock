function setup() {
  createCanvas(800, 600); // make an HTML canvas element width x height pixels
}

function draw() {
  background("black");
  noStroke();
  //frameRate(1);

  randomSeed(123);
  for (let i = 0; i < 100; i++) {
    x_pos = random(0, 800);
    y_pos = random(0, 600);
    drawStars(x_pos, y_pos);
  }

  //Draw Sun
  fill("#fcd14d");
  ellipse(0, 0, 300);

  //Draw Planets

  //Hour
  fill("#6b93d6");
  ellipse(
    600 * cos(map(hour(), 0, 24, PI / 2, 0)),
    600 * sin(map(hour(), 0, 24, PI / 2, 0)),
    50
  );

  //Minute
  fill("#BBB7AB");
  ellipse(
    450 * cos(map(minute(), 0, 60, PI / 2, 0)),
    450 * sin(map(minute(), 0, 60, PI / 2, 0)),
    50
  );

  //Second Fixed
  fill("#97979F");
  ellipse(
    300 * cos(map(second(), 0, 60, PI / 2, 0)),
    300 * sin(map(second(), 0, 60, PI / 2, 0)),
    30
  );
}

function drawStars(x, y) {
  fill("white");
  ellipse(x, y, 3);
}
