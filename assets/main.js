[].forEach.call(document.querySelectorAll('link[data-href]'), function (img) {
    img.setAttribute('href', img.getAttribute('data-href'));
    img.onload = function () {
        img.removeAttribute('data-href');
        lol();
    };
});

function lol() {
    [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function () {
            img.removeAttribute('data-src');
            lal();
        };
    });
}

function lal() {
    [].forEach.call(document.querySelectorAll('script[data-src]'), function (img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.removeAttribute('data-src');
    });
}