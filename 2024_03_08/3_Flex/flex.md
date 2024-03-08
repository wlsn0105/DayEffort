1. flex-direction은 정렬 축의 방향

2. justify-content는 축의 방향으로 정렬을 함
justify-content: space-between; 끝을 벽으로 붙여주고 중간 중간 거리를 비례로 정렬하는데 자주 쓰임
justify-content: space-around; 객체의 둘레에 공간을 줌

3. align-items는 justify-content랑 축이 반대

4. 자식 요소에 flex-grow: 1;를 넣으면 폭을 똑같이 하는게 아니라
콘텐츠가 들어가고 남은 공간의 비율을 나눠 갖는 것

5. flex-basis: 0;을 해주면 블럭의 크기를 똑같은 비율로 설정해줌

6. 보통 flex 속성들을 따로 따로 설정하지 않고 한번에 flex: 1;로 설정함