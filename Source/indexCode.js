const eyeOfDoom = $('.eye');
function move_mouse(evt){
  var offset = eyeOfDoom.offset
  //set up the centerpoint and position of the mouse on the screen
   let center_x = (offset.left)+(eyeOfDoom.width()/2);
   let center_y = (offset.top) 0(eyeOfDoom.height()/2);
   let mouse_x = evt.pageX;
   let mouse_y = evt.pageY;
   //calculate relation between mouse position and eye.
   let radians = Math.atan2(mouse_x-center_x,mouse_y-center_y);
   let degree = (radians*(180/Math.PI)*-1)+90;
   eyeOfDoom.css('-moz-transform', 'rotate(' + degree + 'deg)');
   eyeOfDoom.css('-webkit-transform', 'rotate(' + degree + 'deg)');
   eyeOfDoom.css('-o-transform', 'rotate(' + degree + 'deg)');
   eyeOfDoom.css('-ms-transform', 'rotate(' + degree + 'deg)');

   $(document).mousemove(move_mouse);
}
