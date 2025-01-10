import imgMenuHamburgesa from '../assets/menuIcon.png'
import close from '../assets/close.png'
import { menuList, img, btn } from '../index.js'

export function closeMenu () {
  // Ocultar el menú
  menuList.style.display = 'none'
  img.src = imgMenuHamburgesa
  img.style.width = '30px'
  img.style.height = '30px'

  // Eliminar desenfoque de los elementos con la clase "container"
  const containers = document.querySelectorAll('.continer')
  containers.forEach(container => {
    container.style.filter = 'none' // Quitar desenfoque
  })

  // Cambiar los eventos del botón
  btn.removeEventListener('click', closeMenu)
  btn.addEventListener('click', showMenu)
}

export function showMenu () {
  // Mostrar el menú
  menuList.style.display = 'flex'
  img.src = close
  img.style.width = '20px'
  img.style.height = '20px'

  // Agregar desenfoque a los elementos con la clase "container"
  const containers = document.querySelectorAll('.continer')
  containers.forEach(container => {
    container.style.filter = 'blur(5px)' // Aplicar desenfoque
  })

  // Cambiar los eventos del botón
  btn.removeEventListener('click', showMenu)
  btn.addEventListener('click', closeMenu)
}
