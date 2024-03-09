const star = '*********************************************'

const char = document.querySelector('.characters')
console.log(char)
char.setAttribute('data-id', 233);
char.getAttribute('data-id', 233);

console.log(star);

const ilbuni = document.querySelector('.a')
console.log(ilbuni)

const ilbuniGroup = document.querySelectorAll('.ilbuni');
console.log(ilbuniGroup)
console.log(ilbuniGroup[2])

document.querySelector('.ilbuni:nth-child(2)')
document.querySelector('.characters .ilbuni:nth-child(2)')
