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
const gallery = document.querySelector('#gallery');
const buttonDiv = document.querySelector('#gallery-btn-holder');
const galleryButton = document.querySelector('#gallery-btn-holder>button');
const galleryContainer = document.querySelector('#gallery-container');
const options = {
  itemSelector: '.gallery-grid-item',
  percentPosition: true,
  columnWidth: '.gallery-grid-sizer',
  gutter: 44,
}

function initGallery(){
  let gallery = document.querySelector('#gallery');
  let msnry = new Masonry( gallery, options);
  setTimeout(function(){msnry.layout()},200);
  return {gallery,msnry}
}

function loadMore(firstID,lastID){
  gallery.remove();
  buttonDiv.remove();
  for(let i = firstID; i < lastID+1; i++){
  let newImg = document.createElement('div');
  newImg.className = 'gallery-grid-item mb-11';
  newImg.innerHTML = `<img src="./media/Photogalery-${i}.png">`
  gallery.appendChild(newImg);
}
  galleryContainer.appendChild(gallery);
  initGallery();

}

let {galeryDom, galeryMsnry } = initGallery();

galleryButton.addEventListener('click',function(){
  loadMore(6,9)
});
