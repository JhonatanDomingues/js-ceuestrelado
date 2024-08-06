// Defina o tamanho da tela
var largura = 500;
var altura = 500;

// Crie uma lista para armazenar os círculos
var circulos = [];

function setup() {

  createCanvas(500, 500);
  

  for (var i = 0; i < random(100, 1000); i++) {
    circulos.push({
      x: random(largura),
      y: random(altura),
      dx: (0),
      dy: (0),
      tamanho: (5)
    });
  }
}

function draw() {
  
  background(0);
  
  
  for (var i = 0; i < circulos.length; i++) {
    var c = circulos[i];
    
   
    fill("white");
    noStroke();
    ellipse(c.x, c.y, c.tamanho, c.tamanho);
  }
}