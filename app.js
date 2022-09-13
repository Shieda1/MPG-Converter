// https://www.omnicalculator.com/conversion/fueld-economy-converter

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const kmplRadio = document.getElementById('kmplRadio');
const l100kmRadio = document.getElementById('l100kmRadio');

let kmpl;
let l100km = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

kmplRadio.addEventListener('click', function() {
  variable1.textContent = 'L/100km';
  l100km = v1;
  result.textContent = '';
});

l100kmRadio.addEventListener('click', function() {
  variable1.textContent = 'kmpl';
  kmpl = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(kmplRadio.checked)
    result.textContent = `kmpl = ${computekmpl().toFixed(5)}`;

  else if(l100kmRadio.checked)
    result.textContent = `L/100km = ${computel100km().toFixed(5)}`;
})

// calculation

function computekmpl() {
  return 100 / Number(l100km.value);
}

function computel100km() {
  return 100 / Number(kmpl.value);
}