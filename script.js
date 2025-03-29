async function fetchNews(category = "sports") {
    let url = category === "world" 
        ? "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en"
        : "https://news.google.com/rss/search?q=sports&hl=en-US&gl=US&ceid=US:en";

    let response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${url}`);
    let data = await response.json();

    let newsHTML = `<h2>Latest ${category === "world" ? "World News" : "Sports News"}</h2>`;
    data.items.forEach(article => {
        newsHTML += `<div class="news-item">
            <h3><a href="${article.link}" target="_blank">${article.title}</a></h3>
            <p>${article.pubDate}</p>
        </div>`;
    });

    document.getElementById("news-container").innerHTML = newsHTML;
}

// 🔍 Search News Function
function searchNews() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let articles = document.querySelectorAll(".news-item");

    articles.forEach(article => {
        let title = article.innerText.toLowerCase();
        if (title.includes(input)) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    });
}

// 🌙 Dark Mode Toggle
document.getElementById("toggle-dark-mode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Load default sports news
fetchNews();
