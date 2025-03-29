const API_KEY = 'e92eb18c4d3e4bb5843e5305bf49fe17';
const BASE_URL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=' + API_KEY;

async function fetchNews(category) {
    const url = BASE_URL + `&category=${category}`;
    const response = await fetch(url);
    const data = await response.json();
    const newsContainer = document.getElementById("news-container");

    newsContainer.innerHTML = ""; 

    data.articles.forEach(article => {
        const newsItem = document.createElement("div");
        newsItem.classList.add("news-article");
        newsItem.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read More</a>
        `;
        newsContainer.appendChild(newsItem);
    });
}

// Load default category on page load
fetchNews('general');
