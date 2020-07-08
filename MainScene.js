//Name: Seongwon Jang(장성원)
//Assignment name: Final Project
//Course Number: 20616-09(cs099)
//Term & Year: Spring 2020
class MainScene extends EmptyScene {
  constructor() {
    super()

    this.stage1Button = CreateButton(80, 550, 150, 150, emptybutton, "S1");
    this.stage2Button = CreateButton(280, 550, 150, 150, emptybutton, "S2", player.S[0])
    this.stage3Button = CreateButton(480, 550, 150, 150, emptybutton, "S3", player.S[1])
    this.stage4Button = CreateButton(680, 550, 150, 150, emptybutton, "S4", player.S[2])
    this.stage5Button = CreateButton(880, 550, 150, 150, emptybutton, "S5", player.S[3])
    
    this.HpUpButton = CreateButton(800, 60, 80, 80, plusbutton, "", player.HpCanUpgrade)
    this.CoinUpButton = CreateButton(800, 170, 80, 80, plusbutton, "", player.CoinCanUpgrade)
    this.AttUpButton = CreateButton(800, 280, 80, 80, plusbutton, "", player.DamageCanUpgrade)
    this.RangeUpButton = CreateButton(800, 390, 80, 80, plusbutton, "", player.RangeCanUpgrade)

    this.settingButton = CreateButton(950, 50, 100, 100, settingbutton);
    this.CreditButton = CreateButton(950, 180, 100, 100, Creditbutton);

  }

  Draw() {

    image(stageBackground, 0, 0,1080,720)
    image(backdefalt, 300, 50, 600, 100)
    image(HPUI, 330, 70, 60, 60)
    image(backdefalt, 300, 160, 600, 100)
    image(CoinUI, 330, 180, 60, 60)
    push()
    textSize(20)
    fill(255)
    image(backdefalt, 300, 270, 600, 100)
    text('DAMAGE',310,325)
    image(backdefalt, 300, 380, 600, 100)
    text('RANGE',320,435)
    pop()
    
    for (var i = 0; i < player.HpUpgrade; i++) {
      var x = 40
      image(defaltbar, 400 + x * i, 70, 30, 60)
    }
    for (var j = 0; j < player.CoinUpgrade; j++) {
      var x1 = 40
      image(defaltbar, 400 + x1 * j, 180, 30, 60)
    }

    for (var k = 0; k < player.DamageUpgrade; k++) {
      var x2 = 40
      image(defaltbar, 400 + x2 * k, 290, 30, 60)
    }
    for (var l = 0; l < player.RangeUpgrade; l++) {
      var x3 = 40
      image(defaltbar, 400 + x3 * l, 400, 30, 60)
    }
    
    DrawButton(this.settingButton);
    DrawButton(this.CreditButton);
    DrawButton(this.stage1Button);
    DrawButton(this.stage2Button);
    DrawButton(this.stage3Button);
    DrawButton(this.stage4Button);
    DrawButton(this.stage5Button);
    DrawButton(this.HpUpButton)
    DrawButton(this.CoinUpButton)
    DrawButton(this.AttUpButton)
    DrawButton(this.RangeUpButton)
    HPGUI(30, 40)
    GOLDGUI(30, 100)

    push()
    image(backdefalt, 10, 200, 270, 270)
    fill('white')
    textSize(16)
textAlign(CENTER)
    text('5Gold == 1Upgrade\n\nHow to Stage Play?\n WASD==Move\n Space Bar == Wait\n\n How to Fight Play?\n WASD==Move\n MouseLeftClick== attack\n Space Bar == Jump',140,250)
    pop()
    
  }

  Update() {
    player.Hp = player.MaxHp
    p = []
    CheckUpgradeMax()
    this.stage2Button.canItClick = player.S[0]
    this.stage3Button.canItClick = player.S[1]
    this.stage4Button.canItClick = player.S[2]
    this.stage5Button.canItClick = player.S[3]
    this.HpUpButton.canItClick = player.HpCanUpgrade
    this.CoinUpButton.canItClick = player.CoinCanUpgrade
    this.AttUpButton.canItClick = player.DamageCanUpgrade
    this.RangeUpButton.canItClick = player.RangeCanUpgrade
    this.DidClickButton()
  }

  DidClickButton() {
    if (DidClickButton(this.settingButton)) {
      previousScene = CurrentScene
      CurrentScene = new SettingScene()
    }
       if (DidClickButton(this.CreditButton)) {
      previousScene = CurrentScene
      CurrentScene = new CreditScene()
    }
    if (DidClickButton(this.stage1Button)) {
      CurrentScene = new StageScene(STAGE1, 0, STAGE1MONSTER)
      CBG(StageSound)
    }
    if (DidClickButton(this.stage2Button)) {
      CurrentScene = new StageScene(STAGE2, 1,STAGE2MONSTER)
      CBG(StageSound)
    }
    if (DidClickButton(this.stage3Button)) {
      CurrentScene = new StageScene(STAGE3, 2,STAGE3MONSTER)
      CBG(StageSound)
    }
    if (DidClickButton(this.stage4Button)) {
      CurrentScene = new StageScene(STAGE4, 3,STAGE4MONSTER)
      CBG(StageSound)
    }
    if (DidClickButton(this.stage5Button)) {
      CurrentScene = new StageScene(STAGE5, 4,STAGE5MONSTER)
      CBG(StageSound)
    }

    if (DidClickButton(this.HpUpButton)) {
      if (player.Coin >= 5) {
        player.Coin -= 5
        player.HpUpgrade++
        player.MaxHp = 50 + (25 * player.HpUpgrade)
        PowerUpsound.play()
      }
    }
    if (DidClickButton(this.CoinUpButton)) {
      if (player.Coin >= 5) {
        player.Coin -= 5
        player.CoinUpgrade++
        PowerUpsound.play()
      }
    }
         if (DidClickButton(this.AttUpButton)) {
      if (player.Coin >= 5) {
        player.Coin -= 5
        player.DamageUpgrade++
        spear.damage+=4
        PowerUpsound.play()
      }
         }
              if (DidClickButton(this.RangeUpButton)) {
      if (player.Coin >= 5) {
        player.Coin -= 5
        player.RangeUpgrade++
        spear.range+=10
        PowerUpsound.play()
      }
    }
  }
}

function CheckUpgradeMax() {

  if (player.HpUpgrade >= 10) {
    player.HpCanUpgrade = false
  }
  if (player.CoinUpgrade >= 10) {
    player.CoinCanUpgrade = false
  }
    if (player.DamageUpgrade >= 10) {
    player.DamageCanUpgrade = false
  }
    if (player.RangeUpgrade >= 10) {
    player.RangeCanUpgrade = false
  }
}

function HPGUI(x, y) {
  push()
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(16)
  Hredwidth = map(player.Hp, 0, player.MaxHp, 0, 140)
  image(Hpbar.Hpbar, x, y, 202, 55)
  image(Hpbar.Hpbar_red, x + 48, y + 11, Hredwidth, 31)
  text(player.Hp + '/' + player.MaxHp, x + 116, y + 27)
  pop()
}

function GOLDGUI(x, y) {
  push()
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill('white')
  textSize(16)
  Hredwidth = map(player.Hp, 0, player.MaxHp, 0, 280)
  image(goldUI, x, y, 120, 50)
  text(player.Coin, x + 75, y + 26)
  pop()
}