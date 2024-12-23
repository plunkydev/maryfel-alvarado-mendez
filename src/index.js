import { articles } from './arcticles'
import { renderArticles } from './displayArticlesCards'
import { nav, scrollNavEfect, scrollToId } from './navigation/nav.js'
import './styles.css'
const navContainer = document.getElementById('navMain')
navContainer.appendChild(nav)

const home = document.getElementById('heroContiner')
const btnToPerfil = document.getElementById('navPerfilContiner')
document.addEventListener('scroll', () => scrollNavEfect(navContainer))
btnToPerfil.addEventListener('click', () => scrollToId(home))

document.addEventListener('DOMContentLoaded', () => {
  renderArticles(articles)
})
