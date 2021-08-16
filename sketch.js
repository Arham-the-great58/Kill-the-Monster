const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var background,backgroundIMG
var monster, monsterIMG
var hero, heroIMG
var ground;
var sling;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;


function preload() {
//preload the images here
 backgroundIMG = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(1500, 800);
  // create sprites here

engine = Engine.create();
world = engine.world;
hero = new Hero(400,200);
monster = new Monster(1200,200)

ground = new Ground(500,565,1500,20)

sling = new SlingShot(hero.body,{x:500, y:100});

  box1 = new Box(900,100,30,30);
	box2 = new Box(900,100,30,30);
	box3 = new Box(900,100,30,30);
	box4 = new Box(900,100,30,30);
	box5 = new Box(900,100,30,30);
	box6 = new Box(900,100,30,30);
	box7 = new Box(900,100,30,30);
	
	box8 = new Box(800,100,30,30);
	box9 = new Box(800,100,30,30);
	box10 = new Box(800,100,30,30);
	box11 = new Box(800,100,30,30);
	box12 = new Box(800,100,30,30);
	
	box13 = new Box(300,100,30,30);
	box14 = new Box(300,100,30,30);
	box15 = new Box(300,100,30,30);
	box16 = new Box(300,100,30,30);


}

function draw() {
//background.addImage(backgroundIMG);
background(backgroundIMG)

Engine.update(engine);
monster.display();
hero.display();
ground.display();
sling.display();

  box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();
	box8.display();
	box9.display();
	box10.display();
	box11.display();
	box12.display();
	box13.display();
	box14.display();
	box15.display();
	box16.display();

}

function mouseDragged(){

	Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});

}

