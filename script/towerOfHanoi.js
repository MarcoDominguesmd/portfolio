var pieces = document.getElementsByClassName('pieces');
var spaces = document.getElementsByClassName('spaces');

var space1 = document.getElementById('space1');
var space2 = document.getElementById('space2');
var space1 = document.getElementById('space1');

var piece1 = document.getElementById('piece1');
var piece2 = document.getElementById('piece2');
var piece3 = document.getElementById('piece3');
var piece4 = document.getElementById('piece4');
var piece5 = document.getElementById('piece5');

piece1.valor = 1;
piece2.valor = 2;
piece3.valor = 3;
piece4.valor = 4;
piece5.valor = 5;

space1.isFirstSpace = true;
space2.isFirstSpace = false;
space3.isFirstSpace = false;

var tops = '0px';







function dragStart(e) {
  let no = this.parentNode.childNodes.length -1;
  let topPiece = this.parentNode.childNodes[no];
  thePiece = this;
  if (thePiece !== topPiece) {
    e.preventDefault();
  }else {
    setTimeout(() => this.style.display = 'none', 0)
  }
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragDrop(e) {
  let nu = this.childNodes.length-1;
  let newTop = this.childNodes[nu];
  if ( this.childNodes.length == 0) {
    this.append(thePiece);
    if (this.childNodes.length == 1 ) {tops = '125px' };
    if (this.childNodes.length == 2 ) {tops = '95px' };
    if (this.childNodes.length == 3 ) {tops = '65px' };
    if (this.childNodes.length == 4 ) {tops = '35px' };
    if (this.childNodes.length == 5 ) {tops = '5px' };
    thePiece.style.top = tops;
  }else if (thePiece.valor < newTop.valor) {
    this.append(thePiece);
    if (this.childNodes.length == 1 ) {tops = '125px' };
    if (this.childNodes.length == 2 ) {tops = '95px' };
    if (this.childNodes.length == 3 ) {tops = '65px' };
    if (this.childNodes.length == 4 ) {tops = '35px' };
    if (this.childNodes.length == 5 ) {tops = '5px' };
    thePiece.style.top = tops;
  }
  thePiece.style.display = 'block';
  console.log(space2.childNodes.length);
  if(this.isFirstSpace == false && this.childNodes.length == '5' ){
    alert('You won!');
    for (var i = 0; i < spaces.length; i++) {
     spaces[i].isFirstSpace = false;
    }
    this.isFirstSpace = true;
  }
}

for(let i = 0; i < spaces.length; i++) {
  space = spaces[i];
  space.addEventListener('dragover', dragOver);
  space.addEventListener('drop', dragDrop);
  for(let p = 0; p < pieces.length; p++) {
    piece = pieces[p];
    piece.addEventListener('dragstart', dragStart);
    piece1.addEventListener('blur', function(){
      console.log('arros');
    });
  }
}

document.addEventListener('drop', function(){
  thePiece.style.display = 'block';
});
document.addEventListener('dragenter', dragEnter);
document.addEventListener('dragover', dragOver);






// function dragLeave() {
//   // console.log('dragleave');
// }
// function dragEnd() {
//   // console.log('end');
// }
