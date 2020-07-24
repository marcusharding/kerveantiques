

function loadingScreen(node) {
    const body = document.getElementById('body')
    const delayInMilliseconds = 2000
    const container = node.childNodes
    const siteHeader = document.getElementById('siteHeader')
    body.classList.add('fixed')

    window.onload = (event) => {
    console.log('loaded')
    setTimeout(() => {
        body.classList.remove('fixed')
        body.classList.add('relative')
        container[1].classList.add('isActive')
        siteHeader.classList.add('z-1000')
        // Set local storage state to true after loading splash screen has played once
    //   ls.setItem('appLoaded', true)
    }, delayInMilliseconds)
    }
}

export default loadingScreen