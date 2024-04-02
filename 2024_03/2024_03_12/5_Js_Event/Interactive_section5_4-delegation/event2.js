// const btns = document.querySelectorAll('.menu-button');

// function clickHandler() {
//     console.log(this)
// }

// for (let i = 0; i < btns.length; i++){
//     btns[i].addEventListener('click', clickHandler)
// }

const menu = document.querySelector('.menu');

function clickHandler(e) {
    console.log(this)
}
menu.addEventListener('click', clickHandler)
