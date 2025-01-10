export function initScrollAnimation (selector = '.hidden', threshold = 0.1) {
  const hiddenElements = document.querySelectorAll(selector)

  // eslint-disable-next-line no-undef
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold })
  hiddenElements.forEach(element => observer.observe(element))
}
