var bubbles = [];
var planets = [];
var moons =[];
var sun;
var earth;

var SizeW = 600;
var SizeH = 600;
//var step =0;
function setup() {
  
  frameRate(20);
  
  var cvn = createCanvas(SizeW,SizeH);
  cvn.parent("sketch-holder");
  sun = new Sun(width/2,height/2);
  
 
    //new planet(x,y,size,orbSpeed,orbDist)
    //mercuery
   planets.push(new Planet(0,0,10,50,50));
   //venus
    planets.push(new Planet(0,0,10,70,70));
  //earth
   planets.push(new Planet(0,0,10,90,90));
   //mars
  planets.push(new Planet(0,0,10,110,110));
   //jupiter
   planets.push(new Planet(0,0,30,200,150));
   //saturn
   planets.push(new Planet(0,0,15,300,200));
   //neptune
   planets.push(new Planet(0,0,15,180,250));
   //uranus
   planets.push(new Planet(0,0,12,250,300));
  
  for(i=0;i<1;i++){
    moons.push(new Moon(0,0,3,random(5,45),10));
  }
  
  
   // planets.push(new Planet(width/2,100,10,1,0));
  
  // for (var i = 0; i < 1; i++) {
  //   var protection;
  //   var bubble = new Bubble(random(width),random(height));
  //   var overlapping = false;
  //   for(j=0;j<bubbles.length;j++){
  //     if( bubble.intersects(bubbles[j])){
  //     overlapping = true;
  //   // console.log(j + "hello");
  //     break;
  //     }
  //   // console.log(overlapping);
      
  //   }if(!overlapping){
  //       bubbles.push(bubble);
  //     }
  //     protection++;
  //     if(protection>10000){
  //       console.log("exit");
  //       break;
  //     }
      
  // }
  
  
  


//console.log(bubbles.length);

}

function draw() {
 background(100);
 sun.render();
planets[0].testOutput(sun);

  
   for (var p =0; p < planets.length; p++) {
   // bubbles[1].attract(bubbles[0]);
  //  bubbles[0].attract(bubbles[1]);
    planets[p].render();
 // planets[p].attract(sun);
 
 //everything is attracted to the sun
 //this statement is attracts every planet to the sun
  planets[p].pOrbit(sun);
 
  //this statement adds the extra orbit for the moon to the earth
  // planets[1].pOrbit(step,planets[0],32,30);
   //planets[2].pOrbit(step,sun,128,300);
   
 //  planets[0].render();
  
  //planets[p].update();
  
     //bubbles[i].edges();

  }
  for(var j=0;j<moons.length;j++){
    for(x=0;x<planets.length;x++){
       moons[j].pOrbit(planets[x]);
       moons[j].render();
    }
    
    
  }
if(mouseIsPressed){
   //push(new Planet(300,mouseY,10,1,6.16));
}


}