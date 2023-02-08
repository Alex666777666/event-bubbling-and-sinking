/* eslint-disable prettier/prettier */
const divElem = document.querySelector('.rect_div')
const pElem = document.querySelector('.rect_p')
const spanElem = document.querySelector('.rect_span')

const logTarget = (text, color) => {
  const eventListElem = document.querySelector('.events-list')

  eventListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`
}

const logGreenDiv = logTarget.bind(null, 'DIV', 'green')
const logGreenP = logTarget.bind(null, 'P', 'green')
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green')

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey')
const logGreyP = logTarget.bind(null, 'P', 'grey')
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey')

divElem.addEventListener('click', logGreyDiv, true)
divElem.addEventListener('click', logGreenDiv)

pElem.addEventListener('click', logGreyP, true)
pElem.addEventListener('click', logGreenP)

spanElem.addEventListener('click', logGreySpan, true)
spanElem.addEventListener('click', logGreenSpan)

const node = document.querySelector('.events-list')

function clearFunction() {
  node.innerHTML = ''
}

const clearButton = document.querySelector('.clear-btn')
clearButton.addEventListener('click', clearFunction)

const attachButton = document.querySelector('.attach-handlers-btn')
const removeButton = document.querySelector('.remove-handlers-btn')

function attach() {
  divElem.addEventListener('click', logGreyDiv, true)
  divElem.addEventListener('click', logGreenDiv)

  pElem.addEventListener('click', logGreyP, true)
  pElem.addEventListener('click', logGreenP)

  spanElem.addEventListener('click', logGreySpan, true)
  spanElem.addEventListener('click', logGreenSpan)

  attachButton.addEventListener('click', logGreyDiv, true)
  attachButton.addEventListener('click', logGreyP, true)
  attachButton.addEventListener('click', logGreySpan, true)
  attachButton.addEventListener('click', logGreenSpan)
  attachButton.addEventListener('click', logGreenP)
  attachButton.addEventListener('click', logGreenDiv)
}
function remove() {
  divElem.removeEventListener('click', logGreyDiv, true)
  divElem.removeEventListener('click', logGreenDiv)

  pElem.removeEventListener('click', logGreyP, true)
  pElem.removeEventListener('click', logGreenP)

  spanElem.removeEventListener('click', logGreySpan, true)
  spanElem.removeEventListener('click', logGreenSpan)

  attachButton.removeEventListener('click', logGreyDiv, true)
  attachButton.removeEventListener('click', logGreyP, true)
  attachButton.removeEventListener('click', logGreySpan, true)
  attachButton.removeEventListener('click', logGreenSpan)
  attachButton.removeEventListener('click', logGreenP)
  attachButton.removeEventListener('click', logGreenDiv)
}

const attachedButton = document.querySelector('.attach-handlers-btn')
attachedButton.addEventListener('click', attach)

const removedButton = document.querySelector('.remove-handlers-btn')
removedButton.addEventListener('click', remove)
