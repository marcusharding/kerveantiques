const moduleElements = document.querySelectorAll('[data-module]')

for (let i = 0; i < moduleElements.length; i += 1) {
  const el = moduleElements[i]
  const name = el.getAttribute('data-module')
  const Module = require(`./${name}`).default
  new Module(el)
}