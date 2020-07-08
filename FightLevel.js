//Name: Seongwon Jang(장성원)
//Assignment name: Final Project
//Course Number: 20616-09(cs099)
//Term & Year: Spring 2020
class block{

constructor(x,y,xsize,ysize)
  {
   this.x =x
    this.y=y
    this.xsize = xsize
    this.ysize = ysize
  }

  draw()
  {
    fill('brown')
   rect(this.x,this.y,this.xsize,this.ysize) 
  }

}

const GB1 = {
  x:100,
  y:400,
  xsize:100,
  ysize:100
}
const GB2= {
  x:0,
  y:600,
  xsize:1080,
  ysize:720
}
const GB3 = {
  x:800,
  y:400,
  xsize:100,
  ysize:100
}
const GM1 = {
 x:800,
 y:50,
  weapon:hand,
  hp:50,
   Color:'Green'
}
const BM1 = {
 x:800,
 y:80,
  weapon:bighand,
  hp:50,
   Color:'Blue'
}
const YM1 = {
 x:800,
 y:100,
  weapon:verybighand,
  hp:50,
   Color:'Yellow'
}
const RM1 = {
 x:800,
 y:50,
  weapon:veryverybighand,
  hp:150,
   Color:'Red'
}
const GB = [GB1,GB2,GB3]
const GM = [GM1]
const BM = [BM1]
const YM = [YM1]
const RM = [RM1]
