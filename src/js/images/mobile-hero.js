import image from '../../assets/mobile_hero.jpg'

const img = document.createElement("img")
const container = document.getElementById('mobileHero')
img.src = image
img.alt=""
container.appendChild(img).className="portraitMobileHero"