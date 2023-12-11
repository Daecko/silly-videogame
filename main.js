/** @type {HTMLCanvasElement} */ //This is JSDoc @type - remember me.
var canvas = document.getElementById("canvas");
var buttonC = document.getElementById("clear");
var gameStateDisplay = document.getElementById("gameStateD");
//Thanks to JSDoc @type now canvas methods appear in Intellisense.
var context = canvas.getContext("2d");

const game = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];
var player = 0;
function gameState () {
  if(game[0][0]==game[1,1]==game[2,2]){
    return game[0][0]==0 ? 0 : 1;
  }
  else if(game[0][2]==game[1,1]==game[2,0]){;
    return game[0][2]==0 ? 0 : 1;
  }
  else if(()=>{

  })
  return null;
}
function tic (pos) {
  //var {x,y} = pos;
  player = 1;
  return gameState();
}
function tac (pos) {
  player = 0;
  return gameState();
}
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
  };
}
canvas.addEventListener("click",(evt)=>{
    var pos = getMousePos(canvas,evt);
    var winner = null
    winner = player==0 ? tic(pos) : tac(pos);
    console.log(player);
    if(winner){
      gameStateDisplay.innerHTML = `${game[0][0]==0 ? "Player 1" : "Player 2"} Wins!`
    }
});
buttonC.addEventListener("click",() => {
  context.clearRect(0,0,canvas.width,canvas.height);
  for(let i=0;i<game.length; i++){
    for(let j = 0; j < game.length; j++) {
      game[i,j]=null;
    }
  }
  player=0;
});