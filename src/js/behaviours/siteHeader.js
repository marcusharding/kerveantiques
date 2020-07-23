import Headroom from 'headroom.js'

function siteHeader(node) {
    const el = node

    const headroom = new Headroom(el)
    headroom.init()
}

export default siteHeader