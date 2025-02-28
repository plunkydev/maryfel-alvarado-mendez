import { articles } from './arcticles'
import { renderArticles } from './displayArticlesCards'
import { nav, scrollNavEfect, scrollToId } from './navigation/nav.js'
import { initScrollAnimation } from './utils/scrollAnimation.js'
import { showMenu, closeMenu } from './utils/menu.js'
import { toggleForm } from './utils/forrm.js'
import './styles.css'
import manifest from './manifest.js'

export const navContainer = document.getElementById('navMain')
navContainer.appendChild(nav)

const home = document.getElementById('heroContiner')
const acercaDeMiContiner = document.getElementById('acercaDeMiContiner')
const articulosDestacados = document.getElementById('featuredArticlesContiner')
const academyFormationConatiner = document.getElementById('academyFormationConatiner')
const experienciaLaboral = document.getElementById('experienciaLaboral')
const cursos = document.getElementById('cursos')
const partisipacionesEventos = document.getElementById('partisipacionesEventos')
const publicaciones = document.getElementById('publicaciones')
const idiomas = document.getElementById('idiomas')
const paquetesInformaticos = document.getElementById('paquetesInformaticos')
const herramientasSeo = document.getElementById('herramientasSeo')
const reconocimientos = document.getElementById('reconocimientos')
const otros = document.getElementById('otros')

const btnToPerfil = document.getElementById('navPerfilContiner')

export const btn = document.getElementById('imgMenuHamburgesa')
export const img = document.getElementById('imgMenuHamburgesa')
export const menuList = document.getElementById('menuList')

const btnHome = document.getElementById('btnHome')
const btnacercaDeMiContiner = document.getElementById('btnacercaDeMiContiner')
const btnArticulosDestacados = document.getElementById('btnArticulosDestacados')
const btnFormacionAcademica = document.getElementById('btnAcademyFormation')
const btnExperienciaLaboral = document.getElementById('btnExperienciaLaboral')
const btnCursos = document.getElementById('btnCursos')
const btnPartisipacionesEventos = document.getElementById('btnPartisipacionesEventos')
const btnPublicaciones = document.getElementById('btnPublicaciones')
const btnIdiomas = document.getElementById('btnIdiomas')
const btnPaquetesInformaticos = document.getElementById('btnPaquetesInformaticos')
const btnHerramientasSeo = document.getElementById('btnHerramientasSeo')
const btnReconocimientos = document.getElementById('btnReconocimientos')
const btnOtros = document.getElementById('btnOtros')
const btnContact = document.getElementById('contact')
const btnContactMenu = document.getElementById('btnContactMenu')
const closeWindowButon = document.getElementById('closeForm')

btn.addEventListener('click', showMenu)

btnContactMenu.addEventListener('click', (event) => {
  event.stopPropagation()
  closeMenu()
  toggleForm()
})

closeWindowButon.addEventListener('click', () => {
  toggleForm()
})

btnContact.addEventListener('click', (event) => {
  event.stopPropagation()
  toggleForm()
})
btnHome.addEventListener('click', () => scrollToId(home))
btnToPerfil.addEventListener('click', () => scrollToId(home))
btnacercaDeMiContiner.addEventListener('click', () => scrollToId(acercaDeMiContiner))
btnArticulosDestacados.addEventListener('click', () => scrollToId(articulosDestacados))
btnFormacionAcademica.addEventListener('click', () => scrollToId(academyFormationConatiner))
btnExperienciaLaboral.addEventListener('click', () => scrollToId(experienciaLaboral))
btnCursos.addEventListener('click', () => scrollToId(cursos))
btnPartisipacionesEventos.addEventListener('click', () => scrollToId(partisipacionesEventos))
btnPublicaciones.addEventListener('click', () => scrollToId(publicaciones))
btnIdiomas.addEventListener('click', () => scrollToId(idiomas))
btnPaquetesInformaticos.addEventListener('click', () => scrollToId(paquetesInformaticos))
btnHerramientasSeo.addEventListener('click', () => scrollToId(herramientasSeo))
btnReconocimientos.addEventListener('click', () => scrollToId(reconocimientos))
btnOtros.addEventListener('click', () => scrollToId(otros))

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimation('.hidden')
  renderArticles(articles)
})
scrollNavEfect(navContainer)
const continers = document.querySelectorAll('.continer')
continers.forEach(container => container.addEventListener('click', () => closeMenu()))

// Convierte el objeto manifest a una cadena JSON y lo encapsula en un Blob
const manifestBlob = new Blob([JSON.stringify(manifest)], { type: 'application/json' })

// Crea una URL temporal que apunta al Blob
const manifestURL = URL.createObjectURL(manifestBlob)

// Crea un elemento <link> y configura sus atributos para referenciar el manifest
const manifestLink = document.createElement('link')
manifestLink.setAttribute('rel', 'manifest')
manifestLink.setAttribute('href', manifestURL)

// Agrega el elemento <link> al <head> del documento
document.head.appendChild(manifestLink)
