function mobileMenu(node) {
    const el = node
    const siteNav = document.getElementById('siteNav')
    // const ul = siteNav.childNodes[1]
    // const li = ul.childNodes
    const burger = node.querySelector('button')
    const body = document.getElementById('body')
    
    // li.forEach(element => {
    //   const node = element
    // });
    

    el.onclick = () => {
      siteNav.classList.toggle('is-open')
      burger.classList.toggle('is-active')
      body.classList.toggle('overflow-y-hidden')
    }
  }

export default mobileMenu