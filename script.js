//slider
const slider = document.querySelector('.slider');
const arrowLeft = document.querySelector('.slider-left-arrow');
const arrowRight = document.querySelector('.slider-right-arrow');
const frames = [... document.querySelectorAll('.frame')];
const maxFrame = frames.length-1;
let currentFrame = 0;
let interval = setInterval(forward,8000);

function forward (){
  frames[currentFrame].classList.add('hidden');
  if(currentFrame == maxFrame){
    currentFrame = 0;
  }
  else{
    currentFrame++;
  }
  frames[currentFrame].classList.remove('hidden');
  clearInterval(interval);
}
function backward (){
  frames[currentFrame].classList.add('hidden');
  if(currentFrame == 0){
    currentFrame = maxFrame;
  }
  else{
    currentFrame--;
  }
  frames[currentFrame].classList.remove('hidden');
  clearInterval(interval);
}

arrowRight.addEventListener('click',forward);
arrowLeft.addEventListener('click',backward);



//mansonry
var elem = document.querySelector('#gallery');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.gallery-grid-item',
  columnWidth: 450,
  horizontalOrder: true,
  gutter: 45
});