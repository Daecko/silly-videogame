/** @type {HTMLCanvasElement} */ //This is JSDoc @type - remember me.
var canvas = document.getElementById("canvas");
var ASCII = document.getElementById("ASCII");
var buttonC = document.getElementById("clear");
var gameStateDisplay = document.getElementById("gameStateD");
//Thanks to JSDoc @type now canvas methods appear in Intellisense.
var context = canvas.getContext("2d")
const game = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];
var player = 0; //I should just use this to say which player won.
function gameState () {
  if(game[0][0]!=null&&(game[0][0]==game[1][1]&&game[0][0]==game[2][2])){
    //return game[0][0]==0 ? 0 : 1; Instead of this
    console.log("Win by \\");
    return player;
  }
  else if(game[0][2]!=null&&(game[0][2]==game[1][1]&&game[0][0]==game[2][0])){
    console.log("Win by /");
    return player;
  }
  else if(
    (game[0][0]!=null&&game[0][0]==game[0][1]&&game[0][0]==game[0][2])||
    (game[1][0]!=null&&game[1][0]==game[1][1]&&game[1][0]==game[1][2])||
    (game[2][0]!=null&&game[2][0]==game[2][1]&&game[2][0]==game[2][2])
  ){
    console.log("Win by ---");
    return player;
  }
  else if(
    (game[0][0]!=null&&game[0][0]==game[1][0]&&game[0][0]==game[2][0])||
    (game[0][1]!=null&&game[0][1]==game[1][1]&&game[0][1]==game[2][1])||
    (game[0][2]!=null&&game[0][2]==game[1][2]&&game[0][2]==game[2][2])
  ){
    console.log("Win by |");
    return player;
  }
  //console.log(`${game[0][0]==game[1][1]} and ${game[1][1]} and ${game[2][2]}`); //I separated the [] using commas. + 2 hours
  return null;
}
function tic (pos) {
  var {x,y} = pos;
  if(x<101 && y<101){
    game[0][0]=player;
  }
  else if(x<201 && y<101){
    game[0][1]=player;
  }
  else if(x<301 && y<101){
    game[0][2]=player;
  }
  else if(x<101 && y<201){
    game[1][0]=player;
  }
  else if(x<201 && y<201){
    game[1][1]=player;
  }
  else if(x<301 && y<201){
    game[1][2]=player;
  }
  else if(x<101 && y<301){
    game[2][0]=player;
  }
  else if(x<201 && y<301){
    game[2][1]=player;
  }
  else if(x<301 && y<301){
    game[2][2]=player;
  }
  return gameState();
}
function tac (pos) {
  var {x,y} = pos;
  if(x<101 && y<101){
    game[0][0]=player;
  }
  else if(x<201 && y<101){
    game[0][1]=player;
  }
  else if(x<301 && y<101){
    game[0][2]=player;
  }
  else if(x<101 && y<201){
    game[1][0]=player;
  }
  else if(x<201 && y<201){
    game[1][1]=player;
  }
  else if(x<301 && y<201){
    game[1][2]=player;
  }
  else if(x<101 && y<301){
    game[2][0]=player;
  }
  else if(x<201 && y<301){
    game[2][1]=player;
  }
  else if(x<301 && y<301){
    game[2][2]=player;
  }
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
  ASCII.innerHTML = 
  `
  ${game[0][0]}|${game[0][1]}|${game[0][2]}<br>
  --------<br>
  ${game[1][0]}|${game[1][1]}|${game[1][2]}<br>
  ${game[2][0]}|${game[2][1]}|${game[2][2]}
  `
  if(winner!=null){
    gameStateDisplay.innerHTML = `${player==0 ? "Player 1" : "Player 2"} Wins!`
  }
  player=player==0 ? 1 : 0;
});
buttonC.addEventListener("click",() => {
  location.reload();
});