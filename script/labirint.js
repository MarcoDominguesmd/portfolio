const man = document.getElementById('two');
var topMan = 15;
var leftMan = 15;

const left0 = 0;
const left1a = 40;
const left1b = 55;

const left2a = 95;
const left2b = 110;

const left3a = 145;
const left3b = 165;

const left4a = 200;
const left4b = 220;

const left5a = 260;
const left5b = 275;

const left6a = 315;
const left6b = 330;

const left7a = 370;
const left7b = 390;

const left8a = 425;
const left8b = 445;
const left9 = 485;

const top0 = 0;
const top1a = 40;
const top1b = 55;

const top2a = 95;
const top2b = 110;

const top3a = 145;
const top3b = 165;

const top4a = 200;
const top4b = 220;

const top5a = 260;
const top5b = 275;

const top6a = 315;
const top6b = 330;

const top7a = 370;
const top7b = 390;

const top8a = 425;
const top8b = 445;
const top9 = 485;



document.addEventListener('keydown', function(e){
  //go down
  if(e.keyCode === 40 || e.keyCode === 83){
    e.preventDefault();
    topMan = topMan + 5;
    //fisrt line
    if(topMan > top1a && topMan < top1b && leftMan > left1a && leftMan < left3b){
      topMan= topMan-5;
    }
    if(topMan > top1a && topMan < top1b && leftMan > left5a && leftMan < left8b){
      topMan= topMan-5;
    }
    //second line
    if(topMan > top2a && topMan < top2b && leftMan > left1a && leftMan < left3b){
      topMan= topMan-5;
    }
    if(topMan > top2a && topMan < top2b && leftMan > left5a && leftMan < left7b){
      topMan= topMan-5;
    }
    // third line
    if(topMan > top3a && topMan < top3b && leftMan > left3a && leftMan < left4b){
      topMan= topMan-5;
    }
    if(topMan > top3a && topMan < top3b && leftMan > left6a && leftMan <= left9){
      topMan= topMan-5;
    }
    //fourth line
    if(topMan > top4a && topMan < top4b && leftMan >= left0 && leftMan < left2b){
      topMan= topMan-5;
    }
    if(topMan > top4a && topMan < top4b && leftMan > left3a && leftMan < left5b){
      topMan= topMan-5;
    }
    if(topMan > top4a && topMan < top4b && leftMan > left6a && leftMan <= left9){
      topMan= topMan-5;
    }
    //fifth line
    if(topMan > top5a && topMan < top5b && leftMan > left1a && leftMan < left5b){
      topMan= topMan-5;
    }
    //sixth line
    if(topMan > top6a && topMan < top6b && leftMan >= left0 && leftMan < left4b){
      topMan= topMan-5;
    }
    if(topMan > top6a && topMan < top6b && leftMan > left5a && leftMan < left7b){
      topMan= topMan-5;
    }
    //seventh line
    if(topMan > top7a && topMan < top7b && leftMan > left4a && leftMan < left8b){
      topMan= topMan-5;
    }
    //eight line
    if(topMan > top8a && topMan < top8b && leftMan >= left0 && leftMan < left2b){
      topMan= topMan-5;
    }
    if(topMan > top8a && topMan < top8b && leftMan > left3a && leftMan <= left9){
      topMan= topMan-5;
    }

    if(topMan > top9){
      topMan= topMan-5;
    }
  }


  //go up
  else if(e.keyCode === 38 || e.keyCode === 87){
    e.preventDefault();
    topMan = topMan - 5;
    //fisrt line
    if(topMan > top1a && topMan < top1b && leftMan > left1a && leftMan < left3b){
      topMan= topMan+5;
    }
    if(topMan > top1a && topMan < top1b && leftMan > left5a && leftMan < left8b){
      topMan= topMan+5;
    }
    //second line
    if(topMan > top2a && topMan < top2b && leftMan > left1a && leftMan < left3b){
      topMan= topMan+5;
    }
    if(topMan > top2a && topMan < top2b && leftMan > left5a && leftMan < left7b){
      topMan= topMan+5;
    }
    // third line
    if(topMan > top3a && topMan < top3b && leftMan > left3a && leftMan < left4b){
      topMan= topMan+5;
    }
    if(topMan > top3a && topMan < top3b && leftMan > left6a && leftMan <= left9){
      topMan= topMan+5;
    }
    //fourth line
    if(topMan > top4a && topMan < top4b && leftMan >= left0 && leftMan < left2b){
      topMan= topMan+5;
    }
    if(topMan > top4a && topMan < top4b && leftMan > left3a && leftMan < left5b){
      topMan= topMan+5;
    }
    if(topMan > top4a && topMan < top4b && leftMan > left6a && leftMan <= left9){
      topMan= topMan+5;
    }
    //fifth line
    if(topMan > top5a && topMan < top5b && leftMan > left1a && leftMan < left5b){
      topMan= topMan+5;
    }
    //sixth line
    if(topMan > top6a && topMan < top6b && leftMan >= left0 && leftMan < left4b){
      topMan= topMan+5;
    }
    if(topMan > top6a && topMan < top6b && leftMan > left5a && leftMan < left7b){
      topMan= topMan+5;
    }
    //seventh line
    if(topMan > top7a && topMan < top7b && leftMan > left4a && leftMan < left8b){
      topMan= topMan+5;
    }
    //eight line
    if(topMan > top8a && topMan < top8b && leftMan >= left0 && leftMan < left2b){
      topMan= topMan+5;
    }
    if(topMan > top8a && topMan < top8b && leftMan > left3a && leftMan <= left9){
      topMan= topMan+5;
    }

    if(topMan < top0){
      topMan= topMan+5;
    }
  }




  //go right
  else if(e.keyCode === 39 || e.keyCode === 68){
    e.preventDefault();
    leftMan = leftMan + 5;
    //fisrt column
    if(leftMan > left1a && leftMan < left1b && topMan > top1a && topMan < top3b){
      leftMan= leftMan-5;
    }
    if(leftMan > left1a && leftMan < left1b && topMan > top6a && topMan < top7b){
      leftMan= leftMan-5;
    }
    //second column
    if(leftMan > left2a && leftMan < left2b && topMan > top2a && topMan < top4b){
      leftMan= leftMan-5;
    }
    if(leftMan > left2a && leftMan < left2b && topMan > top5a && topMan < top7b){
      leftMan= leftMan-5;
    }
    //third column
    if(leftMan > left3a && leftMan < left3b && topMan > top7a && topMan < top8b){
      leftMan= leftMan-5;
    }
    //fourth column
    if(leftMan > left4a && leftMan < left4b && topMan >= top0 && topMan < top3b){
      leftMan= leftMan-5;
    }
    //fifth column
    if(leftMan > left5a && leftMan < left5b && topMan > top2a && topMan < top7b){
      leftMan= leftMan-5;
    }
    //sixth column
    if(leftMan > left6a && leftMan < left6b && topMan > top4a && topMan < top5b){
      leftMan= leftMan-5;
    }
    //seventh column
    if(leftMan > left7a && leftMan < left7b && topMan > top5a && topMan < top6b){
      leftMan= leftMan-5;
    }
    //eigth column
    if(leftMan > left8a && leftMan < left8b && topMan > top1a && topMan < top3b){
      leftMan= leftMan-5;
    }
    if(leftMan > left8a && leftMan < left8b && topMan > top5a && topMan < top7b){
      leftMan= leftMan-5;
    }
    if(leftMan > left9){
      leftMan= leftMan-5;
    }
  }



  //go left
  else if(e.keyCode === 37 || e.keyCode === 65){
    e.preventDefault();
    leftMan = leftMan - 5;
    //fisrt column
    if(leftMan > left1a && leftMan < left1b && topMan > top1a && topMan < top3b){
      leftMan= leftMan+5;
    }
    if(leftMan > left1a && leftMan < left1b && topMan > top6a && topMan < top7b){
      leftMan= leftMan+5;
    }
    //second column
    if(leftMan > left2a && leftMan < left2b && topMan > top2a && topMan < top4b){
      leftMan= leftMan+5;
    }
    if(leftMan > left2a && leftMan < left2b && topMan > top5a && topMan < top7b){
      leftMan= leftMan+5;
    }
    //third column
    if(leftMan > left3a && leftMan < left3b && topMan > top7a && topMan < top8b){
      leftMan= leftMan+5;
    }
    //fourth column
    if(leftMan > left4a && leftMan < left4b && topMan >= top0 && topMan < top3b){
      leftMan= leftMan+5;
    }
    //fifth column
    if(leftMan > left5a && leftMan < left5b && topMan > top2a && topMan < top7b){
      leftMan= leftMan+5;
    }
    //sixth column
    if(leftMan > left6a && leftMan < left6b && topMan > top4a && topMan < top5b){
      leftMan= leftMan+5;
    }
    //seventh column
    if(leftMan > left7a && leftMan < left7b && topMan > top5a && topMan < top6b){
      leftMan= leftMan+5;
    }
    //eigth column
    if(leftMan > left8a && leftMan < left8b && topMan > top1a && topMan < top3b){
      leftMan= leftMan+5;
    }
    if(leftMan > left8a && leftMan < left8b && topMan > top5a && topMan < top7b){
      leftMan= leftMan+5;
    }


    if(leftMan < left0){
      leftMan = leftMan+5;
    }
  }
  if(leftMan> left8b && topMan > top8b){
    alert('You Won!');
    topMan= 110;
    leftMan= 70;
  }


  man.style.top = topMan + 'px';
  man.style.left = leftMan + 'px';
  // console.log('top is' + topMan);
  // console.log('left is' + leftMan);
})
const lantern = document.getElementById('lantern');
lantern.addEventListener('click', function(){
  var cover = document.getElementById('cover');
  cover.style.background = 'radial-gradient(circle, rgba(25,4,68,0) 10%, rgba(107,19,179,1) 15%, rgba(0,61,255,1) 98%)';
  console.log('arroz');
  setTimeout(function(){
    cover.style.background = 'radial-gradient(circle, rgba(25,4,68,0) 4%, rgba(107,19,179,1) 10%, rgba(0,61,255,1) 98%)';
  }, 5000);
  this.style.display = 'none';
})