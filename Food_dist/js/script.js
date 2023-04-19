// first slider
let tabcontents = document.querySelectorAll('.tabcontent')
let typeBtns = document.querySelectorAll('[data-type]')


typeBtns.forEach(btn => {
    btn.onclick = () => {
        typeBtns.forEach(el => el.classList.remove('tabheader__item_active'))

        btn.classList.add('tabheader__item_active')

        let num = +btn.getAttribute('data-type')
        slides(num)
    }
})

slides(0)

function slides(n) {
    tabcontents.forEach(item => item.classList.add('hide') )

    tabcontents[n].classList.remove('hide')
    tabcontents[n].classList.add('show', 'fade')
}

// second slider
let prev = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let sliders = document.querySelectorAll('.offer__slide') 

let slideIndex = 0
showSlides(slideIndex)

function showSlides(n) {

    if(n >= sliders.length  ) {
        slideIndex = 0
    }
    if(n < 0) {
        slideIndex = sliders.length - 1
    }

    sliders.forEach(el => el.classList.add('hide'))

    sliders[slideIndex].classList.remove('hide')
    sliders[slideIndex].classList.add('show')
}

prev.onclick = () => {
    slideIndex--
    showSlides(slideIndex)
}
next.onclick = () => {
    slideIndex++
    showSlides(slideIndex)
}

window.onscroll = function(ev) {
    if (Math.ceil(window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        alert('modal')
    }
};

// calculator
let user_info = {gender: 'woman'}

let genBtns = document.querySelectorAll('#gender .calculating__choose-item')
let calcInputs = document.querySelectorAll('.calculating__choose_medium input')
let activeBtns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
let resultOutput = document.querySelector('#result')


genBtns.forEach(btn => {
    btn.onclick = () => {
        genBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))

        btn.classList.add('calculating__choose-item_active')

        user_info.gender = btn.getAttribute('data-g')
    }
});


calcInputs.forEach(input => {
    input.onkeyup = () => {
        user_info[input.id] = +input.value 
    }
})


activeBtns.forEach(btn => {
    btn.onclick = () => {
        activeBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
        let activeNum = +btn.getAttribute('data-act') 

        let {age, weight, height, gender} = user_info

        let result = (10 * weight) + (6.25 * height) - (5 * age)

        if(gender === 'man') {
            resultOutput.innerHTML = Math.round((result + 5) * activeNum)
        } else {
            resultOutput.innerHTML = Math.round((result - 161) * activeNum)
        }

    }
})