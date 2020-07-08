//Name: Seongwon Jang(장성원)
//Assignment name: Final Project
//Course Number: 20616-09(cs099)
//Term & Year: Spring 2020
let JumpSound
let BoomSound
let CoinSound
let PowerUpSound
let HitSound
let TitleSound
let MainSound
let StageSound
let FightSound
let DeadSound
let buttonHSound
let BG


let startbutton = {
  Normal: 0,
  Hover: 0,
  Click: 0
}
let settingbutton = {

  Normal: 0,
  Hover: 0,
  Click: 0
}
let emptybutton = {
  Normal: 0,
  Hover: 0,
  Click: 0,
  Locked: 0
}
let titleImage;
let Hpbar = {
  Hpbar: 0,
  Hpbar_red: 0
}
let plusbutton = {
  Normal: 0,
  Hover: 0,
  Click: 0,
  Locked: 0
}
let Vbutton = {
  Normal: 0,
  Hover: 0,
  Click: 0,
  Locked: 0
}
let minusbutton = {
  Normal: 0,
  Hover: 0,
  Click: 0,
  Locked: 0
}
let Xbutton = {
  Normal: 0,
  Hover: 0,
  Click: 0,
  Locked: 0
}
let Creditbutton= {
  Normal: 0,
  Hover: 0,
  Click: 0,
  Locked: 0
}

let stageCat
let goldUI
let backdefalt
let HPUI
let CoinUI
let defaltbar
let Block
let stageBackground
let Exitimage
let Tile
let DeadBackground
let CreditImage

function preload() {
  startbutton = {
    Normal: loadImage('Button/startbutton.png'),
    Hover: loadImage('Button/startbuttonH.png'),
    Click: loadImage('Button/startbuttonC.png')
  }

  settingbutton = {
    Normal: loadImage('Button/settingbutton.png'),
    Hover: loadImage('Button/settingbuttonH.png'),
    Click: loadImage('Button/settingbuttonC.png')
  }

  emptybutton = {
    Normal: loadImage('Button/Emptybutton.png'),
    Hover: loadImage('Button/EmptybuttonH.png'),
    Click: loadImage('Button/EmptybuttonC.png'),
    Locked: loadImage('Button/EmptybuttonL.png')
  }
  plusbutton = {
    Normal: loadImage('Button/plusbutton.png'),
    Hover: loadImage('Button/plusbuttonH.png'),
    Click: loadImage('Button/plusbuttonC.png'),
    Locked: loadImage('Button/plusbuttonL.png')
  }
  Vbutton = {
    Normal: loadImage('Button/Vbutton.png'),
    Hover: loadImage('Button/VbuttonH.png'),
    Click: loadImage('Button/VbuttonC.png'),
    Locked: loadImage('Button/VbuttonL.png')
  }
  minusbutton = {
    Normal: loadImage('Button/minusbutton.png'),
    Hover: loadImage('Button/minusbuttonH.png'),
    Click: loadImage('Button/minusbuttonC.png'),
    Locked: loadImage('Button/minusbuttonL.png')
  }
  Xbutton = {
    Normal: loadImage('Button/Xbutton.png'),
    Hover: loadImage('Button/XbuttonH.png'),
    Click: loadImage('Button/XbuttonC.png'),
    Locked: loadImage('Button/XbuttonL.png')
  }
    Creditbutton = {
    Normal: loadImage('Button/inbutton.png'),
    Hover: loadImage('Button/inbuttonH.png'),
    Click: loadImage('Button/inbuttonC.png'),
    Locked: loadImage('Button/inbuttonL.png')
  }
  stageCat = loadImage('Image/stageCat.png')
  Hpbar = {
    Hpbar: loadImage('Image/Hpbar.png'),
    Hpbar_red: loadImage('Image/Hpbar_red.png')
  }
  titleImage = loadImage('Image/titleimage.jpg')
  goldUI = loadImage('Image/goldGUI.png')
  backdefalt = loadImage("Image/backdefalt.png")
  HPUI = loadImage("Image/HPUI.png")
  defaltbar = loadImage("Image/defaltbar.png")
  CoinUI = loadImage("Image/Coin.png")
  Block = loadImage("Image/Block.png")
  stageBackground = loadImage("Image/stageBackground.png")
  Exitimage = loadImage("Image/EXIT.png")
  Tile = loadImage("Image/Tile.png")
  
  SpriteData = loadJSON('Cat.json');
  SpriteImage = loadImage('Cat.png');
  
DeadBackground= loadImage("Image/DeadImage.jpg")
CreditImage= loadImage("Image/CreditImage.png")

  Jumpsound = loadSound('Sound/Jump.wav')
  Boomsound = loadSound('Sound/Boom.wav')
  Coinsound = loadSound('Sound/Coin.wav')
  PowerUpsound = loadSound('Sound/PowerUp.wav')
  Hitsound = loadSound('Sound/Hit.wav')
   MainSound = loadSound('Sound/In Tranquil Spring - MP3.mp3')
  StageSound= loadSound('Sound/The World At Your Door MP3.mp3')
  TitleSound= loadSound('Sound/Market on the Sea - MP3.mp3')
   FightSound= loadSound('Sound/battleThemeA.mp3')
DeadSound = loadSound('Sound/Visions of Freedom MP3.mp3')
  buttonHSound= loadSound('Sound/Hover.wav')
  
}

function SoundCheck() {
  Jumpsound.setVolume(sound / 10)
  Boomsound.setVolume(sound / 10)
  Coinsound.setVolume(sound / 10)
  PowerUpsound.setVolume(sound / 10)
  Hitsound.setVolume(sound / 10)
 buttonHSound.setVolume(sound/10)
  BGSound.setVolume(sound/10)
}

function CBG(S)
{
      BGSound.stop()
      BGSound=S
      BGSound.setLoop(true)
      BGSound.play() 
}