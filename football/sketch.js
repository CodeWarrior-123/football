const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
  netImg = loadImage("sprites/net.png")

}

function setup() {
  var canvas = createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;
  edges = createEdgeSprites()

  net = createSprite(200, 50, 50, 50)
  net.addImage(netImg)
  //net.velocityX=-4


  ground = new Ground(600, height, 1200, 20);
  netBody = new Net(200, 50, 50, 50)


}

function draw() {


  background(0);

  Engine.update(engine);
  ground.display()
  net.bounceOff(edges)
  net.x = netBody.body.position.x
  Matter.Body.setVelocity(netBody.body, { x: -5, y: 0 })
  drawSprites()
}