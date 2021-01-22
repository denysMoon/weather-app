//Main part

let button = document.querySelector('.button-watch')
let input = document.querySelector('.form-control')
let main = document.querySelector('.main')
let card = document.querySelector('.card')
let background = document.querySelector('body')

// background.style.background = 'url("../img/1.jpg")';

button.addEventListener('click', (e)=>{
    e.preventDefault()
    cityName = input.value
    let KEY = '8ae450326bc6d6c6d329d3156be6d402'
    showWeather(cityName, KEY)
})

function showWeather(town, key){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=${key}`)
        .then(response => response.json())
        .then(json => {
            card.classList.add('card-watch')

            let name = document.querySelector('.city')
            let temp = document.querySelector('.temp')
            let feels = document.querySelector('.feels')


            tempDisplay = Math.round(json.main.temp)
            feelsDisplay = Math.round(json.main.feels_like)
            
            name.innerHTML =  `<span>${cityName}</span>`
            temp.innerHTML = `<span>Температура ${tempDisplay}&deg</span>`
            feels.innerHTML = `<span>Відчувається як ${feelsDisplay}&deg</span>`
        })
}

// Side menu
let menuButton = document.querySelector('.button-menu')
let sideMenu = document.querySelector('.side-menu')
let menuHideButton = document.querySelector('.menu-hide')

// Show menu

menuButton.addEventListener('click', showMenu)

function showMenu(){
    sideMenu.classList.add('side-menu_show')
    menuButton.classList.add('button-menu_hide')
}

// Hide menu

menuHideButton.addEventListener('click', hideMenu)

function hideMenu(){
    sideMenu.classList.remove('side-menu_show')
    menuButton.classList.remove('button-menu_hide')
}


window.addEventListener('offline', (event) => {
    alert("Офлайн");
});




