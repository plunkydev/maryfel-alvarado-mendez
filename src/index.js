import { articles } from './arcticles'
import { renderArticles } from './displayArticlesCards'
import { nav, scrollNavEfect, scrollToId } from './navigation/nav.js'
import { initScrollAnimation } from './utils/scrollAnimation.js'
import { showMenu, closeMenu } from './utils/menu.js'
import './styles.css'

const navContainer = document.getElementById('navMain')
navContainer.appendChild(nav)

const home = document.getElementById('heroContiner')
const acercaDeMiContiner = document.getElementById('acercaDeMiContiner')
const ArticulosDestacados = document.getElementById('featuredArticlesContiner')
const btnToPerfil = document.getElementById('navPerfilContiner')

export const btn = document.getElementById('imgMenuHamburgesa')
export const img = document.getElementById('imgMenuHamburgesa')
export const menuList = document.getElementById('menuList')

const btnHome = document.getElementById('btnHome')
const btnacercaDeMiContiner = document.getElementById('btnacercaDeMiContiner')
const btnArticulosDestacados = document.getElementById('btnArticulosDestacados')

btn.addEventListener('mouseover', showMenu)
btn.addEventListener('click', closeMenu)

btnHome.addEventListener('click', () => scrollToId(home))
btnToPerfil.addEventListener('click', () => scrollToId(home))
btnacercaDeMiContiner.addEventListener('click', () => { scrollToId(acercaDeMiContiner) })
btnArticulosDestacados.addEventListener('click', () => scrollToId(ArticulosDestacados))

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimation('.hidden')
  renderArticles(articles)
})
document.addEventListener('scroll', () => scrollNavEfect(navContainer))
document.addEventListener('click', () => closeMenu())
