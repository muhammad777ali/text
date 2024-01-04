const clouds = document.querySelectorAll('.cloud'),
fantasy = document.querySelector('.fantasy'),
boat = document.querySelector('.boat');
    
    const timer = document.querySelector('.timer'),
    timerNum = document.querySelectorAll('.timer__num')
window.addEventListener('scroll', () => {
    let y = window.scrollY;
    let boatSpeed = boat.getAttribute('data-speed');
    boat.style.transform = `translateX(${ y * boatSpeed}px)`;
    clouds.forEach(function(el){
        let speed = el.getAttribute('data-speed')
        let x = window.scrollY
        el.style.transform = `translateX(${ x * speed}px)`
    })
})


const title = document.querySelector('.header__title');
const text = title.innerHTML
title.innerHTML = ''
function type(i=0) {
    title.innerHTML += text[i]
    i++
    if (i < text.length) {
        setTimeout(() => {
            type(i)
        }, 100);
    }
}
type()

const paralaxBox = document.querySelector('.paralax__box'),
layer = document.querySelectorAll('.layer');
paralaxBox.addEventListener('mousemove', function (e) {
    let x = (e.pageX + window.innerWidth) / 50,
     y = (e.pageX + window.innerHeight) / 50
     layer.forEach(function (el) {
        let speed = el.getAttribute('data-speed')
        el.style.transform = `translate(${x * speed}px,${y * speed}px)`
     })
})

window.addEventListener('scroll', function scrollCount() { 
    if (window.scrollY + window.innerHeight >= timer.offsetTop) {
        timerNum.forEach(el=>{
            let dataTimer = el.getAttribute('data-timer')
            timerCount(el, dataTimer)
        })
        this.window.removeEventListener('scroll',scrollCount)
    }
 })
 
 function timerCount(el, count,   i = 0) {
    el.innerHTML = i
    i++
    if (i <= count) {
        setTimeout(() => {
            timerCount(el,count,i)
        }, 10);
    }
 }
  
 const add = document.querySelector(".todo__add"),
  btns = document.querySelector(".btns"),
 input = document.querySelector(".todo__inp"),
  form = document.querySelector(".todo__form"),
  BTN = document.querySelector('.close'),
 todo__list = document.querySelector(".todo__list"),
 todo__item = document.querySelector(".todo__item");
 form.addEventListener('submit', function (e) {
    e.preventDefault();
    const htmlElement = document.createElement('li')
    const elementbtn = document.createElement('button')
    todo__list.append(htmlElement , elementbtn)
    htmlElement.innerHTML = input.value
    htmlElement.classList.add('todo__item')
    //elementbtn.innerHTML = BTN 
    //elementbtn.classList.add('close')
    
 })

 btns.addEventListener('click' , function(){
    btns.style.color = '#02ee02';
 })


 BTN.addEventListener('click', function() {
    todo__item.style.display = 'none';
});