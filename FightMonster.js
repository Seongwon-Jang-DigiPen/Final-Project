//Name: Seongwon Jang(장성원)
//Assignment name: Final Project
//Course Number: 20616-09(cs099)
//Term & Year: Spring 2020
class monster extends non_player {

  constructor(x, y, hp, w,c) {
    super(x, y, 50, 50, w, hp)
    this.speed = 0.1
    this.speedMax = 5
    this.handX = 0
    this.handcheck = false
    this.color = c
    this.weapon = w
  }

  update(block, p) {
    var preX = this.position.x
    var preY = this.position.y

    this.screencheck()
    this.monstermove(p)
    this.speedupdate()
    this.blockCollisionCheck(block, preX, preY)
    this.stiffen()
    this.draw()
    this.attack()
    this.att_delay()
    this.stiffen()

  }
  stiffen() {
    if (this.hit) { 
       Boomsound.play()
      for(var i=0;i<100;i++)
          {
    p.push(new particle(this.position.x,this.position.y,random()*2+2,random()*PI*2,new vec2(0,0,0,0.1)))
    }
      if (this.right) {
        this.velocity.x = -5
      }

      if (!this.right) {
        this.velocity.x = +5
      }
    }
    this.hit = false
  }

  blockCollisionCheck(block, preX, preY) {

    for (var i = 0; i < block.length; i++) {
      if (AABB(this.position.x, this.position.y, block[i].x, block[i].y, this.xsize, this.ysize, block[i].xsize, block[i].ysize)) {

        if (preY + this.ysize <= block[i].y) //undercheck
        {

          this.velocity.y = 0;
          this.position.y = block[i].y - this.ysize

        }
        if (preY >= block[i].y + block[i].ysize) //undercheck
        {
          this.velocity.y = 0;
          this.position.y = block[i].y + block[i].ysize
        }
        if (preX + this.xsize <= block[i].x) //undercheck
        {
          this.velocity.x = 0;
          this.position.x = block[i].x - this.xsize
        }
        if (preX >= block[i].x + block[i].xsize) //undercheck
        {
          this.velocity.x = 0;
          this.position.x = block[i].x + block[i].xsize
        }
      }
    }

  }

  attack() {
    if (!this.adelay&&CurrentScene.player.Hp>0) {
      var range = this.xsize + this.weapon.range

      if (this.right && AABB(this.position.x, this.position.y, CurrentScene.player.position.x, CurrentScene.player.position.y, range, this.ysize, CurrentScene.player.xsize, CurrentScene.player.ysize)) {   
        this.velocity.x = 0
        this.handcheck = true
        CurrentScene.player.Hp -= this.weapon.damage
        CurrentScene.player.hit = true
        this.adelay = true
        this.att = true
      } else if (!this.right && AABB(this.position.x - this.weapon.range, this.position.y, CurrentScene.player.position.x, CurrentScene.player.position.y, range, this.ysize, CurrentScene.player.xsize, CurrentScene.player.ysize)) {
        this.velocity.x = 0
        this.handcheck = true
        CurrentScene.player.Hp -= this.weapon.damage
        CurrentScene.player.hit = true
        this.adelay = true
        this.att = true
      }

    }
  }

  monstermove(p) {
    if (p.position.x < this.position.x) {
      this.velocity.x -= this.speed
      this.right = false

    }
    if (p.position.x > this.position.x) {
      this.velocity.x += this.speed
      this.right = true
    }

  }


  draw() {
    if (this.handcheck) {
      this.handX += 5
    }
    if (this.handX > this.weapon.range) {
      this.handX = 0
      this.handcheck = false
    }
    this.Hpbar()
    push()
    translate(this.position.x, this.position.y)
    scale(0.6)
    if (this.right) {
      fightgoogly(0, 0, this.handX, this.color)
    } else {
      scale(-1, 1)
      fightgoogly(-80, 0, this.handX, this.color)
    }
    pop()
  }

}