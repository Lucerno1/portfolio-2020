
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    selectedAttraction: 0.01,
    friction: 0.15,
    pageDots: false,


});

// var flkty = new Flickity('.carousel');
flkty.on('change', function (index) {

    console.log('Flickity change ' + index);
    
    let indexClass = 'index-' + index;

    let element = document.getElementsByClassName("main-carousel")[0];
    element.classList.remove("index-0");
    element.classList.remove("index-1");
    element.classList.remove("index-2");

    element.classList.add(indexClass);
});
