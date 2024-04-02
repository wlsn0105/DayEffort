(function () {
    const ilbuniGroup = document.querySelectorAll('.ilbuni');
    console.log(ilbuniGroup)

    function clickHandler() {
        console.log(this);
        console.log(this.parentNode)
        document.querySelector('.stage').removeChild(this);
        // this.parentNode.removeChild(this);
    }

    for (let i = 0; i < ilbuniGroup.length; i++) {
        ilbuniGroup[i].addEventListener('click', clickHandler);
    }
})();
