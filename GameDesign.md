//Name: Seongwon Jang(장성원)  
//Assignment name: Final Project  
//Course Number: 20616-09(cs099)  
//Term & Year: Spring 2020  
  
  
Game Design  
  
0. Overview  
Name: Es’cat’pe  
Genre: Platform RPG  
Target Player: Teenager  
Platform: PC  
Explanation:   
this is turn base game, you should find exit and arrive there.  
If you meet monster, then you should fight.  
You can get a coin and upgrade your character.  
  
1. main scene    
character Upgrade: you can Upgrade Damage.  
choose Stage: there have 5 Stage. You must clear the previous stage before you can do the next stage.  
  
2. Play scene  
base: Stage based in ascii game that used 2D arrays. 
Goal: The goal is to control the player and arrive at exit  
player: The player can move in four directions. (key is ‘w’, ‘a’, ‘s’, ‘d’)  
monster: Monsters move whenever the player moves and point their eyes to the next position.  
Coin: Player can get Coin and player can use it to upgrade character.  
Wall: Player and Monster can’t go there.  
  
3. Fight scene  
base: Fight scene based in platform game  
Goal: You should kill the monster.  
Player:Left move: ‘a’, right move: ‘d’, Jump; ‘space bar’, Attack: ‘mouse left click’  
Attack Logic:  
Monster and player have ‘attack range’ but attack way is different.  
Player: if monster join the player attack range and player click the left mouse button.  
Monster: if player join the monster attack range.  
  
4. Setting Scene  
You can change sound volume  
  
5. Dead Scene  
you can choose to move MainScene or TitleScene  
  
6. Credit Scene  
you can see developer, license  
  
Game logic and UI Flow chart
![GameLogicandUI](https://user-images.githubusercontent.com/65111263/86619100-e994f400-bff4-11ea-929f-49d95bc618c7.PNG)
