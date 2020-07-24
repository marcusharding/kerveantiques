import image from '../../assets/appreciation.jpg'

const img = document.createElement("img")
const container = document.getElementById('appreciation')
img.src = image
img.alt=""
container.appendChild(img)