//Name: Seongwon Jang(장성원)
//Assignment name: Final Project
//Course Number: 20616-09(cs099)
//Term & Year: Spring 2020
class FightScene extends EmptyScene {
  constructor(M,B) {
    super()
    this.player = new Player(300, 50)
    this.monsters = []
    this.block = []
    for (var i = 0; i < M.length; i++) {
      this.monsters.push(new monster(M[i].x, M[i].y,M[i].hp, M[i].weapon,M[i].Color))
    }

    for (var j = 0; j < B.length; j++) {
      this.block.push(new block(B[j].x, B[j].y, B[j].xsize, B[j].ysize))
    }
  }
  Draw() {
    image(stageBackground, 0, 0, 1080, 720)
    for (var i = 0; i < this.block.length; i++) {
      this.block[i].draw()
    }
       this.particle()
    this.player.draw()
    
        for (var j = 0; j < this.monsters.length; j++) {
     this.monsters[j].draw()
    }

    push()
    imageMode(CORNER)
    fill('black')
     HPGUI(30, 40)
    pop()

  }
  Update() {

    this.player.update(this.block)
    if(this.player.Hp<=0)
    {
      CBG(DeadSound)
     CurrentScene = new DeadScene() 
    }
  if(this.monsters[0]==null)
  {  
    CBG(StageSound)
    p = []
    CurrentScene = previousScene 
  }
    for (var j = 0; j < this.monsters.length; j++) {
      this.monsters[j].update(this.block, this.player)
      if (this.monsters[j].Hp <= 0) {
        this.monsters.splice(j, 1)
      }
    }
  }

particle()
  {
   for(let b of p)
{
     b.update()
      b.draw()
}
  
  for(var i=p.length-1;i>0;i--)
  {
if(p[i].IsItDead())
{
  p.splice(i,1)
}
  } 
  }
}