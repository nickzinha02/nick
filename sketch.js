let cor;
let quadradoX; // horizontal
let quadradoY; // vertical

function setup() {
  createCanvas(400, 400);
  background(color(100, 0 , 0));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  
  quadradoX = [0, 0, 0];
  quadradoY = [random(height), random(height), random(height)];
}

function draw() {
  
  fill(cor);
  
  for(let contador in quadradoX) {
    square(quadradoX[contador], quadradoY[contador], 50);    
    quadradoX[contador]+= random(0,3);
    quadradoY[contador]+= random(-3,3); 
    
    if(quadradoX[contador] >= width){
      quadradoX[contador] = 0;
      quadradoY[contador] = random(height);
    }
  }
  
  if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}