//Name: Seongwon Jang(장성원)
//Assignment name: Final Project
//Course Number: 20616-09(cs099)
//Term & Year: Spring 2020

const COIN = 1
const WALL = 2
const EXIT = 3

const LEF = 10
const RIGH = 11
const UP = 12
const DOWN = 13

const GREENGOOGLY = 'Green'
const BLUEGOOGLY = 'Blue'
const YELLOWGOOGLY = 'Yellow'
const REDGOOGLY = 'Red'
const MONSTERMOVEPATTERN0 = [LEF, RIGH, RIGH, LEF]
const MONSTERMOVEPATTERN1 = [RIGH, RIGH, DOWN, LEF, LEF, UP]
const MONSTERMOVEPATTERN2 = [UP, UP, UP, DOWN, DOWN, DOWN]
const MONSTERMOVEPATTERN3 = [LEF, RIGH, RIGH, LEF]
const MONSTERMOVEPATTERN4 = [UP, UP, DOWN, DOWN]
const MONSTERMOVEPATTERN5 = [UP, UP, RIGH, RIGH, DOWN, DOWN, LEF, LEF]
const MONSTERMOVEPATTERN6 = [UP, DOWN, DOWN, UP]
const MONSTERMOVEPATTERN7 = [DOWN, DOWN, UP, UP]

const STAGE1 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 2, 0, 1, 0, 2, 0, 0, 0, 1, 0, 0, 0, 2],
  [2, 0, 1, 0, 2, 0, 1, 0, 1, 1, 2, 0, 0, 3, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
]
const STAGE2 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 2],
  [2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 2],
  [2, 0, 2, 0, 2, 0, 2, 2, 2, 0, 2, 0, 0, 0, 2],
  [2, 1, 2, 0, 2, 0, 1, 0, 2, 0, 0, 0, 0, 3, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
]
const STAGE3 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2],
  [2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 2],
  [2, 2, 0, 2, 0, 2, 0, 2, 0, 1, 2],
  [2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 2],
  [2, 2, 1, 2, 1, 2, 1, 2, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2],
  [2, 2, 1, 1, 0, 0, 0, 0, 0, 3, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
]

const STAGE4 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
  [2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2],
  [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
]
const STAGE5 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 2, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2],
  [2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2],
  [2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0, 1, 2],
  [2, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0, 0, 1, 2],
  [2, 0, 0, 0, 0, 0, 2, 3, 0, 2, 0, 0, 0, 1, 2],
  [2, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 1, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
]
const S1M1 = {
  monsterName: GREENGOOGLY,
  x: 4,
  y: 1,
  monsterMove: MONSTERMOVEPATTERN0
}
const S1M2 = {
  monsterName: GREENGOOGLY,
  x: 7,
  y: 1,
  monsterMove: MONSTERMOVEPATTERN1
}
const S2M1 = {
  monsterName: GREENGOOGLY,
  x: 1,
  y: 4,
  monsterMove: MONSTERMOVEPATTERN2

}
const S2M2 = {
  monsterName: BLUEGOOGLY,
  x: 6,
  y: 4,
  monsterMove: MONSTERMOVEPATTERN3
}
const S2M3 = {
  monsterName: GREENGOOGLY,
  x: 11,
  y: 3,
  monsterMove: MONSTERMOVEPATTERN4

}
const S2M4 = {
  monsterName: BLUEGOOGLY,
  x: 12,
  y: 3,
  monsterMove: MONSTERMOVEPATTERN4

}
const S2M5 = {
  monsterName: GREENGOOGLY,
  x: 13,
  y: 3,
  monsterMove: MONSTERMOVEPATTERN4

}
const S3M1 = {
  monsterName: YELLOWGOOGLY,
  x: 2,
  y: 5,
  monsterMove: MONSTERMOVEPATTERN5
}
const S3M2 = {
  monsterName: YELLOWGOOGLY,
  x: 4,
  y: 5,
  monsterMove: MONSTERMOVEPATTERN5
}
const S3M3 = {
  monsterName: YELLOWGOOGLY,
  x: 6,
  y: 5,
  monsterMove: MONSTERMOVEPATTERN5
}
const S4M1 = {
  monsterName: YELLOWGOOGLY,
  x: 2,
  y: 3,
  monsterMove: MONSTERMOVEPATTERN4
}

