const title =document.querySelector('.slider__title')

const sliderContainer =document.querySelector('.slider__container')

setTimeout(()=>{
    title.classList.add('active')
},1000)

sliderContainer.style.height = window.innerHeight + 'px'