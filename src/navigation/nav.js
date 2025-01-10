import imgMenuHamburgesa from '../assets/menuIcon.png'
import imgNav from '../assets/maryfelPerfil32x32.png'
import { closeMenu } from '../utils/menu'

const nav = document.createElement('div')
nav.className = 'navContainer'
nav.innerHTML = `<div id="navPerfilContiner" class="navPerfilContiner">
                <img src="${imgNav}" alt="Perfil de Maryfel">
                <div class="navPerfilText">
                <h4>Maryfel Alvarado Méndez</h4>
                <p>Escritora venezolana | Embajadora del idioma español | Editora y redactora web Senior</p>
                </div>
                </div>
                <div class="btnContainer" id="btnContiner">
                    <button id="btn" class="btn">
                    <img id="imgMenuHamburgesa" class="imgMenuHamburgesa" src="${imgMenuHamburgesa}" alt="menu hamburgesa"></button>
                    <div class="menuList" id="menuList">
                        <div class="menuItem">
                            <button id="btnHome">Home</button>
                            <button id="btnacercaDeMiContiner">Acerca de Mi</button>
                            <button id="btnArticulosDestacados">Articulos Destacados</button>
                            <button id="btnAcademyFormation">Formación Académica</button>
                            <button id="btnExperienciaLaboral">Experiencia Laboral</button>
                            <button id="btnCursos">Cursos</button>
                            <button id="btnPartisipacionesEventos">Participaciones en Eventos</button>
                            <button id="btnPublicaciones">Publicaciones</button>
                            <button id="btnIdiomas">Idiomas</button>
                            <button id="btnPaquetesInformaticos">Paquetes Informáticos</button>
                            <button id="btnHerramientasSeo">Herramientas de Redacción SEO</button>
                            <button id="btnReconocimientos">Reconocimientos</button>
                            <button id="btnOtros">Otras Actividades</button>
                            </div>
                    </div>
                </div>`

function scrollNavEfect (nav) {
  const scrollThreshold = 200
  // eslint-disable-next-line no-unused-vars
  let lastScrollPosition = 0
  let scrollTimeout
  let isMouseOverNav = false // Estado para saber si el mouse está sobre el nav

  // Detectar el scroll actual y aplicar las clases
  const handleScroll = () => {
    const currentScrollPosition = window.scrollY

    if (currentScrollPosition > scrollThreshold) {
      // Mostrar el nav cuando hay scroll
      nav.classList.add('visible')
      nav.classList.remove('hidden')
    } else {
      // Ocultar el nav si está por debajo del umbral
      nav.classList.add('hidden')
      nav.classList.remove('visible')
    }

    // Reiniciar el temporizador para ocultar el nav, si no está el mouse sobre él
    if (!isMouseOverNav) {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        nav.classList.add('hidden')
        nav.classList.remove('visible')
      }, 2000)
    }

    // Actualizar la posición del scroll anterior
    lastScrollPosition = currentScrollPosition
  }

  // Manejar cuando el mouse entra al nav
  const handleMouseEnter = () => {
    isMouseOverNav = true
    clearTimeout(scrollTimeout) // Detener el temporizador mientras el mouse está sobre el nav
  }

  // Manejar cuando el mouse sale del nav
  const handleMouseLeave = () => {
    isMouseOverNav = false
    // Reiniciar el temporizador al salir del nav
    scrollTimeout = setTimeout(() => {
      nav.classList.add('hidden')
      nav.classList.remove('visible')
    }, 2000)
  }

  // Asignar los eventos
  nav.addEventListener('mouseenter', handleMouseEnter)
  nav.addEventListener('mouseleave', handleMouseLeave)
  document.addEventListener('scroll', handleScroll)
}

function scrollToId (id) {
  if (id) {
    id.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    setTimeout(() => {
      const offset = 60
      window.scrollBy({
        top: -offset,
        behavior: 'smooth'
      })
    }, 0)
  } else {
    console.error(`No se encontró ningún elemento con el id: ${id}`)
  }

  closeMenu()
}

export { nav, scrollNavEfect, scrollToId }
