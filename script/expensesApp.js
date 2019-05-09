// APP input/output
const buttonIn = document.getElementById('buttonin');
const inputIn = document.getElementById('inputin');
const pIn = document.getElementById('pin');
const divIn = document.getElementById('divin');
const buttonOut = document.getElementById('buttonout');
const inputOut = document.getElementById('inputout');
const pOut = document.getElementById('pout');
const divOut = document.getElementById('divout');
const hTotal = document.getElementById('htotal');
const incomeUl = document.getElementById('incomeul');
const outcomeUl = document.getElementById('outcomeul');

var createList = function(){
  var evalue = inputIn.value;
  var ovalue = inputOut.value;
  if (Number(evalue) > 0 || Number(ovalue) > 0){
    //create LI element and append value from input field
    const li = document.createElement('li');
    const textList = document.createElement('input');
    const addList = document.createElement('span');
    const deleteBtn = document.createElement('span');
    //add content to elements
    deleteBtn.textContent = 'x';
    if(Number(evalue) > 0){
      addList.textContent = parseFloat(Math.round(evalue * 100) / 100).toFixed(2);
    }else{
      addList.textContent = parseFloat(Math.round(ovalue * 100) / 100).toFixed(2);
    }
    //add classes
    textList.classList.add('textList');
    addList.classList.add('addList');
    deleteBtn.classList.add('delete');
    li.classList.add('li');
    //append to document
    li.appendChild(textList);
    li.appendChild(deleteBtn);
    li.appendChild(addList);
    if(Number(evalue) > 0){
      incomeUl.appendChild(li);
    }else{
      outcomeUl.appendChild(li);
    }
  }
  else{
    inputIn.value = '';
    inputOut.value = '';
    alert('Please input a positive value')
  }
};


// move bars
var bars = function(){
  if( Number(pIn.innerHTML) <= 780 && Number(pOut.innerHTML)<= 780){
    divOut.style.width = Number(pOut.innerHTML)/50 + 'em';
    divIn.style.width = Number(pIn.innerHTML)/50 + 'em';
  }
  else{
    if(Number(pIn.innerHTML) >= Number(pOut.innerHTML)){
      divIn.style.width = 15.65 + 'em';
      divOut.style.width = (Number(pOut.innerHTML) * 15.65)/Number(pIn.innerHTML) + 'em';
    }
    else{
      divOut.style.width = 15.65 + 'em';
      divIn.style.width = (Number(pIn.innerHTML) * 15.65)/Number(pOut.innerHTML) + 'em';
    }
  }
}

// main funtion
var inoutcome = function(){
  createList();
  var totalIn= Number(inputIn.value) + Number(pIn.innerHTML);
  var totalOut= Number(inputOut.value) + Number(pOut.innerHTML);
  pOut.innerHTML =  parseFloat(Math.round(totalOut * 100) / 100).toFixed(2);
  pIn.innerHTML =  parseFloat(Math.round(totalIn * 100) / 100).toFixed(2);
  hTotal.innerHTML = Number(pIn.innerHTML) - Number(pOut.innerHTML);
  document.getElementById('spantotalin').innerHTML = pIn.innerHTML;
  document.getElementById('spantotalout').innerHTML = pOut.innerHTML;
  inputIn.value = '';
  inputOut.value = '';
    bars();
}

//cal function w button
buttonIn.onclick = inoutcome;
buttonOut.onclick = inoutcome;
//press enter to activate button
inputIn.addEventListener("keyup", function(event){
  event.preventDefault();
  if(event.keyCode === 13){
    buttonIn.click();
  }
});
inputOut.addEventListener("keyup", function(event){
  event.preventDefault();
  if(event.keyCode === 13){
    buttonOut.click();
  }
});



//delete button
incomeUl.addEventListener('click', function(e){
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    var total = pIn.textContent;
    const val = li.childNodes[2].textContent;
    total = Number(total) - Number(val);
    li.parentNode.removeChild(li);
    document.getElementById('pin').innerHTML = total;
    hTotal.innerHTML = Number(pIn.innerHTML) - Number(pOut.innerHTML);
    document.getElementById('spantotalin').innerHTML = Number(pIn.innerHTML);
    bars();
  }
});

outcomeUl.addEventListener('click', function(e){
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    var total = pOut.textContent;
    const val = li.childNodes[2].textContent;
    total = Number(total) - Number(val);
    li.parentNode.removeChild(li);
    document.getElementById('pout').innerHTML = total;
    hTotal.innerHTML = Number(pIn.innerHTML) - Number(pOut.innerHTML);
    document.getElementById('spantotalout').innerHTML = Number(pOut.innerHTML);
    bars();
  }
});



// CHECKBOX hide list
const hideIn = document.querySelector('#hidein');
const hideOut = document.querySelector('#hideout');


document.getElementById('expenses-app').addEventListener('change', function(){

  //Income
  var childListIn = incomeUl.childNodes;
  var listIn = document.querySelector('#listin');
  if(childListIn.length < 2){
    hideIn.checked = false;
  };
  if(hideIn.checked){
    listIn.style.display = "block"
  }
  else{
    listIn.style.display = "none";
  }

  //outcome
  var childListOut = outcomeUl.childNodes;
  var listOut = document.querySelector('#listout');
  if(childListOut.length < 2){
    hideOut.checked = false;
  };
  if(hideOut.checked){
    listOut.style.display = "block"
  }
  else{
    listOut.style.display = "none";
  }

})
