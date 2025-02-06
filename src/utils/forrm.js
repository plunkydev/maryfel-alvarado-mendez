export function toggleForm () {
  const form = document.querySelector('.contact_main__form')

  if (form.style.display === 'none' || form.style.display === '') {
    form.style.display = 'block'
    // Agregar desenfoque a los elementos con la clase "container"
    continerBlur(true)
  } else {
    form.style.display = 'none'
    // Agregar desenfoque a los elementos con la clase "continer"
    continerBlur(false)
  }
}

export function continerBlur (blur) {
  if (blur) {
    const containers = document.querySelectorAll('.continer')
    containers.forEach(container => {
      container.classList.remove('continer')
      container.classList.add('continerBlur')
    })
  } else {
    const containersBlur = document.querySelectorAll('.continerBlur')
    containersBlur.forEach(container => {
      container.classList.remove('continerBlur')
      container.classList.add('continer')
    })
  }
}
