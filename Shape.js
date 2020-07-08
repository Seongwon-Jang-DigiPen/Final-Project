//Name: Seongwon Jang(장성원)
//Assignment name: Final Project
//Course Number: 20616-09(cs099)
//Term & Year: Spring 2020
function Stagegoogly(x, y, state,Color) {
  push()
  ellipseMode(CORNER)
  var a = 0
  var b = 0
  switch (state) {
    case UP: //UP
      b = -5
      break;
    case DOWN:
      b = +5
      break;
    case LEF:
      a = -5
      break;
    case RIGH:
      a = +5
      break;
  }
  push()
  fill(Color)
  translate(x, y+10)
  circle(0, 0, 80)
  push()
  fill(255)
  circle(5, 20, 30)
  circle(45, 20, 30)
  pop()
  push()
  fill(0)
  circle(15 + a, 30 + b, 10)
  circle(55 + a, 30 + b, 10)
  pop()
  circle(0, 60, 25)
  circle(55, 60, 25)
  pop()
  pop()
}

function fightgoogly(x, y,handx, Color) {
  push()
  ellipseMode(CORNER)

  
  push()
  fill(Color)
  translate(x, y)
  circle(0, 0, 80)
  push()
  fill(255)
  circle(5, 20, 30)
  circle(45, 20, 30)
  pop()
  push()
  fill(0)
  circle(20, 30 , 10)
  circle(60, 30, 10)
  pop()
  circle(0, 60, 25)
  circle(55+handx, 60, 25)
  pop()
  pop()
}

function Lance(x,y,range)
{
  translate(x,y)
  fill('grey')
  noStroke()
  triangle(0,5,0,15,range,10)
}