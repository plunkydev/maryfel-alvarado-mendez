import logo from './assets/logoMaryfel.png'

export function validateImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(true); // Imagen válida
        img.onerror = () => resolve(false); // Imagen inválida
        img.src = url;
    });
}

export async function renderArticles(articles) {
    const container = document.getElementById('articlesContainer');
    container.innerHTML = '';

    for (const article of articles) {
        const isValid = await validateImage(article.image);

        const card = document.createElement('div');
        card.classList.add('article-card');

        card.innerHTML = `
            <div class="card-content">
                <a href="${article.url}" target="_blank" class="card-link">
                    <img src="${isValid ? article.image : logo}" 
                        alt="${article.title}" 
                        class="card-image" />
                    <h2 class="card-title">${article.title}</h2>
                    <p class="card-description">${article.description}</p>
                </a>
            </div>
        `;

        container.appendChild(card);
    }
}
