// window.addEventListener('load', () => {
window.addEventListener('DOMContentLoaded', () => {
    const ilbuni = document.querySelector('.ilbuni:nth-child(3)');

    function clickInbuniHandler() {
        ilbuni.classList.toggle('special');
    }
    ilbuni.addEventListener('click', clickInbuniHandler)
})

console.log('************************')

    (function () {
        const ilbuni2 = document.querySelector('.ilbuni.c');

        function clickInbuniHandler2() {
            ilbuni2.classList.toggle('special');
        }
        ilbuni2.addEventListener('click', clickInbuniHandler2)
    })();
