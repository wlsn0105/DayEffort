import "./scroll-timeline.js"

const progress = document.querySelector('.progress');
const scrollBox = document.querySelector('.scroll-box');

progress.animate(
    [
        { transform: "scaleX(0)" },
        { transform: "scaleX(1)" }
    ],
    {
        timeline: new ScrollTimeline({
            scrollOffsets: [
                // body 전체 높이에 대한 게이지 바
                {target: document.body, edge: 'start', threshold: 1},
                {target: document.body, edge: 'end', threshold: 1},

                // scrollBox에 대한 게이지 바
                // {target: scrollBox, edge: 'start', threshold: 1},
                // {target: scrollBox, edge: 'end', threshold: 1},
            ]
        })
    }
)