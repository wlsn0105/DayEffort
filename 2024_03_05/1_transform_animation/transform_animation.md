1. transform-origin: left top;
    // 기준점을 정함
    transform-origin: 0% 0%;
    // x축, y축을 숫자로 지정할 수 있음
    transform: scale(2, 0.8) rotate(30deg) translate(10px, -50px) skew(20deg, 40deg);
    // 한 번에 효과를 다 적용하려면 한줄에 다 작성

2. keyframe은 0%애서 100%까지에서 구간구간 효과를 주고 싶을 때 transform을 적용
선언하듯이 작성하고 클래스에 animation속성을 선언한 값으로 적용
@keyframe 이름 {
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(100px, 0);
    }
    100% {
        transform: translate(200px, 100px);
    }
}
.box {
    animtation: 이름 몇초 속도 반복횟수 방향횟수;
    animation: sample 2s ease infinite alternate-reverse;
    //infinite 대신 forwards를 넣으면 초기 상태로 돌아가지 않고 멈춤
}

animation-play-state: paused;
애니메이션 상태를 멈춤, 보통 hover로 많이 사용

3. background: url('./Interactive_section1-transform/images/sprite_spaceship.png') no-repeat 0 0 / auto 150px;
0 0 은 배경의 초기위치값

4. animation: spaceship-ani 1.25s infinite steps(17);
넓이가 긴 것을 그냥 흘러가는게 아니라 단계를 밟으면서 하기 위해서 steps()를 사용