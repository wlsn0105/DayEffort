1. 
변수 var은 함수에서는 밖와 안이 구분되지만, 중괄호 블럭에서는 둘 다 가져올 수 있다.
const를 처음에 사용하고 나중에 얘가 변할 것 같으면 let을 사용

2. 
Dom 스크립트는 선택해서 조정할 수 있는 것임

3. 
document.querySelector('');
괄호 안에는 css 속성 값을 넣는다 생각하면 됨

4. 
char.setAttribute('data-id', 233);
// 변수명에 하면 data-id 값을 설정해줌
// id 말고 index, role 등 다른 것도 있음

char.getAttribute('data-id', 233);
// 변수명에 하면 설정한 data-id 값을 출력함

5. 
const 변수명 = document.createElement('');
괄호 안에 태그를 넣으면 태그를 만듦

변수명.innerHTML = '넣고 싶은 것'
넣은게 적용됨

적용할 변수명.appendChild(추가할 변수명)
적용할 변수명에 자식으로 변수가 추가됨

removeChild(삭제할 태그)
삭제

변수명.classList.add('class이름');
css 적용해줌

변수명.classList.toggle(css값)
토글처럼 꺼졌다 켜졌다 함