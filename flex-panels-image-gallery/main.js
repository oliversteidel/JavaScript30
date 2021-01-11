
const items = document.querySelectorAll('.img');

items.forEach(item => item.addEventListener('click', function () {
    
    this.classList.toggle('open'); 
    this.children[0].classList.toggle('active'); 
    this.children[1].classList.toggle('grow'); 
    this.children[2].classList.toggle('active');   


}));