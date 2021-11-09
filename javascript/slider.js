
var slider_products = [
    {
        image: 'image/nodemcu.jpg',
        link: 'http://www.webcebir.com/170-javascript-dom-erisim-yontemleri-dersi.html'
    },
    {
        image: 'image/arduinoUno.jpg',
        link: 'http://www.webcebir.com/170-javascript-dom-erisim-yontemleri-dersi.html'
    },
    {
        image: 'image/raspberryPi.jpg',
        link: 'http://www.webcebir.com/170-javascript-dom-erisim-yontemleri-dersi.html'
    },
];

var index = 0;
var slideCount = slider_products.length;
var interval;

// slider ayarlar
var settings = {
    duration: '5000',
    random: false
};

init(settings);


function init(settings) {
    var prev;
    interval = setInterval(function () {
        if (settings.random) {
            // random index
            do {
                index = Math.floor(Math.random() * slideCount);
            } while (index == prev)
            prev = index;
        } else {
            // artan index
            if (slideCount == index + 1) {
                index = -1;
            }
            showSlide(index);
            index++;
        }

        showSlide(index);
    }, settings.duration)
}

// slider sergile
function showSlide(i) {
    index = i;
    if (i < 0) {
        index = slideCount - 1;
    }
    if (i >= slideCount) {
        index = 0;
    }

    // aktif görüntü bilgileri
    document.querySelector('.slider-img').setAttribute('src', slider_products[index].image);
    document.querySelector('.slider-link').setAttribute('href', slider_products[index].link);
}

// önceki resim
document.querySelector('.slider-previous').addEventListener('click', function () {
    index--;
    showSlide(index);
});

// sonraki resim
document.querySelector('.slider-next').addEventListener('click', function () {
    index++
    showSlide(index);
});