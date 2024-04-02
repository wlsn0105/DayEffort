export default function Star(number, x, y, scale) {
    // element에 div추가
    this.element = document.createElement('div');

    // element에 star classList추가
    this.element.classList.add('star');

    // element의 텍스트?값은 number
    this.element.innerHTML = number;

    //element의 css
    //element.style.cssText = `left: ${x}px; top: ${y}px;`
    
    // element.style.left = `${x}px`
    // element.style.top = `${y}px`
    // element.style.transform = `scale(${scale})`;

    // body에 element를 추가
    document.body.append(this.element);

}

// export default class Star {
//     constructor(number) {
//         const element = document.createElement('div');
//         element.classList.add('star');
//         element.innerHTML = number;
//         document.body.append(element);
//     }
// }