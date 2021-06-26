let menu = document.querySelector('.menu')
let open_menu = document.querySelector('.open')
let logo = document.querySelector('svg')
let links = document.querySelectorAll('.menu .menu-main a')
let counter = 0

open_menu.onclick = () => {
    menu.classList.add('active')
    menu.classList.add('active_bg')

    setTimeout(() => {
        logo.classList.add('active')
        
        setTimeout(() => {
            open_menu.classList.add('active')

            let show_links = setInterval(() => {
                if(counter >= links.length - 1) clearInterval(show_links)
                
                links[counter++].classList.add('active')
            }, 250)
        }, 600)
    }, 600)
}

// let a = setInterval(() => {
//     console.log('interval');
// }, 500)
// let b = setTimeout(() => {
//     clearInterval(a)
// }, 1500)
