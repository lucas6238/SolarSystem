function Planet(x,y,size,orbSpeed,orbDist) {

  this.col = color(12,220,80);
  this.diameter = size;
  this.position =createVector(0,0);
 this.disFrom =0;
  this.velocity = createVector(0,0);
  this.maxVel=0
  this.accel = createVector(0,0);
  this.radius = this.diameter/2;
  this.force = createVector();
 // this.mass = mass;
  this.orbDist = orbDist;
  this.orbSpeed=orbSpeed;
 
  
  this.changeColor = function() {
    this.col = color(random(255), random(255), random(255));
  }

  this.update = function() {
   
  // console.log("forceY " + this.force.y);
  // console.log("accel Y" + this.accel.y);
  // console.log("velocity Y" + this.velocity.y);
  // console.log("position Y" + this.position.y);
   
   
    
    this.velocity.add(this.accel);
    this.position.add(this.velocity);
    //this.force.mult(0);
   this.accel.mult(0);
    

    //console.log("desiredX" + round(this.force.x) + " desiredY" + round(this.force.y));
  }
  this.updateAccel = function(){
    this.accel.add(this.force);
    this.force =0;
  }
  this.testOutput = function(other){
  // console.log(sin(other.position.x));
   // console.log(sin(this.position.x,this.position.y) / cos(this.position.x,this.position.y));
  

    
    
  }
  
 
}


Planet.prototype.render = function() {
   // noStroke();
    fill(this.col);
    ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
    
  }

Planet.prototype.edges = function(){
  if(this.position.x + this.radius < 0){
    this.position.x = width + this.radius;
  }
  
  if(this.position.x  - this.radius > width){
    this.position.x = 0 - this.radius;
  }
  if(this.position.y + this.radius< 0){
    this.position.y = height  + this.radius;
  }
  
  if(this.position.y - this.radius> height){
    this.position.y = 0 - this.radius;
  }
}
Planet.prototype.calcAccel = function(other){
   
}
Planet.prototype.pOrbit = function(other){
  var orbDist = this.orbDist;
  var orbSpeed = this.orbSpeed;
 //im an going to use the properties of a circle using
 //sin as x and cos as y to position the ball around another object
  // var radius = dist(this.position.x,this.position.y,other.position.x,other.position.y);
   //set velocity directly equal to the calculated vector
   //var degRoll = step%3600;
   //test= test*PI;
  //var degRoll = step%360;
  //console.log(this.position.x +" " + this.position.y);
 this.position.x = other.position.x + (cos(frameCount*PI/this.orbSpeed)*this.orbDist);
this.position.y = other.position.y +(sin(frameCount*PI/this.orbSpeed)*this.orbDist);
 //line(this.position.x,this.position.y,other.position.x,other.position.y);
   
}

Planet.prototype.attract = function(other){
//calculate the force that should be applied to the ball
  //this.calcAccel(other);
  var bDist = dist(this.position.x,this.position.y,other.position.x,other.position.y);
  if (this.velocity.y>this.maxVel){
    this.maxVel=this.velocity.y;
   // console.log(this.maxVel)
  }
  var desiredX =0;
  var desiredY=0;
  var fast1 = .005;
  var fast2 = .001;
 
  var strength = map(bDist,0,425,fast1, fast2);
  var test = map(100,0,425,fast1, fast2);
  //console.log(test);
  //console.log("bdist"+bDist);
  //console.log(" strength "+strength);
//  strength*=other.mass;
  if(this.position.x > other.position.x){ 
    desiredX = other.position.x - this.position.x;
  }
  else{ desiredX = other.position.x -this.position.x;}
  
  if(this.position.y > other.position.y){ 
    desiredY = other.position.y - this.position.y;
  }
  else{ desiredY = other.position.y -this.position.y;}
 
 

   this.force = createVector(desiredX,desiredY);
   
   this.force.mult(strength);
   this.updateAccel();
   
   // this.force.mult(this.strength);
   //console.log("force.y " + this.force.y +"      desiredy " +desiredY);
   
    
    
   
    //now i need to give each object a mass and use mass to calculate
    //the strength of the force that should be applied to the other object
  //the force is a vector that is added to acceleration
  //i need a vector that is pointed  to the attractor 
  //then i need to strengthen it or shorten it based on the p
  
  //apply a force that 
 // console.log("x " + round(cVecX) + " y " + round(cVecY));
  //this.accel.sub(10);
  //the distance between the two objects there is a ratio between how stong they are together
  //apply a force to both objects that sends them tward each other
  //
  //get the two distances
  //calculate attaction force
  //attractive force based on distance
  
  //create a vector that points the two of them togther
}
Planet.prototype.intersects = function(other) {

   if(dist(this.position.x,this.position.y,other.position.x,other.position.y) < this.radius +other.radius){
     return true;
   }
   else{
     return false;}
  }
  
  Planet.prototype.turnAround = function(){
    this.velocity.mult(-1);
  }
  Planet.prototype.leaves =function(){
     if(this.position.x + this.radius < 0){
   this.position = createVector(random(width),random(height));
  }
  
  if(this.position.x  - this.radius > width){
    
    this.position = createVector(random(width),random(height));
  }
  if(this.position.y + this.radius< 0){
    
    this.position = createVector(random(width),random(height));
  }
  
  if(this.position.y - this.radius> height){
    
    this.position = createVector(random(width),random(height));
  }
  }