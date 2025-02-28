export async function renderArticles (articles) {
  const container = document.getElementById('articlesContainer')
  container.innerHTML = ''

  for (const article of articles) {
    const card = document.createElement('div')
    card.classList.add('article-card')

    card.innerHTML = `
            <div class="card-content">
                <a href="${article.url}" target="_blank" class="card-link">
                    <img src="${article.image}" 
                        alt="${article.title}" 
                        class="card-image" />
                    <h2 class="card-title">${article.title}</h2>
                    <p class="card-description">${article.description}</p>
                </a>
            </div>
        `

    container.appendChild(card)
  }
}
