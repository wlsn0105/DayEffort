window.onscroll = () => {
    const largeBox = document.querySelector('.large-box');
    const viewportHeight = window.innerHeight;
    // window.innerHeight은 브라우저 창의 뷰포트의 높이를 나타냄

    const viewportToParentHeight = largeBox.getBoundingClientRect().top;
    // getBoundingClientRect() 메서드는 해당 요소의 위치 및 크기에 대한 정보를 제공함
    // top 속성은 요소의 상단부터 뷰포트의 맨 위까지의 거리를 나타냄

    const scrollHeight = viewportHeight - viewportToParentHeight;
    // viewportToParentHeight가 viewportHeight가 0이 되면 시작이다.

    const divHeight = largeBox.clientHeight;

    // largeBox의 높이를 용져와서 변수에 저장

    const scrollRate = scrollHeight / divHeight * 100;

    if (scrollHeight / largeBox * 100 < 0) {
        scrollRate = 0;
    }
    else if (largeBox / divHeight * 100 > 100) {
        scrollRate = 100;
    }

    const mediumBox = document.querySelector('.medium-box');
    // medium-box를 선택

    mediumBox.style.transform = `scale(${scrollRate / 100})`;
    // mediumBox의 css 스타일인 transform을  scale을 100으로 나눠서 적용
    console.log(scrollRate);
}