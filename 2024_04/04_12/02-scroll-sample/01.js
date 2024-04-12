import './scroll-timeline.js';

const airplane = document.querySelector('.airplane');
const airplaneScrollTimeline = document.querySelector('.airplane-scroll-timeline');

airplane.animate(
    [
        { offsetDistance: '100%'},
        { offsetDistance: '0%'},
    ],
    {
        // 화면을 끝까지 내렸을 때 끝 상태를 유지함
        fill: 'both',
        timeline: new ScrollTimeline({
            scrollOffsets: [
                {target: airplaneScrollTimeline, edge: 'start', threshold: 1},
                {target: airplaneScrollTimeline, edge: 'end', threshold: 1},
            ]
        })
    }
)

const progress = document.querySelector('.progress');

// 비행기의 남은 진행 상태를 progress로 보여줌
progress.animate(
    [
        {transform: 'scaleX(0)'},
        {transform: 'scaleX(1)'},
    ],
    {
        timeline: new ScrollTimeline({
            scrollOffsets: [
                { target: airplaneScrollTimeline, edge: 'start', threshold: 1},
                { target: airplaneScrollTimeline, edge: 'end', threshold: 1},
            ]
        })
    }
)