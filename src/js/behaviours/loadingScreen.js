

function loadingScreen(node) {
    const body = document.getElementById('body')
    const delayInMilliseconds = 2000
    const container = document.getElementById('homeLoadingContainer')
    const siteHeader = document.getElementById('siteHeader')
    body.classList.add('fixed')

    window.onload = (event) => {
    setTimeout(() => {
        body.classList.remove('fixed')
        body.classList.add('relative')
        container.classList.add('isActive')
        siteHeader.classList.add('z-1000')
    }, delayInMilliseconds)
    }
}

export default loadingScreen