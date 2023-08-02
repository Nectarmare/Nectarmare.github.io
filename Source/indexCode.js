
let mouseXY = {};
$(document).on("mousemove", function(event){
  mouseXY.X = event.pageX;
  mouseXY.Y = event.pageY;
});

let eye = $(".eye");
let previousXY = {X: null, Y: null};

let eyeInterval = setInterval(function(event){

if(previousXY.Y != mouseXY.Y || previousXY.X != mouseXY.X && (previousXY.Y != null || previousXY.X != null)){
  let offset = eye.offset();
  let width = eye.width();
  let height = eye.height();

  let centerX  = offset.left+width/2;
  let centerY = offset.top + height/2;

  let radians = Math.atan2(mouseXY.X-centerX,mouseXY.Y -centerY);

  var degree = (radians*(180/Math.PI)*-1)+180;
  eye.css({'-webkit-transform' : 'rotate('+ degree +'deg)',
               '-moz-transform' : 'rotate('+ degree +'deg)',
               '-ms-transform' : 'rotate('+ degree +'deg)',
               'transform' : 'rotate('+ degree +'deg)'});
}
},10);
