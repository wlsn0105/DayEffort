const airplane = document.querySelector('.airplane');
const airplaneScrollTimeline = document.querySelector('.airplane-scroll-timeline');

airplane.animate(
  [
	// 비행기가 멈추는 부분은 offset으로 대강 맞춘 것
    { offsetDistance: '100%', offset: 0 },
    { offsetDistance: '47%', offset: 0.4 },
		{ offsetDistance: '47%', offset: 0.58 },
		{ offsetDistance: '0%', offset: 1 },
  ],
  {
    fill: 'both',
    timeline: new ScrollTimeline({
      scrollOffsets: [
        { target: airplaneScrollTimeline, edge: 'start', threshold: 1 },
        { target: airplaneScrollTimeline, edge: 'end', threshold: 1 }
      ]
    })
  }
);

// 스크롤
let prevScrollY = -1; // 처음 스크롤 할 때 오락가락 방지
let scrollFlag;
window.addEventListener('scroll', e => {
	// window.scrollY는 현재 y값
	// console.log(window.scrollY);

	if (scrollFlag) return;

	scrollFlag = true;

	// setTimeout를 설정하지 않으면 스크롤을 내릴 때 너무 많은 로그가 찍힘
	setTimeout(() => {
		scrollFlag = false;

		if (window.scrollY >= prevScrollY) {
			console.log('down');
			airplane.dataset.direction = 'down';
		} else {
			console.log('up');
			airplane.dataset.direction = 'up';
		}

		prevScrollY = window.scrollY;
	}, 100);
});
