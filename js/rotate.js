/* https://www.cssscript.com/360-degree-image-viewer-pure-javascript-circlr/ */

var crl = circlr('product-view', {
    scroll: true,
    loader: 'loader'
});
var btn = document.getElementById('btn');
btn.addEventListener('click', function (event) {
    if (crl) {
        if (btn.classList.contains('stop')) {
            crl.stop();
            btn.classList.remove('stop');
            btn.textContent = "Start Auto Rotate";
        } else {
            crl.play();
            btn.classList.add('stop');
            btn.textContent = "Stop Auto Rotate";
        }
    }
});