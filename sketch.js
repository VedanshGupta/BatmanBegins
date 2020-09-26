const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var canvas;

var umbrella;

var maxDrops = 100;
var drops = [];

function preload(){
    
}

function setup(){
   canvas = createCanvas(800, 800);

   umbrella = new Umbrella(400, 400);

   for(var i=0; i<maxDrops; i++){
   	drops.push(new drops(random(0, 400), random(0, 400), 10));
   }
}

function draw(){
    drops.display();
    drops.update();

    umbrella.display();
}   

