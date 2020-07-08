//Name: Seongwon Jang(장성원)
//Assignment name: Final Project
//Course Number: 20616-09(cs099)
//Term & Year: Spring 2020
let SpriteData;
let SpriteImage;
let FrameIndex = 0;
let EllapsedTime = 0;
let DisplayTime = 1 / 12 * 1000;
let Animations = {};
let CatAnimationNames = ["Att", "Dead", "Hurt", "Idle", "Jump", "Run"];
let CurrentAnimationName = "Idle";

class Player extends non_player {

  constructor(x, y) {
    super(x, y, 60, 70, player.weapon, player.MaxHp)
    this.Hp = player.Hp
    this.jump = false
    this.att = false
    this.adelay = false
    this.speed = 0.7
    this.jumppower = 15
    this.speedMax = 5
    this.weapon = player.weapon
  }

  update(block) {
    var preX = this.position.x
    var preY = this.position.y
    this.idlecheck()
    this.stiffen()
    this.att_delay();
    this.keymove();
    this.speedupdate();
    this.screencheck();
    this.blockCollisionCheck(block, preX, preY);

    player.Hp = this.Hp
  }

  idlecheck() {
    if ((this.velocity.x < 0.1 && this.velocity.x > -0.1) && (this.velocity.y > -0.1 && this.velocity.y < 0.1) && CurrentAnimationName != CatAnimationNames[3] && CurrentAnimationName != CatAnimationNames[2] && CurrentAnimationName != CatAnimationNames[0]) {
      CurrentAnimationName = CatAnimationNames[3];
      FrameIndex = 0;
      EllapsedTime = 0;
    }
    if (CurrentAnimationName == CatAnimationNames[0] && FrameIndex == 2)
      if (this.jump) {
        CurrentAnimationName = CatAnimationNames[4];
        FrameIndex = 0;
        EllapsedTime = 0;
      }
    else {
      CurrentAnimationName = CatAnimationNames[3];
      FrameIndex = 0;
      EllapsedTime = 0;
    }
  }
  stiffen() {

    if (this.hit && CurrentAnimationName != CatAnimationNames[2]) {
      CurrentAnimationName = CatAnimationNames[2];
      FrameIndex = 0;
      EllapsedTime = 0;
    }
    this.hit = false
  }

  blockCollisionCheck(block, preX, preY) {
    var undercheck = false
    for (var i = 0; i < block.length; i++) {

      if (AABB(this.position.x, this.position.y, block[i].x, block[i].y, this.xsize, this.ysize, block[i].xsize, block[i].ysize)) {

        if (preY + this.ysize <= block[i].y) //undercheck
        {
          undercheck = true
          this.velocity.y = 0;
          this.position.y = block[i].y - this.ysize
          this.jump = false;
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
    if (!undercheck) {
      this.jump = true
    }
  }

  keymove() {
    if (keyIsDown(65)) {
      this.velocity.x -= this.speed
      this.right = false;
      if (CurrentAnimationName != CatAnimationNames[5] && !this.jump) {
        CurrentAnimationName = CatAnimationNames[5];
        FrameIndex = 0;
        EllapsedTime = 0;
      }

    }
    if (keyIsDown(68)) {

      this.velocity.x += this.speed
      this.right = true;
      if (CurrentAnimationName != CatAnimationNames[5] && !this.jump) {
        CurrentAnimationName = CatAnimationNames[5];
        FrameIndex = 0;
        EllapsedTime = 0;
      }
    }

    if (keyIsDown(32) && !this.jump) {
      this.jump = true
      this.velocity.y -= this.jumppower
      Jumpsound.play()
      if (CurrentAnimationName != CatAnimationNames[4]) {
        CurrentAnimationName = CatAnimationNames[4];
        FrameIndex = 0;
        EllapsedTime = 0;
      }
    }

    if (mouseIsPressed) {
      if (mouseButton === LEFT && !this.adelay) {
         Hitsound.play()
        this.attack(this.position)
        if (CurrentAnimationName != CatAnimationNames[0]) {
          CurrentAnimationName = CatAnimationNames[0];
          FrameIndex = 0;
          EllapsedTime = 0;
        }
      }
    }

  }


  draw() {
    //rect(this.position.x, this.position.y, this.xsize, this.ysize)  
    this.Hpbar()
    let frames = Animations[CurrentAnimationName];
    let frame = frames[FrameIndex];

    let canvas_width = frame.w * 0.25;
    let canvis_height = frame.h * 0.25;

    imageMode(CENTER);
    if (this.right) {

      image(SpriteImage, this.position.x + 32, this.position.y + 30, 130, 85,
        frame.x, frame.y, frame.w, frame.h);
      if (CurrentAnimationName == CatAnimationNames[0]) {
        push()
        fill(255)
        Lance(this.position.x + 50, this.position.y + 35, this.weapon.range)
        pop()
      }
    } else {

      push()
      translate(this.position.x + 32, this.position.y + 30)
      scale(-1, 1)
      image(SpriteImage, 0, 0, -130, -85,
        frame.x, frame.y, frame.w, frame.h);
      pop()

      if (CurrentAnimationName == CatAnimationNames[0]) {
        push()
        translate(this.position.x + 10, this.position.y + 35)
        scale(-1, 1)
        fill(255)
        Lance(0, 0, this.weapon.range)
        pop()
      }
    }

    EllapsedTime += deltaTime;
    if (EllapsedTime > DisplayTime) {
      if (CurrentAnimationName == CatAnimationNames[4] && FrameIndex+1  == frames.length) {
        FrameIndex -= 1
      }
      FrameIndex = (FrameIndex + 1) % frames.length;
      EllapsedTime -= DisplayTime;


    }

  }

  attack() {
    if (!this.adelay) {
      this.adelay = true
      var range = this.xsize + this.weapon.range
      this.att = true
      for (var i = 0; i < CurrentScene.monsters.length; i++) {
        if (this.right && AABB(this.position.x, this.position.y, CurrentScene.monsters[i].position.x, CurrentScene.monsters[i].position.y, range, this.ysize, CurrentScene.monsters[i].xsize, CurrentScene.monsters[i].ysize)) {
          CurrentScene.monsters[i].Hp -= this.weapon.damage
          CurrentScene.monsters[i].hit = true
        } else if (!this.right && AABB(this.position.x - this.weapon.range, this.position.y, CurrentScene.monsters[i].position.x, CurrentScene.monsters[i].position.y, range, this.ysize, CurrentScene.monsters[i].xsize, CurrentScene.monsters[i].ysize)) {
          CurrentScene.monsters[i].Hp -= this.weapon.damage
          CurrentScene.monsters[i].hit = true
        }
      }
    }
  }


}

function AABB(px, py, bx, by, pxsize, pysize, bxsize, bysize) {
  if (abs((px + pxsize / 2) - (bx + bxsize / 2)) < pxsize / 2 + bxsize / 2) {

    if (abs((py + pysize / 2) - (by + bysize / 2)) < pysize / 2 + bysize / 2) {
      return true
    }
  }
  return false
}