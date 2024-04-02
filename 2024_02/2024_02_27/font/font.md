1. px vs em vs rem
    단위로 폰트를 설정하면 크기가 고정되지만 em, rem으로 폰트의 크기를 설정하면 페이지의 크기에 따라 가변적으로 변경됨
    보통은 사용자 입장을 생각해서 rem을 많이 사용하는게 좋다.
    html의 기본 픽셀 값의 배수 값이라고 생각하면 됨

2. color
    컬러 값 중 powderblue라는 색이 굉장히 보기 좋은 색 같음

3. text-align: center; vs justify-content: center;
    text-align은 블록 요소 내의 텍스트를 가로 정렬해 가운데 정렬하는데 적용됨
    justify-content는 주로 flexbox 또는 grid 레이아웃을 사용해서 요소들을 가로로 정렬하는데 사용됨

4. font-family
    font가 띄어쓰기가 되어있으면 "font good" 따옴표를 써줘야 함
    Serif는 글꼴의 끝에 장식이 있는 것이고 Sans-serif는 장식이 없는 것
    가변폭은 텍스트마다 폭이 다 다르지만 monospace는 고정폭으로 텍스트마다 폭이 다 같음

5. line-height
    값을 1.2로 주면 폰트 사이즈의 1.2배만큼 간격이 떨어지는 것
    단위를 px을 쓰면 고정이 되기 때문에 굉장히 부자연스러워짐
    
6. font 하나로 값을 사용할 때는 
    font: weight size/height family; 순으로 사용
    
7. 구글 폰트를 사용하면 괜찮은게 많음
