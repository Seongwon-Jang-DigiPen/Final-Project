//Name: Seongwon Jang(장성원)  
//Assignment name: Final Project  
//Course Number: 20616-09(cs099)  
//Term & Year: Spring 2020  

Programming Concepts  
  
1. Shape  
1-1 Stagegoogly(x,y,state,Color)  
what: This one draw googlyeyes on the StageScene  
why: Monster visualization  
How: (x,y = locate), state = find googly eye pupil locate, Color = googly Color.  
  
1-2 fightgoogly(x,y,handx,Color)  
what: This one draw googlyeyes on the FightScene  
why: Monster visualization  
How: (x,y = locate),handx = It is monster hand locate(if monster attact then handx will change and monster hand will move), Color = googly Color.  
  
  
2. Colors  
only some block, googly eyes and text have a Colors.  
  
  
3. Variables  
3-1 previousScene  
what: This have a previous Scene  
why: If fightScene change to stageScene then we need  
  
3-2 sound  
What: sound Variables change every sound volume  
How: if (DidClickbutton(SoundUpbutton)){Sound++}  
  
3-3 BGSound  
what: BGSound variable have a Background Sound  
How: BGsound.play  
  
3-4 animation variable  
SpriteData = cat.json  
SpriteImage = cat.png  
  
FrameIndex = check frame  
EllapsedTime, DisplayTime = check time  
  
  
4. Conditional Statements  
4-1 check Jump  
what: check the player Jump state  
How: if(!Jump)  
  
5. Loops  
check every monster  
what: it can check every monster  
How: for (var j = 0; j < this.monsters.length; j++)  
  
  
6. Functions  
6-1 CreateButton, DrawButton, DidClickButton  
what: make button and can use it  
how:   
CreateButton = makeJSON(have a x,y,width, etc) and return  
DidClickButton(button) = check the button  
DrawButton = draw the button  

6-2 AABB Collision(px,py,bx,by,pxsize,pysize,bxsize,bysize)   
{if(p,b is crash){return true}}  
Why: platform game need many Collision Check  
  
7. Classes  
7-1 class EmptyScene()  
{  
Update(){} : update Scene  
Draw(){} : draw Scene  
OnKeyPressed(){} : Check keyPressed  
}  
what: I make EmptyScene then Inheritance(MainScene, TitleScene, StageScene, FightScene, SettingScene, CreditScene, DeadScene)  
why: because it is easy to change Scene.  
How:  
draw(){  
CurrentScene.Draw  
CurrentScene.Update  
}  
make CurrentScene and if I need to change Scene then just change CurrentScene  
  
7-2 class Non-Player()  
what: I make Non-Player then Inheritance(Player,monster)  
why: because monsters and players have many similar variables.  
How: class NonPlayer(){constructor() {speed, Hp, Weapon. etc}}  
  
7-3 class particle  
what: if you attact monster then make 100 particle.  
why: make funny effect.  
how: I used Particle array exercise and only change Color.  
  
8. Arrays  
8-1 p[]  
what: particle will join.  
  
8-2 monster[]  
what: every monster join.  
  
  
How can a player stand on a platform?  
1. Put the current position in the local variable.  
2. Change the position value according to the speed.  
3. If the changed position value contacts the block, adjust the position value.  
4. When adjusting, check where the previous position value was and adjust the position accordingly.  
  
How can player(or monster) can attack  
1. if (mouse left click && !attdelay)  
2. check range and monster (use AABB Collision)  
3. monster Hp -= player.weapon.damage  
4. attDelay = true (need to wait time)  
  
Stage Scene algorism  
1. if player Move or pressed space bar  
2. check collision  
3. monster move  
4. check collision again  
