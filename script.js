//Menu mobile //

const mainMenu = document.querySelector('.navbar')
const openMenu = document.querySelector('.burgue')
const itensMenu = document.querySelector('.mainMenu')

function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden'
    document.body.scroll = 'no'
}

function reloadScrollBars() {
    document.documentElement.style.overflow = 'auto'
    document.body.scroll = 'yes'
}

openMenu.onclick = function() {
    if (mainMenu.classList.toggle('active')) {
        unloadScrollBars()
    } else {
        reloadScrollBars()
    }
}

itensMenu.onclick = function() {
    mainMenu.classList.remove('active')
    reloadScrollBars()
}

const imgLogo = document.querySelector('.img-logo')
const imgLogoWhite = document.querySelector('.img-logo')
const burgueOpen = document.querySelector('.openMenu')
const burgueClose = document.querySelector('.closeMenu')

window.addEventListener('scroll', function() {
    const header = document.querySelector('.navbar')
    header.classList.toggle('sticky', window.scrollY > 0)
    if (window.scrollY > 0) {
        document.querySelector('.txt-logo').innerHTML = 'E | F'
        imgLogo.src = '/img/lotus-verde.png'
        burgueOpen.style.color = '#376c4e'
    } else {
        document.querySelector('.txt-logo').innerHTML = 'Energia Farmacêutica'
        imgLogoWhite.src = '/img/logo-white.png'
        burgueOpen.style.color = '#fff'
    }
})