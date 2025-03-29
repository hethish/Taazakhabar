async function fetchNews() {
    let url = "https://news.google.com/rss/search?q=sports&hl=en-US&gl=US&ceid=US:en";
    let response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${url}`);
    let data = await response.json();

    let newsHTML = "<h2>Latest Sports News</h2>";
    data.items.forEach(article => {
        newsHTML += `<div>
            <h3><a href="${article.link}" target="_blank">${article.title}</a></h3>
            <p>${article.pubDate}</p>
        </div>`;
    });

    document.getElementById("news-container").innerHTML = newsHTML;
}

fetchNews();
