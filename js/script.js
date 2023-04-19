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


// let genderBtns = document.querySelectorAll('#gender .calculating__choose-item')
// let inputs = document.querySelectorAll('.calculating__choose_medium input')
// let allActBtns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
// let resultNum = document.querySelector('#result')

// let userData = {
//     gender: 'woman'
// }

// genderBtns.forEach(btn => {
//     btn.onclick = () => {
//         genderBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))

//         btn.classList.add('calculating__choose-item_active')

//         userData.gender = btn.getAttribute('data-gender')
//     }
// });

// inputs.forEach(input => {
//     input.oninput = () => {
//         userData[input.id] = +input.value 
//     }
// })


// allActBtns.forEach(btn => {
//     btn.onclick = () => {
//         inputs.forEach(input => {
//             if(input.length <= 0){

//             }
//         })
//         allActBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))

//         btn.classList.add('calculating__choose-item_active')

//         let {age, weight, height, gender} = userData

//         let result = (10 * weight) + (6.25 * height) - (5 * age)

//         let activeNum = +btn.getAttribute('data-act') 

//         if(gender === 'man') {
//             resultNum.innerHTML = Math.round((result + 5) * activeNum)
//         } else {
//             resultNum.innerHTML = Math.round((result - 161) * activeNum)
//         }

//     }
// })



let genderBtns = document.querySelectorAll('#gender .calculating__choose-item')
let inputs = document.querySelectorAll('.calculating__choose_medium input')
let allActBtns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
let resultNum = document.querySelector('#result')

let userData = {
    gender: 'woman'
}

genderBtns.forEach(btn => {
    btn.onclick = () => {
        genderBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))

        btn.classList.add('calculating__choose-item_active')

        userData.gender = btn.getAttribute('data-gender')
    }
});

inputs.forEach(input => {
    input.oninput = () => {
        userData[input.id] = +input.value 
    }
})


allActBtns.forEach(btn => {
    btn.onclick = () => {
        let isEmpty = false;

        inputs.forEach(input => {
            if (input.value === '') {
                isEmpty = true;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        if (isEmpty) {
            resultNum.innerHTML = 'Заполните все поля';
            resultNum.style.fontSize = '20px'
            return;
        } else if(isEmpty == false) {
            resultNum.style.fontSize = '36px'
        }

        allActBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))

        btn.classList.add('calculating__choose-item_active')

        let {age, weight, height, gender} = userData

        let forMAn = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)

        let forWoman = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)

        let activeNum = +btn.getAttribute('data-act')

        if(gender === 'man') {
            resultNum.innerHTML = Math.round((forMAn) * activeNum) + 'ккал'
        } else {
            resultNum.innerHTML = Math.round((forWoman) * activeNum) + 'ккал'
        }

    }
})


// BMR = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)

// BMRW = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)