const S4M3 = {
  monsterName: YELLOWGOOGLY,
  x: 4,
  y: 1,
  monsterMove: MONSTERMOVEPATTERN7
}
const S4M4 = {
  monsterName: YELLOWGOOGLY,
  x: 6,
  y: 3,
  monsterMove: MONSTERMOVEPATTERN4
}

const S4M6 = {
  monsterName: YELLOWGOOGLY,
  x: 8,
  y: 1,
  monsterMove: MONSTERMOVEPATTERN7
}
const S4M7 = {
  monsterName: REDGOOGLY,
  x: 2,
  y: 7,
  monsterMove: MONSTERMOVEPATTERN4
}

const S4M9 = {
  monsterName: REDGOOGLY,
  x: 4,
  y: 5,
  monsterMove: MONSTERMOVEPATTERN7
}
const S4M10 = {
  monsterName: REDGOOGLY,
  x: 6,
  y: 7,
  monsterMove: MONSTERMOVEPATTERN4
}

const S4M12 = {
  monsterName: REDGOOGLY,
  x: 8,
  y: 5,
  monsterMove: MONSTERMOVEPATTERN7
}

const S5M1 = {
  monsterName: REDGOOGLY,
  x: 3,
  y: 3,
  monsterMove: MONSTERMOVEPATTERN4
}

const S5M2 = {
  monsterName: REDGOOGLY,
  x: 5,
  y: 1,
  monsterMove: MONSTERMOVEPATTERN7
}
const S5M3 = {
  monsterName: REDGOOGLY,
  x: 7,
  y: 3,
  monsterMove: MONSTERMOVEPATTERN4
}

const S5M4 = {
  monsterName: REDGOOGLY,
  x: 9,
  y: 1,
  monsterMove: MONSTERMOVEPATTERN7
}

const S5M5 = {
  monsterName: REDGOOGLY,
  x: 11,
  y: 3,
  monsterMove: MONSTERMOVEPATTERN4
}
const S5M6 = {
  monsterName: REDGOOGLY,
  x: 13,
  y: 1,
  monsterMove: MONSTERMOVEPATTERN7
}
const S5M7 = {
  monsterName: REDGOOGLY,
  x: 3,
  y: 8,
  monsterMove: MONSTERMOVEPATTERN4
}

const S5M8 = {
  monsterName: REDGOOGLY,
  x: 5,
  y: 6,
  monsterMove: MONSTERMOVEPATTERN7
}
const S5M9 = {
  monsterName: REDGOOGLY,
  x: 7,
  y: 8,
  monsterMove: MONSTERMOVEPATTERN4
}

const S5M10 = {
  monsterName: REDGOOGLY,
  x: 9,
  y: 6,
  monsterMove: MONSTERMOVEPATTERN7
}

const S5M11 = {
  monsterName: REDGOOGLY,
  x: 11,
  y: 8,
  monsterMove: MONSTERMOVEPATTERN4
}
const S5M12 = {
  monsterName: REDGOOGLY,
  x: 13,
  y: 6,
  monsterMove: MONSTERMOVEPATTERN7
}

const STAGE1MONSTER = [S1M1, S1M2]
const STAGE2MONSTER = [S2M1, S2M2, S2M3, S2M4, S2M5]
const STAGE3MONSTER = [S3M1, S3M2, S3M3]
const STAGE4MONSTER = [S4M1, S4M3, S4M4, S4M6, S4M7, S4M9, S4M10, S4M12]
const STAGE5MONSTER = [S5M1,S5M2,S5M3,S5M4,S5M5,S5M6,S5M7,S5M8,S5M9,S5M10,S5M11,S5M12]