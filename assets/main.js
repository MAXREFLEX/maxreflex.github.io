[].forEach.call(document.querySelectorAll('[data-href]'), function (img) {
    img.setAttribute('href', img.getAttribute('data-href'));
    img.onload = function () {
        img.removeAttribute('data-href');
        lol();
    };
});

function lol() {
    [].forEach.call(document.querySelectorAll('[data-src]'), function (img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function () {
            img.removeAttribute('data-src');
        };
    });
}