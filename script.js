//стрелки
let offset = 0 ; //смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.click_left').addEventListener('click', function(){
    offset = offset + 679;
    if(offset > 1358){
       offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.click_right').addEventListener('click', function(){
    offset = offset - 679;
    if(offset < 0){
       offset = 1358;
    }
    sliderLine.style.left = -offset + 'px';
});


//кружки
document.querySelector('.spot-left').addEventListener('click', function(){
    offset = 0;
    if(offset < 0){
       offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});
document.querySelector('.spot-center').addEventListener('click', function(){
    offset = 679;
    if(offset < 679){
       offset = 679;
    }
    sliderLine.style.left = -offset + 'px';
});
document.querySelector('.spot-right').addEventListener('click', function(){
    offset = 1358;
    if(offset < 1358){
       offset = 1358;
    }
    sliderLine.style.left = -offset + 'px';
});


//навигация
document.querySelector('.one').addEventListener('click', function(){
    offset = 0;
    if(offset < 0){
       offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});
document.querySelector('.two').addEventListener('click', function(){
    offset = 679;
    if(offset < 679){
       offset = 679;
    }
    sliderLine.style.left = -offset + 'px';
});
document.querySelector('.three').addEventListener('click', function(){
    offset = 1358;
    if(offset < 1358){
       offset = 1358;
    }
    sliderLine.style.left = -offset + 'px';
});
