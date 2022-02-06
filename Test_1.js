function setup() {
 createCanvas(720, 720)
  rectMode(CENTER);
}


function draw() {
   background(255);
  
  var col1 = 0;
  var col2 = 0;
  col1 = int(map(mouseX,0,width,0,255));
  col2 = int(map(mouseY,0,height,0,255));
  fill(col1,col2,255);
  rect(mouseX, mouseY,100,100);

}
