window.addEventListener('load', (event) => {
    
    var classList = document.getElementsByClassName("fade-on-page-load");

    for(var i = 0; i < classList.length; i++) {
        // This loop sets a delay for each times it runs, it makes a fade in sequence
        for (var i = 0; i < 10; i++) {
            (function(i) {
                setTimeout(function() { 
                    classList[i].style.opacity = "1";
                }, 400 * i); // set the delay of the sequence in ms, when set to 0 it runs simultaneously
            })(i);
        }
    
    }
});

