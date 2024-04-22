import "./scroll-timeline.js"

const progress = document.querySelector('.progress');
const scrollBox = document.querySelector('.scroll-box');
const targetImages = document.querySelectorAll('.target-image');

progress.animate(
    [
        { transform: "scaleX(0)" },
        { transform: "scaleX(1)" }
    ],
    {
        timeline: new ScrollTimeline({
            scrollOffsets: [
                // body 전체 높이에 대한 게이지 바
                { target: document.body, edge: 'start', threshold: 1 },
                { target: document.body, edge: 'end', threshold: 1 },

                // scrollBox에 대한 게이지 바
                // {target: scrollBox, edge: 'start', threshold: 1},
                // {target: scrollBox, edge: 'end', threshold: 1},
            ]
        })
    }
);

targetImages.forEach(image => {
    const imageTop = image.offsetTop;
    const imageHeight = image.offsetHeight;
    console.log(imageTop)
    console.log(imageHeight)

    const offset1 = imageTop + imageHeight - window.innerHeight;
    const offset2 = imageTop;

    // 내가 짠 이미지 등장하자마자 opacity 변경
    const offset3 = imageTop - window.innerHeight + 200;
    const offset4 = imageTop + imageHeight - window.innerHeight + 200;
    
    // 스크롤 시 이미지 opacity 변경
    image.animate(
        [
            { opacity: 0 },
            { opacity: 1 },
        ],
        {
            timeline: new ScrollTimeline({
                scrollOffsets: [
                    new CSSUnitValue(offset3, 'px'),
                    new CSSUnitValue(offset4, 'px'),
                ]
            })
        }
    )
})

