//Name: Seongwon Jang(장성원)
//Assignment name: Final Project
//Course Number: 20616-09(cs099)
//Term & Year: Spring 2020
class DeadScene extends EmptyScene{

constructor()
  {
   super()
     this.TitleButton = CreateButton(870, 520, 80, 80, Vbutton,'')
     this.MainButton = CreateButton(110, 520, 80, 80, Vbutton,'')
    
  }

  Draw()
  {
    image(DeadBackground,0,0)
    DrawButton(this.TitleButton)
    DrawButton(this.MainButton)
  }
  
  Update()
  {
    if (DidClickButton(this.TitleButton)) 
    { 
    CurrentScene = new TitleScene()
      CBG(TitleSound)
    }
  if (DidClickButton(this.MainButton)) 
    { 
    CurrentScene = new MainScene()
      CBG(MainSound)
    }
  }
}