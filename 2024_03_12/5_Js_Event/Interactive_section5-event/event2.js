(function () {
    const characters = document.querySelector('.characters');

    function clickHandler(e) {
        console.log(this)
        console.log(e)
        console.log(e.currentTarget)
        console.log(e.target)
    }
    characters.addEventListener('click', clickHandler)
})();