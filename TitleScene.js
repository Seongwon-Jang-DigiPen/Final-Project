//Name: Seongwon Jang(장성원)
//Assignment name: Final Project
//Course Number: 20616-09(cs099)
//Term & Year: Spring 2020
class TitleScene extends EmptyScene {

  constructor() {
    super()
    this.newButton = CreateButton(440, 400, 200, 200, startbutton);
    this.settingButton = CreateButton(950, 50, 100, 100, settingbutton);
    this.CreditButton = CreateButton(950, 180, 100, 100, Creditbutton);
  }

  Draw() {
    image(titleImage, 0, 0)
    DrawButton(this.newButton);
    DrawButton(this.settingButton);
    DrawButton(this.CreditButton);
  }

  Update() {

    if (DidClickButton(this.newButton)) {
      NewGame()
      CBG(MainSound)
    }

    if (DidClickButton(this.settingButton)) {
      previousScene = CurrentScene
      CurrentScene = new SettingScene()
    }

    if (DidClickButton(this.CreditButton)) {
      previousScene = CurrentScene
      CurrentScene = new CreditScene()
    }
  }
}

function NewGame() {

  player.MaxHp = 50
  player.Hp = player.MaxHp
  player.Coin = 20
  player.HpUpgrade = 0
  player.CoinUpgrade = 0
  player.DamageUpgrade = 0
  player.RangeUpgrade = 0
  player.S = [false, false, false, false, false]
  player.HpCanUpgrade = true
  player.CoinCanUpgrade = true
  player.DamageCanUpgrade = true
  player.RangeCanUpgrade = true
  player.weapon = spear

  CurrentScene = new MainScene()

}