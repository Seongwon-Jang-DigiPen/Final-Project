//Name: Seongwon Jang(장성원)
//Assignment name: Final Project
//Course Number: 20616-09(cs099)
//Term & Year: Spring 2020
class SettingScene extends EmptyScene{

constructor()
  {
   super()
    this.soundCanPlus = true
    this.soundCanMinus = true
     this.soundPlusButton = CreateButton(760, 310, 80, 80, plusbutton,'',this.soundCanPlus)
     this.soundMinusButton = CreateButton(250, 310, 80, 80, minusbutton,'',this.soundCanMinus)
    this.XButton = CreateButton(960, 40, 80, 80, Xbutton)
  }

  Draw()
  {
   
    image(backdefalt, 220, 300, 650, 100)
     for (var i = 0; i < sound; i++) {
      var x = 40
      image(defaltbar, 350 + x * i, 320, 30, 60)
    }
    
     DrawButton(this.soundPlusButton)
     DrawButton(this.soundMinusButton)
     DrawButton(this.XButton)
    textSize(50)
    text('SOUND',460,280)
  }
  
  Update()
  {
    
    if(sound <=0)
    {
    this.soundCanMinus = false 
    }
   else 
       {
    this.soundCanMinus = true
    }
   if(sound >= 10)
    {
    this.soundCanPlus = false 
    }
    else {
    this.soundCanPlus = true
    }
     this.soundPlusButton.canItClick = this.soundCanPlus
    this.soundMinusButton.canItClick = this.soundCanMinus
    if (DidClickButton(this.soundPlusButton)) { sound++}
    if (DidClickButton(this.soundMinusButton)) {sound--}
    if (DidClickButton(this.XButton)) {
    CurrentScene = previousScene
    }
  }
}