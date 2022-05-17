// const str = '1022 x 11 / (5, 2), (5, 3), (2, 4) ';

// console.log(
//   str.match(
//     /(?:\d+\s?x\s?\d+\s?){1}\/{1}(?:\s?\(\d+,\s?\d+\),{1})+\s?(?:\(\d+,\s?\d+\){1})/
//   )
// );

class Enemy {
  constructor(x, y, hp = 300) {
    this.x = x
    this.y = y
    this.hp = hp
  }

  damage(amount) {
    // deduct hp by amount
    this.hp -= amount
  }

  isDead() {
    // fill this up
    if (this.hp <= 0) return true
    return false
  }
}

class Archer {
  constructor(arrows, field, damage = 40) {
    this.x = 0 // starts at the leftmost square
    this.kills = 0

    this.arrows = arrows
    this.field = field
    this.damage = damage
  }

  moveLeft() {
    // moves 1 square to the left, but does nothing if at the leftmost edge
    if (this.x !== 0) this.x--
  }

  moveRight() {
    // moves 1 square to the right, but does nothing if at the rightmost edge
    if (this.x < this.field.numCols - 1) this.x++
  }

  shoot() {
    // shoots all enemies in the current column, does nothing if out of arrows
    if (this.outOfArrows() === false) {
      const isKilled = this.field.damageEnemiesAtColumn(this.x, this.damage)
      this.arrows--
      if (isKilled === true) this.kills++
    }
  }

  outOfArrows() {
    // detect if out of arrows
    if (this.arrows <= 0) return true
    return false
  }
}

class Field {
  constructor(rows = 11, cols = 10) {
    this.grid = []
    this.numRows = rows
    this.numCols = cols

    for (let i = 0; i < this.numCols; i++) {
      const column = []
      for (let j = 0; j < this.numRows; j++) {
        column.push(null)
      }
      this.grid.push(column)
    }
  }

  static loadFromFileContents(contents) {
    // create a field from file contents, usage should be:
    // const field = Field.loadFromFileContents("10 x 11 / (5, 2), (5, 3), (2, 4)")
    
    const invalidCheck = contents.match(  /(?:\d+\s?x\s?\d+){1}\s?\/{1}(?:\s?\(\d+,\s?\d+\),)*(?:\s?\(\d+,\s?\d+\){1})/g)
    if (!invalidCheck) return null
    
    const fieldGridStr = contents.match(/\d+\s?\x\s?\d+/g)[0]
    const fieldGridArr = fieldGridStr.match(/\d+/g)
    const [fieldGridX, fieldGridY] = [parseInt(fieldGridArr[0]), parseInt(fieldGridArr[1])]
  
    const field = new Field(fieldGridY, fieldGridX)
    
    // get enemy locations
    let enemyLocs = contents.match(/\d+/g)
    console.log(enemyLocs)
    for (let i = 2; i < enemyLocs.length; i = i + 2) {
      console.log(enemyLocs[i], enemyLocs[i+1], 'for1')
      field.placeEnemy(parseInt(enemyLocs[i]), parseInt(enemyLocs[i+1]))
    }
    return field
  }

  placeEnemy(x, y) {
    this.grid[x][y] = new Enemy(x ,y)
  }

  vacateTile(x, y) {
    // opposite of placeEnemy(), just marks a tile as null
    this.grid[x][y] = null
  }

  getEnemiesAtColumn(column) {
    // gets all "alive" enemies in the given column number
    let aliveEnemies = []
    for (let i = 0; i < this.grid[column].length; i++) {
      if (!this.grid[column][i]) continue
      if (this.grid[column][i].hp > 0) {
        aliveEnemies.push(this.grid[column][i])
      }
    }
    return aliveEnemies
  }

  damageEnemiesAtColumn(column, initialDamage) {
    // damage all enemies given the column number
    let isKilled = false
    //code here
    let damage = initialDamage
    const aliveEnemies = this.getEnemiesAtColumn(column)
    for (let i = 0; i < aliveEnemies.length; i++) {
      aliveEnemies[i].damage(damage)
      damage = Math.floor(damage - damage * 0.2)
      if (aliveEnemies[i].isDead()) {
        isKilled = true
      }
      
    }
    
    return isKilled
  }
}

const contents =
`10 x 11 / (5, 10), (5, 7), (5, 6), (2, 5), (4, 5), (5, 2)`

const field = Field.loadFromFileContents(contents)
console.log(field, Field)
console.log(field.numCols, 10)
console.log(field.numRows, 11)

console.log(field.getEnemiesAtColumn(5), [
new Enemy(5, 2),
new Enemy(5, 6),
new Enemy(5, 7),
new Enemy(5, 10),
])
console.log(field.getEnemiesAtColumn(2), [new Enemy(2, 5)])
console.log(field.getEnemiesAtColumn(4), [new Enemy(4, 5)])

const noEnemiesColumns = [0, 1, 3, 6, 7, 8, 9]
noEnemiesColumns.forEach((column) => {
console.log(field.getEnemiesAtColumn(column), 0)
})