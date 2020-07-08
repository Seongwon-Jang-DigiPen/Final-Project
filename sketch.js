//Name: Seongwon Jang(장성원)
//Assignment name: Final Project
//Course Number: 20616-09(cs099)
//Term & Year: Spring 2020

let previousScene
let CurrentScene
let sound = 5
let p = []
let BGSound
let player = {
  MaxHp: 50,
  Hp: 50,
  Coin: 20,
  HpUpgrade: 0,
  CoinUpgrade: 0,
  DamageUpgrade: 0,
  RangeUpgrade: 0,
  S: [false, false, false, false, false],
  HpCanUpgrade: true,
  CoinCanUpgrade: true,
  DamageCanUpgrade: true,
  RangeCanUpgrade: true,
  weapon: spear
}

function setup() {
  for (let name of CatAnimationNames) {
    let frames = [];
    for (let frames_info of SpriteData.frames) {
      if (!frames_info.filename.includes(name))
        continue;
      frames.push(frames_info.frame);
    }
    Animations[name] = frames;
    
  }
   BGSound = TitleSound
  BGSound.play()
  BGSound.setLoop(true)
  
  ellipseMode(CORNER)
  createCanvas(1080, 720);
  
  CurrentScene = new TitleScene();
}

 function draw() {
   
   background(230)
   push()
   CurrentScene.Update()
   CurrentScene.Draw()
   pop()
   SoundCheck()
   
}

function keyPressed() {
  CurrentScene.OnKeyPressed()

}