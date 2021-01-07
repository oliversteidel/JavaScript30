const spacing = document.querySelector('input[name=spacing');
const blur = document.querySelector('input[name=blur');
const color = document.querySelector('input[name=color');

const input = document.querySelectorAll('input');

console.log(input);

input.forEach(el => {
    el.addEventListener('input', () => {
        console.log(el.value);
        updateValue(el.name, el.value);
    });
});

// spacing.addEventListener('input', () => {
//     console.log(spacing.value);
//     updateValue(spacing.name, spacing.value);

// })

function updateValue(name, value) {
    if(value.charAt(0) === '#') {
        document.documentElement.style.setProperty('--' + name, value);

    }else {
        document.documentElement.style.setProperty('--' + name, value + 'px');

    }
    
}