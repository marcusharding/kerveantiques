import image from '../../assets/desktop_hero.jpg'

const img = document.createElement("img")
const container = document.getElementById('mobileHero')
img.src = image
img.alt=""
container.appendChild(img).className="landscapeMobileHero"