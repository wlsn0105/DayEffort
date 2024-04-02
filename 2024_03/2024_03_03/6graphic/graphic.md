1. background-image: url('sample.jpg');
    괄호 안에 이미지를 넣어도 되고 주소를 넣어도 됨
    공간에 이미지 배치됨
    배경이 없는 사진을 넣으면 배경색과 같이 넣을 수 있음

    background-repeat: repeat-x; repeat-y; no-repeat;
    작은 사진이 반복 되는데 x축만 반복할지, y축만 반복할지, 반복을 하지 않을지 정함

    background-attachment: fixed;
    스크롤하면 고정된 상태로 화면이 내려간다.
    웹 에이전시에 많이 나오는 화면

    background-size: 500px 100px; contain; cover;
    이미지의 크기를 설정해도 되고,
    사진 자체 사이즈를 다 포함시키는 것도 되고,
    이미지가 짤리더라도 이미지를 다 채울 수 있음

    background-position: center center;
    배경 이미지의 위치를 정할 수 있음

2. filter: grayscale(100%);
    흑백 100% 효과를 줄 수 있음
    다양한 필터 값들이 있음

3. transition: all 1s;
    모든 동작에 대해 1초 동안 변화

    transition-duration: 1s;
    n초 동안에 걸쳐 장면 전환이 일어남

    transition-delay: 0.5s;
    화면 전환이 n초 지연되고 일어남

    transition-timing-function: cubic-bezier(0.68, -0.15, 0.26, 1.55);
    x축, y축이라고 생각하고 속도를 커스터마이징 할 수 있음
    처음 x축, 처음 y축, 나중 x축, 나중 y축 

4. transform은 block레벨이거나 inline-block레벨일 경우에만 적용됨
    transform: scale(0.5, 2);
    크기를 x축, y축만큼 배율을 늘린다.

    transform: rotate(45deg);
    45도 만큼 회전

    transform: skew(45deg, 45deg);
    x축, y축만큼 기울임

    transform: translate(45px);
    x축, y축만큼 이동함
