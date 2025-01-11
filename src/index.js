import { articles } from './arcticles'
import { renderArticles } from './displayArticlesCards'
import { nav, scrollNavEfect, scrollToId } from './navigation/nav.js'
import { initScrollAnimation } from './utils/scrollAnimation.js'
import { showMenu, closeMenu } from './utils/menu.js'
import './styles.css'

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

btn.addEventListener('click', showMenu)

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
