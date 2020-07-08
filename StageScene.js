//Name: Seongwon Jang(장성원)
//Assignment name: Final Project
//Course Number: 20616-09(cs099)
//Term & Year: Spring 2020
class character {

  constructor(x, y) {
    this.x = x
    this.y = y
  }


  draw() {

  }
}
class stageMonster extends character {
  constructor(x, y, m, c) {
    super(x, y)
    this.move = m
    this.moveCount = 0
    this.nextMove = m[1]
    this.Color = c
  }
}

class stagePlayer extends character {

  constructor(x, y) {
    super(x, y)
  }
}

class StageScene extends EmptyScene {

  constructor(stage, stageLevel, STAGEMONSTER) {
    super()
    this.didMove = false
    this.cols = stage[0].length
    this.rows = stage.length
    this.world = make2DArray(this.cols, this.rows)
     for(var j=0;j<this.rows;j++)
     {{for(var k=0;k<this.cols;k++)
       this.world[j][k]=stage[j][k]
     }}
    this.stageLevel = stageLevel
    this.player = new stagePlayer(1, 1)
    this.monster = []
    this.settingButton = CreateButton(950, 50, 100, 100, settingbutton);
    for (var i = 0; i < STAGEMONSTER.length; i++) {
      this.monster.push(new stageMonster(STAGEMONSTER[i].x, STAGEMONSTER[i].y, STAGEMONSTER[i].monsterMove, STAGEMONSTER[i].monsterName))
    }
  }
  SoundChange() {
    if (this.world[this.player.y][this.player.x] == EXIT) {
      CBG(MainSound)
    }
  }
  playerMove() {
    if (!this.didMove) {
      var x = this.player.x
      var y = this.player.y
      if (keyIsDown(65) && this.world[y][x - 1] != WALL) {
        this.player.x -= 1
        this.didMove = true
      } else if (keyIsDown(68) && this.world[y][x + 1] != WALL) {
        this.player.x += 1
        this.didMove = true
      } else if (keyIsDown(87) && this.world[y - 1][x] != WALL) {

        this.player.y -= 1
        this.didMove = true
      } else if (keyIsDown(83) && this.world[y + 1][x] != WALL) {
        this.player.y += 1
        this.didMove = true
      } else if (keyIsDown(32)) {
        this.didMove = true
      }
    }
  }
  checkcollision() {
    if (this.world[this.player.y][this.player.x] == COIN) //if meet coin
    {
      player.Coin += 1 + player.CoinUpgrade
      this.world[this.player.y][this.player.x] = 0
      Coinsound.play()

    }

    for (var i = 0; i < this.monster.length; i++) {
      if (this.player.y == this.monster[i].y && this.player.x == this.monster[i].x) {
        previousScene = CurrentScene
        CBG(FightSound)
        switch (this.monster[i].Color) {

          case GREENGOOGLY:
            CurrentScene = new FightScene(GM, GB)
            break;
          case BLUEGOOGLY:
            CurrentScene = new FightScene(BM, GB)
            break;
          case YELLOWGOOGLY:
            CurrentScene = new FightScene(YM, GB)
            break;
          case REDGOOGLY:
            CurrentScene = new FightScene(RM, GB)
            break;

        }
        this.monster.splice(i, 1);
      }

    }
    if (this.world[this.player.y][this.player.x] == EXIT) {
      player.S[this.stageLevel] = true
      CurrentScene = new MainScene()
    }
  }

  monsterMove() {
    if (this.didMove) {

      for (var i = 0; i < this.monster.length; i++) {
        this.monster[i].moveCount %= this.monster[i].move.length
        this.monster[i].nextMove = this.monster[i].move[(this.monster[i].moveCount + 1) % this.monster[i].move.length]
        if (this.monster[i].move[this.monster[i].moveCount] == LEF) {
          this.monster[i].x -= 1
        } else if (this.monster[i].move[this.monster[i].moveCount] == RIGH) {
          this.monster[i].x += 1
        } else if (this.monster[i].move[this.monster[i].moveCount] == UP) {

          this.monster[i].y -= 1
        } else if (this.monster[i].move[this.monster[i].moveCount] == DOWN) {
          this.monster[i].y += 1
        }
        this.monster[i].moveCount++
      }
      this.didMove = false
    }
  }
  Update() {
    if (DidClickButton(this.settingButton)) {
      previousScene = CurrentScene
      CurrentScene = new SettingScene()
    }
    this.SoundChange()
    this.checkcollision()
    this.monsterMove()
    this.checkcollision()

  }
  Draw() {
    image(stageBackground, 0, 0, 1080, 720)

    push()
    this.CameraMove()

    for (let j = 0; j < this.rows; j++) {
      for (let i = 0; i < this.cols; i++) {
        let x = i * 100
        let y = j * 100

        if (this.world[j][i] == COIN) {

          image(CoinUI, x, y, 100, 100);
        } else if (this.world[j][i] == WALL) {
          image(Block, x, y, 100, 100)

        } else if (this.world[j][i] == EXIT) {

          image(Exitimage, x, y, 100, 100)
        }
      }
    }

    image(stageCat, this.player.x * 100, this.player.y * 100, 100, 100)
    push()
    for (var i = 0; i < this.monster.length; i++) {
      Stagegoogly(this.monster[i].x * 100 + 10, this.monster[i].y * 100, this.monster[i].nextMove, this.monster[i].Color)
    }
    pop()
    pop()
    DrawButton(this.settingButton);
    HPGUI(30, 40)
    GOLDGUI(30, 100)
  }

  CameraMove() {
    translate(width / 4, height / 4)
    translate(this.player.x * -80, this.player.y * -80)
  }

  OnKeyPressed() {
    this.playerMove()
  }
}
function make2DArray(c, r) {

  let arr = new Array(c);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(r)
  }
  return arr
}