const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine;
var world;
var snowbg;
var snowbgImg;
var box;
var flakes;

function preload(){
  snowbgImg = loadImage("snow3.jpg");
  snowbg= loadImage("snow4.webp");
}


function setup() {
  

  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;


  flakes= new Snowflakes(100,100,20,20);

}

function draw() {
  background(snowbgImg);  
  Engine.update(engine);

image(snowbg,100,100,100,100);
flakes.display();

  drawSprites();
}

