/** @type {HTMLCanvasElement} */ //This is JSDoc @type - remember me.
var canvas = document.getElementById("canvas");
//Thanks to JSDoc @type now canvas methods appear in Intellisense.
var context = canvas.getContext("2d");

const square = 100;
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
  };
}
canvas.addEventListener("click",(evt)=>{
    var pos = getMousePos(canvas,evt);
    context.fillStyle = "green";
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillRect(pos.x-square/2,pos.y-square/2,square,square);
});