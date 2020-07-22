import image from '../../assets/mobile_hero.jpg'

const img = document.createElement("img")
const container = document.getElementById('mobileHero')
img.src = image
container.appendChild(img)