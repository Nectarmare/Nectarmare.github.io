
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




const images = [...document.querySelectorAll('.screenshot')];
const popup = document.querySelector('.popup');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
let index = 0; // will track our current image;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        
        updateImage(i);
         popup.classList.toggle('active').delay( 800 );
       
    })
})

const updateImage = (i) => {
    let path = `https://github.com/Nectarmare/Nectarmare.github.io/blob/main/Graphics/${i+1}.png?raw=true`;
    largeImage.src = path;
   
    
}
popup.addEventListener('click', () => {
    popup.classList.toggle('active');
    largeImage.src= null;
})
