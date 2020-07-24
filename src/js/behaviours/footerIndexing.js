function footerIndexing(node) {

    const el = node
    const header = document.getElementById('desktopHeader')

    function footerIndexingInit() {
        const scrollPosY = window.pageYOffset | document.body.scrollTop
        const headerHeight = header.scrollHeight;

        if (scrollPosY >= headerHeight) {
            header.classList.add('invisible')
        }

        if (scrollPosY < headerHeight) {
            header.classList.remove('invisible')
        }
    }

    function throttled(delay, fn) {
        let lastCall = 0
        return function (...args) {
          const now = (new Date()).getTime()
          if (now - lastCall < delay) {
            return
          }
          lastCall = now
          return fn(...args)
        }
      }

      throttled(200, window.addEventListener('scroll', footerIndexingInit))
}

export default footerIndexing