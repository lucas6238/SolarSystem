function Sun(x,y,size,mass,initalV) {

  this.col = color(255,255,0);
  this.diameter = 40;
  this.position =createVector(x,y);
 
  this.velocity = createVector(initalV,0);
  this.accel = createVector(0,0);
  this.radius = this.diameter/2;
  this.force = createVector();
  this.mass = mass;
 
  
  this.changeColor = function() {
    this.col = color(random(255), random(255), random(255));
  }

  this.update = function() {
   
    this.velocity.add(this.accel);
    this.position.add(this.velocity);
   this.accel.mult(0);
    
  }
  this.updateAccel = function(){
    this.accel.add(this.force);
    this.force =0;
  }
  
 
}


Sun.prototype.render = function() {
   
    fill(this.col);
    ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
    
  }

Sun.prototype.edges = function(){
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
Sun.prototype.calcAccel = function(other){
   
}

Sun.prototype.attract = function(other){
//calculate the force that should be applied to the ball
  //this.calcAccel(other);
  var bDist = dist(this.position.x,this.position.y,other.position.x,other.position.y);
  var desiredX =0;
  var desiredY=0;
  var fast1 = .005;
  var fast2 = .001;
 
  var strength = map(bDist,0,425,fast1, fast2);
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
Sun.prototype.intersects = function(other) {

   if(dist(this.position.x,this.position.y,other.position.x,other.position.y) < this.radius +other.radius){
     return true;
   }
   else{
     return false;}
  }
  
  Sun.prototype.turnAround = function(){
    this.velocity.mult(-1);
  }
  Sun.prototype.leaves =function(){
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