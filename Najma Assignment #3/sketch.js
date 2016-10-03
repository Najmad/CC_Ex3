//variables
var vars = {
  v : 205,
  w : 260,
  x : 50,
  y : 120, 

};

var speed = 1

var myFont;
function preload() {
  myFont = loadFont('../fonts/halloween.ttf');
}

function setup() {
  createCanvas(700,700);
  background(0);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  
   //body
  fill(255);
  noStroke();
  triangle(150, 490, 420, 490, 210, 190);
  triangle(150, 520, 120, 500, 220, 180);
  triangle(140, 145, 270, 400, 255, 139);
  ellipse(230, 275, 180, 280);

  //eyes
  fill(0);
  noStroke();
  ellipse(vars.v, 245, 50, 120);
  ellipse(vars.w, 245, 50, 120);
  
  //mouth
  ellipse(230, 350, 40, 40);
  
  
  //pumpkin
  fill(255,164, 0);
  noStroke();
  ellipse(550, 120, 120, 100);
  ellipse(510, 120, 120, 100);
  stroke(255,140,0);
  ellipse(530, 120, 110, 100);
  ellipse(530, 120, 115, 100);
  ellipse(530, 120, 95, 100);
  fill(127,255,0);
  noStroke();
  rect(530,59,8,30);
  
  //gold pumpkin
  fill(212,175, 55);
  noStroke();
  ellipse(550, 270, 120, 100);
  ellipse(510, 270, 120, 100);
  stroke(200,160,40);
  ellipse(530, 270, 110, 100);
  ellipse(530, 270, 115, 100);
  ellipse(530, 270, 95, 100);
  fill(162,158,20);
  noStroke();
  rect(530,210,8,30);
  
  
   //silver pumpkin
  fill(192,192, 192);
  noStroke();
  ellipse(550, 440, 120, 100);
  ellipse(510, 440, 120, 100);
  stroke(169,169,169);
  ellipse(530, 440, 110, 100);
  ellipse(530, 440, 115, 100);
  ellipse(530, 440, 95, 100);
  fill(128,128,128);
  noStroke();
  rect(530,379,8,30);
  
  //text
  fill(250,180, 50, 5);
  textSize(136);
  textFont(myFont);
  text("Boo!", vars.x, vars.y);
    
  if
  ((vars.w > 270) || (vars.w < 230)){
  speed = speed *-1;
  }
  
    
  if
    (vars.x > width) {
    speed = -1;
    }
  
  if  
    (vars.y > height) {
    speed = -1;
    }
  
 
  vars.v = vars.v + speed;
  vars.w = vars.w + speed;
  vars.x = vars.x + speed;
  vars.y = vars.y + speed;

  noStroke();
  fill(250, 180, 50, 50);
  ellipse(mouseX, mouseY, 50, 50);
  
 
}
  
  function mousePressed() {
    background(random(255));
  
}
