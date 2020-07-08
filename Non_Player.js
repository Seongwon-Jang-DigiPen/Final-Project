//Name: Seongwon Jang(장성원)
//Assignment name: Final Project
//Course Number: 20616-09(cs099)
//Term & Year: Spring 2020
class non_player {
  constructor(x, y, xsize, ysize,weapon,hp) {
   this.Hpmax = hp
    this.Hp = this.Hpmax
  
    this.xsize = xsize
    this.ysize = ysize    
    this.right = true
    this.position = new vec2(x, y)
    this.velocity = new vec2()
    this.gravity = new vec2(0,0.4)
    this.friction = 0.95
    this.hit = false
  
    this.adelay =false
    this.weapon=hand
    
    this.time = 0
    this.timeElapsed = 0

  }
  stiffen(){

  this.hit = false
  }
  Hpbar()
  {
    push()
    fill('white')
    rect(this.position.x,this.position.y-30,this.xsize,20)
    var hpgauge =map(this.Hp,0,this.Hpmax,0,this.xsize)
    fill('red')
     rect(this.position.x,this.position.y-30,hpgauge,20)
    pop()
  }
  
   screencheck() {

    if (this.position.x < 0) {
      this.position.x = 0
      this.velocity.x = 0
    }
    if (this.position.x + this.xsize > width) {
      this.position.x = width - this.xsize
      this.velocity.x = 0
    }
  }
  
  speedupdate() {
   this.velocity.addTo(this.gravity)
    this.position.addTo(this.velocity)
    this.velocity.multiplyByx(this.friction) 
  }
  att_delay(){
   if(this.adelay)
   {
     this.timeElapsed += (millis()-this.time)/1000;
     if(this.timeElapsed > this.weapon.delay)
        {
          this.timeElapsed = 0
        this.adelay = false 
        } 
    this.time = millis()
   }
    
    
  }
}