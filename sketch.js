const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,block1;
var stand1,stand2;
var block2;

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(450,397,900,10);
    stand1=new Ground(390,300,250,10);
    stand2=new Ground(715,150,200,10);
    block1=new Block(390,270,30,40);
    block2=new Block(360,270,30,40);
    block3=new Block(330,270,30,40);
    block4=new Block(300,270,30,40);
    block5=new Block(420,270,30,40);
    block6=new Block(450,270,30,40);
    block7=new Block(480,270,30,40);
    block8=new Block(400,220,30,40);
    block9=new Block(430,220,30,40);
    block10=new Block(460,220,30,40);
    block11=new Block(370,220,30,40);
    block12=new Block(340,220,30,40);
    block13=new Block(310,220,30,40);
    block14=new Block(430,180,30,40);
    block15=new Block(400,180,30,40);
    block16=new Block(370,180,30,40);
    block17=new Block(340,180,30,40);
    block18=new Block(355,140,30,40);
    block19=new Block(385,140,30,40);
    block20=new Block(415,140,30,40);
    block21=new Block(385,100,30,40);
    block22=new Block(760,90,30,40);
    block23=new Block(700,90,30,40);
    block24=new Block(670,90,30,40);
    block25=new Block(670,80,30,40);
    block26=new Block(760,80,30,40);
    block27=new Block(715,10,120,20)

}
function draw(){
    background(0);
    Engine.update(engine);
    textSize(14);
    fill("orange")
    text("Drag the hexagonal stone and release it,to launch it towards the blocks",50,70);
    ground.display();
    stand1.display();
    stand2.display();
    fill("violate");
    block1.display();
    fill("blue");
    block2.display();
    fill("red");
    block3.display();
    fill("orange")
    block4.display();
    fill("yellow");
    block5.display();
    fill("green");
    block6.display();
    fill("gray");
    block7.display();
    fill("orange");
    block8.display();
    fill("blue");
    block9.display();
    fill("gray");
    block10.display();
    fill("green");
    block11.display();
    fill("red");
    block12.display();
    fill("pink");
   block13.display();
    fill("yellow");
    block14.display();
    fill("red");
    block15.display();
    fill("gray");
    block16.display();
    fill("yellow");
    block17.display();
    fill("yellow");
    block18.display();
    fill("blue");
    block19.display();
    fill("brown");
    block20.display();
    fill("green");
    block21.display();
    fill("violate");
    block22.display();
    fill("red");
    block23.display();
    fill("white");
    block24.display();
    fill("red")
    block25.display();
    fill("red")
    block26.display();
    fill("white")
   block27.display();


}   