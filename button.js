//Name: Seongwon Jang(장성원)
//Assignment name: Final Project
//Course Number: 20616-09(cs099)
//Term & Year: Spring 2020

function CreateButton(the_left = 0, the_top = 0, w = 200, h = 200, button_Image, t = '', bool = true) {
  let the_button = {
    left: the_left,
    top: the_top,
    width: w,
    height: h,
    buttonimage: button_Image,
    buttontext: t,
    mouseIsOver: false,
    mouseWasPressed: false,
    buttonsoundH:false,
    canItClick: bool
  };
  return the_button;
}

function CheckButtonstate(the_button, bool) {
  the_button.canItClick = bool
  return the_button
}

function DidClickButton(the_button) {
  if (the_button.canItClick) {
    const left = the_button.left;
    const top = the_button.top;
    const right = left + the_button.width;
    const bottom = top + the_button.height;

    const within_x = mouseX > left && mouseX < right;
    const within_y = mouseY > top && mouseY < bottom;

    the_button.mouseIsOver = within_x && within_y;

    const clicked_it = the_button.mouseIsOver && the_button.mouseWasPressed && !mouseIsPressed;

    the_button.mouseWasPressed = mouseIsPressed;

    return clicked_it;
  }
}

function DrawButton(the_button) {
  push();
  let B_Image = the_button.buttonimage.Normal
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(the_button.width / 5)
  if (the_button.canItClick) {
    fill('green')
    if (the_button.mouseIsOver) {
      if (mouseIsPressed) {
        fill('black')
        B_Image = the_button.buttonimage.Click
      } else {
        fill('yellow')
        B_Image = the_button.buttonimage.Hover
        if(!the_button.buttonsoundH)
        { 
          buttonHSound.play()
        the_button.buttonsoundH =true
        }
      }
    }
    if(!the_button.mouseIsOver)
    {
      the_button.buttonsoundH =false
    }
  } 
  else {
    B_Image = the_button.buttonimage.Locked
    fill('grey')
  }
  translate(the_button.left, the_button.top);
  image(B_Image, 0, 0, the_button.width, the_button.height);
  text(the_button.buttontext, the_button.width / 2, the_button.height / 2)
  pop();

}