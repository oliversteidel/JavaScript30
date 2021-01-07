
const input = document.querySelectorAll('input');

input.forEach(el => {
    el.addEventListener('input', () => {        
        updateValue(el.name, el.value);
    });
});

function updateValue(name, value) {
    if(value.charAt(0) === '#') {
        document.documentElement.style.setProperty('--' + name, value);
    }else {
        document.documentElement.style.setProperty('--' + name, value + 'px');
    }    
}