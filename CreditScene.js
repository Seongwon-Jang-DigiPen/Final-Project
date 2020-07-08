//Name: Seongwon Jang(장성원)
//Assignment name: Final Project
//Course Number: 20616-09(cs099)
//Term & Year: Spring 2020
class CreditScene extends EmptyScene{

constructor()
  {
   super()
 
    this.XButton = CreateButton(960, 40, 80, 80, Xbutton)
  }

  Draw()
  {
   
    image(CreditImage, 0, 0, 1080, 720)

     DrawButton(this.XButton)
  
  }
  
  Update()
  {
    
    
    if (DidClickButton(this.XButton)) {
    CurrentScene = previousScene
    }
  }
}