(function () {
    const stage = document.querySelector('.stage');

    function clickHandler(e) {
        console.log(e.target);
        if (e.target.classList.contains('ilbuni')) {
            stage.removeChild(e.target)    
        }
    }

    stage.addEventListener('click', clickHandler)
})();
