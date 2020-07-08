//Name: Seongwon Jang(장성원)
//Assignment name: Final Project
//Course Number: 20616-09(cs099)
//Term & Year: Spring 2020
class particle
{
  
 constructor(x,y,speed,direction,gravity=new vec2(0,0))
  {
   this.position = new vec2(x,y)
   this.velocity = new vec2()
   this.velocity.setLength(speed)
   this.velocity.setAngle(direction)
   this.lifeSpan = random(1000,3000)
    this.gravity = gravity
   
 }
  update()
  {
    
    this.position.addTo(this.velocity)
   this.lifeSpan -= deltaTime
    this.accelerate(this.gravity)
    
  
  }
  accelerate(accel)
  {
   this.velocity.addTo(accel) 
  }
  
  draw()
  {push()
   noStroke()
    colorMode(HSB);
    var C = random(0,360)
  
    fill(C,100,100)
   circle(this.position.getX(),this.position.getY(),10)
   pop()
  }
  
  IsItDead()
  {
   return this.lifeSpan <=0; 
  }

}