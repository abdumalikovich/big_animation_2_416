let items = document.querySelectorAll('main .screen-one .item')
let screen_one = document.querySelector('main .screen-one')

for(let item of items) {
    item.onmouseenter = () => {
        let image = event.target.getAttribute('data-image')

        if(image) screen_one.style.backgroundImage = `url(${image})`
        else screen_one.style.backgroundImage = 'url(https://www.peterfell.co.nz/wp-content/uploads/Peter-Fell-coloured-concrete-floor-Queensberry-Hills-House-Wanaka-Cromwell2.jpg)'
    }
}
