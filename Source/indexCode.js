
let mouseXY = {};
$(document).on("mousemove", function(event){
  mouseXY.X = event.pageX;
  mouseXY.Y = event.pageY;
});

let eye = $(".eye");
let previousXY = {X: null, Y: null};

let eyeInterval = setInterval(function(){

if(previousXY.Y != mouseXY.Y || previousXY.X != mouseXY.X && (previousXY.Y != null || previousXY.X != null)){
  let eyeXY = eye.position();
  console.log(eye.position());
  let diffX = eyeXY.left -mouseXY.X;
  let diffY = eyeXY.top -mouseXY.Y;
  let value = diffY/diffX;

  let atan = Math.atan(value)*180/Math.PI;
  if(diffY>0 && diffX>0){
    atan += 180;
  }
  else if (diffY<0 && diffX>0){
    atan -=180;
  }
  previousXY.X = mouseXY.X;
  previousXY.Y = mouseXY.Y;
  eye.css({transform:"rotate(" + atan+"deg)"});
}
},10);
