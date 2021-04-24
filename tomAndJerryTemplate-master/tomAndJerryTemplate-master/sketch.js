
function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
tomimg1=loadImage("images/cat1.png")
tomimg2=loadImage("images/cat2.png","images/cat3.png")
tomimg3=loadImage("images/cat4.png")

jerryimg1=loadImage("images/mouse1.png")
jerryimg2=loadImage("images/mouse2.png","images/mouse3.png")
jerryimg3=loadImage("images/mouse4.png")




}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(870,600)
tom.addAnimation("tomsleeping",tomimg1)
tom.scale=0.2

jerry=createSprite(200,600)
jerry.addAnimation("jerrystanding",jerryimg1)
jerry.scale=0.15






}

function draw() {

    background(bg);
    if(tom.x-jerry.x<tom.width/2-jerry.width/2){
        tom.velocityX=0;
         tom.addAnimation("tomLastImage", tomImg3);
          tom.x =300;
           tom.scale=0.2;
            tom.changeAnimation("tomLastImage");
             jerry.addAnimation("jerryLastImage", jerryImg3);
              jerry.scale=0.15;
               jerry.changeAnimation("jerryLastImage");}

    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    tom.velocityX=-5
    tom.addAnimation("tomRunning",tomimg2)
    tom.changeAnimation("tomRunning");
     jerry.addAnimation("jerryTeasing", jerryImg2); 
     jerry.frameDelay = 25;
      jerry.changeAnimation("jerryTeasing");

}
  


}
