1. 
변수명.addEventListener('click', () => {
    변수명.classList.add('.special')
})
// 클릭시 이벤트를 생성시키는 것

2. 
window.addEventListener('DOMContentLoaded', () => {

})
// 그냥 'load'를 사용하면 모든 것이 load될 때까지 기다려야 하지만 DOMContentLoaded를 사용하면 필요한 것이 로드 되면 바로 됨

3. 
(function() {

})();
전역변수가 아니라 따로 함수 안에만 선언하려면 함수 안에 넣고 바로 뒤에 실행시켜주면 됨();
그리고 함수 자체를 괄호로 묶어줘야 함

4. 
console.log(this)
// this는 클릭된 것을 말함
console.log(e)
// 내가 클릭한 곳의 위치 등을 출력함
console.log(e.currentTarget)
// this와 같은 기능을 함
console.log(e.target)
// this와 달리 내가 클릭한 곳의 객체를 출력함

