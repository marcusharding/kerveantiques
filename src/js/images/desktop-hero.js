import image from '../../assets/desktop_hero.jpg';

const img = document.createElement("img")
const container = document.getElementById('desktopHero')
img.alt=""
img.src = image
container.appendChild(img)
