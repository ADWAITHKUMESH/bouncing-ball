//accessing the engine,world,bodies inside the matter library
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//variables
var ball;
var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    //creating small engine using the bigger engine 
    engine = Engine.create();
    //referring the pre made world to created engine 
    world = engine.world;
//options to exempt ground from gravity
    var ground_options ={
        isStatic: true
    }
//ground
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
//ball will bounce   
    var ball_options={
    restitution: 1.0
    }


//creating a ball
    ball = Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);

    





    console.log(ground);
}

function draw(){
    background(0);
    //updating the engine(0 tick)
    Engine.update(engine);
    //centring the rect
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    //centring the circle
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
    
}