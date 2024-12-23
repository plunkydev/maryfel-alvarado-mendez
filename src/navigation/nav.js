import imgMenuHamburgesa from '../assets/menuIcon.png'
import imgNav from '../assets/maryfelPerfil32x32.png'

const nav = document.createElement('nav')
nav.innerHTML = `<nav class="navContainer">
                <div id="navPerfilContiner" class="navPerfilContiner"><img src="${imgNav}" alt="Perfil de Maryfel">
                <div class="navPerfilText"><h4>Maryfel Alvarado Méndez</h4>
                <p>Escritora venezolana | Embajadora del idioma español | Editora y redactora web Senior</p>
                </div>
                </div>
                <div class="btnContainer" id="btnContiner">
                    <button id="btn" class="btn"><img id="imgMenuHamburgesa" class="imgMenuHamburgesa" src="${imgMenuHamburgesa}" alt="menu hamburgesa"></button>
                    <div class="menuList" id="menuList">
                        <div class="menuItem">
                            <button id="btnHome">Home</button>
                            <button id="btnAbout">About</button>
                            <button id="btnContact">Contact</button>
                        </div>
                    </div>
                </div>
        </nav>`

function scrollNavEfect (nav) {
  const scrollThreshold = 200

  if (window.scrollY > scrollThreshold) {
    nav.classList.add('visible')
    nav.classList.remove('hidden')
  } else {
    nav.classList.add('hidden')
    nav.classList.remove('visible')
  }
}

function scrollToId (id) {
  if (id) {
    id.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    setTimeout(() => {
      const offset = 50
      window.scrollBy({
        top: -offset,
        behavior: 'smooth'
      })
    }, 0)
  } else {
    console.error(`No se encontró ningún elemento con el id: ${id}`)
  }
}

export { nav, scrollNavEfect, scrollToId }
