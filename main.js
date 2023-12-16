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
const drawings = {
  0:(x,y)=>{
  context.clearRect(x-100,y-100,100,100);
  context.beginPath()
  context.moveTo(x-75,y-75);
  context.lineTo(x-25,y-25);
  context.stroke();
  context.moveTo(x-75,y-25);
  context.lineTo(x-25,y-75);
  context.stroke();
},
1:(x,y)=>{
  context.clearRect(x-100,y-100,100,100);
  context.beginPath();
  context.arc(x-50,y-50,30,0,2*Math.PI);
  context.stroke()
}}
function ticTac (pos) {
  var {x,y} = pos;
  if(gameState()!=null){
    return null;
  }
  if(x<101 && y<101){
    drawings[player](100,100);
    game[0][0]=player;
  }
  else if(x<201 && y<101){
    drawings[player](200,100);
    game[0][1]=player;
  }
  else if(x<301 && y<101){
    drawings[player](300,100);
    game[0][2]=player;
  }
  else if(x<101 && y<201){
    drawings[player](100,200);
    game[1][0]=player;
  }
  else if(x<201 && y<201){
    drawings[player](200,200);
    game[1][1]=player;
  }
  else if(x<301 && y<201){
    drawings[player](300,200);
    game[1][2]=player;
  }
  else if(x<101 && y<301){
    drawings[player](100,300);
    game[2][0]=player;
  }
  else if(x<201 && y<301){
    drawings[player](200,300);
    game[2][1]=player;
  }
  else if(x<301 && y<301){
    drawings[player](300,300);
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
  var winner = ticTac(pos);
  /*ASCII.innerHTML = 
  `
  ${game[0][0]==0?'x':game[0][0]==null?'z':'o'}|${game[0][1]==0?'x':game[0][1]==null?'z':'o'}|${game[0][2]==0?'x':game[0][2]==null?'z':'o'}<br>
  ${game[1][0]==0?'x':game[1][0]==null?'z':'o'}|${game[1][1]==0?'x':game[1][1]==null?'z':'o'}|${game[1][2]==0?'x':game[1][2]==null?'z':'o'}<br>
  ${game[2][0]==0?'x':game[2][0]==null?'z':'o'}|${game[2][1]==0?'x':game[2][1]==null?'z':'o'}|${game[2][2]==0?'x':game[2][2]==null?'z':'o'}
  `*/
  if(winner!=null){
    gameStateDisplay.innerHTML = `${player==0 ? "Player 1" : "Player 2"} Wins!`
  }else{
    player=player==0 ? 1 : 0;
  }
});
buttonC.addEventListener("click",() => {
  location.reload();
});