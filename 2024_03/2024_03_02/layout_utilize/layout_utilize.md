1. display: flex; 를 주려면 바깥 쪽의 부모 요소에게 줘야 함

2. .item:nth-child(n)은 item의 n번째 요소를 선택하는 것임

3. flex-basis: 200px; 은 정렬된 방향만큼의 크기만큼 늘림
    웹이 줄어들어서 공간이 부족하면 공간이 줄어듬

4. flex-grow: 1; 은 남아있는 공간을 오토레이아웃처럼 크기를 각각 비율만큼 맞춰서 정렬됨
    0이 기본값으로 설정되어 있음
    레이아웃을 짤 때 중요하게 사용되는 기능	

5. flex_shrink: 0; 은 basis와 반대로 웹이 줄어들어서 공간이 부족해도 공간을 유지함
    같은 줄에 한 개는 1을 설정하고 다른 한 개는 2를 설정하면 설정한 값의 비율만큼 줄어듬
    basis, shrink 둘다 레이아웃을 만들 때 많이 사용

6. align-items: center;
    basis로 크기를 정하고 shrink로 고정한다음 center로 많이 사용함
    수직과 관련된 정렬

7. order: n;
    먼저 보여주고 싶은걸 번호 순서대로 입력하면 왼쪽부터 나열함
    order: -1;로 줘서 중간에 있는 걸 맨 앞으로 당길 수도 있음

8. mediaquery는 @media로 시작하고 괄호안에는 조건을 쓴다.
    @media (min-width:500px) {
        body {
            background-color: powderblue;
        }
    }

9. float는 보통 이미지를 많이 띄울 때 사용함
    레이아웃을 구성할 때 flex를 사용하는게 더 좋음

10. column-count: n;
    컬럼의 갯수를 최대 n개만큼 분할해줌

    column-width: 200px;
    컬럼 하나당 200px만큼 화면크기에 맞춰 갯수를 알아서 분할해줌

    column-gap: 20px;
    컬럼의 gap크기를 지정
    
    column-rule-style: solid;
    column-rule-width: 1px;
    column-rule-color: red;
    컬럼의 폭의 선 종류, 색, 크기를 설정할 수 있음

    column-span: all;
    태그에다가 지정해주면 대상은 컬럼에 구애받지 않고 자신의 자리를 찾아감
    
    text-align: justify;
    텍스트를 양끝 정렬해줌
