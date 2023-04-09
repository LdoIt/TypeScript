/*
 * @Date: 2023-04-07 15:38:13
 */
import './style/index.less'
import GameControl from './modules/GameControl'
//#region
// import Food from './modules/Food'
import Snake from './modules/Snake'
// import ScorePanel from './modules/ScorePanel'
// const food = new Food();
// console.log(food.X);
// console.log(food.Y);

// const scorePanel = new ScorePanel(100, 10);
// for(let i = 0; i < 1020; i++) {
//   scorePanel.addScore();
// }

const snake = new Snake();
snake.X = 100;
console.log(snake.X);


// snake.addBody()
//#endregion

// const gameControl = new GameControl();
