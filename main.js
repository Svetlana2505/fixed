let slider = document.getElementById('slider');
let left = document.getElementById('left');
let right = document.getElementById('right');

let item = 0;

left.addEventListener('click',function(){
    item = item - 225;
    if(item < -900) {
        item = -900
    }
    slider.style.left = item + 'px'
});

right.addEventListener('click',function(){
    item = item + 225;
    if(item > 0) {
        item = 0
    }
    slider.style.left = item + 'px'
});

