import image from '../../assets/spinner.gif'

const img = document.createElement("img")
const container = document.getElementById('homeLoadingContainer')

img.src = image
img.alt=""
container.appendChild(img).className="loadingSpinner"