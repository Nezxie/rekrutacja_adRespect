var elem = document.querySelector('#gallery');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.gallery-grid-item',
  columnWidth: 450,
  horizontalOrder: true,
  gutter: 45
});