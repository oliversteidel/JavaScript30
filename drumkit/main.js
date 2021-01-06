var boom = new Audio('sounds/boom.wav');
var clap = new Audio('sounds/clap.wav');
var hihat = new Audio('sounds/hihat.wav');
var kick = new Audio('sounds/kick.wav');
var openhat = new Audio('sounds/openhat.wav');
var ride = new Audio('sounds/ride.wav');
var snare = new Audio('sounds/snare.wav');
var tink = new Audio('sounds/tink.wav');
var tom = new Audio('sounds/tom.wav');


var prevKey;

const animate = (input) => {
    var elements = document.getElementsByClassName(input);
    console.log(elements);
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('pressed');
    };

    
}

const remove = (foo) => {
    var elements = document.getElementsByClassName(foo);
    console.log(elements);
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('pressed');
    };

}


document.addEventListener("keydown", event => {
    var keyName = event.key;
    animate(keyName);
    switch (keyName) {
        case 'a':
            boom.play();
            break;
        case 's':
            clap.play();
            break;
        case 'd':
            hihat.play();
            break;
        case 'f':
            kick.play();
            break;
        case 'g':
            openhat.play();
            break;
        case 'h':
            ride.play();
            break;
        case 'j':
            snare.play();
            break;
        case 'k':
            tink.play();
            break;
        case 'l':
            tom.play();
    }
    remove(keyName);
});