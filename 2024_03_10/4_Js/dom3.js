console.log('**************************')

const pElem = document.createElement('p');
console.log(pElem);
pElem.innerHTML = '<a href="#">안녕</a>???'
console.log(pElem)

const charactersElem = document.querySelector('.characters');
charactersElem.appendChild(pElem)

charactersElem.removeChild(document.querySelector('.b'))

console.log('**************************')

const ilbuni1 = document.querySelector('.ilbuni');
ilbuni1.classList.add('special')

const ilbuni3 = document.querySelector('.ilbuni');
ilbuni3.classList.remove('ilbuni')
ilbuni3.classList.toggle('ilbuni')
ilbuni3.classList.toggle('ilbuni')
ilbuni3.classList.toggle('ilbuni')
ilbuni3.classList.toggle('special')
ilbuni3.classList.toggle('special')