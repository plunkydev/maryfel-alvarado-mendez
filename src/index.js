import { articles } from "./arcticles";
import { renderArticles } from "./displayArticlesCards";
import "./styles.css"

document.addEventListener('DOMContentLoaded', () => {
    renderArticles(articles);
});