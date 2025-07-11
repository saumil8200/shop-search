function searchShops() {
    const query = document.getElementById('searchBox').value.trim();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (!query) return;

    const links = {
        Amazon: `https://www.amazon.in/s?k=${encodeURIComponent(query)}`,
        Flipkart: `https://www.flipkart.com/search?q=${encodeURIComponent(query)}`,
        BigBasket: `https://www.bigbasket.com/ps/?q=${encodeURIComponent(query)}`,
        JioMart: `https://www.jiomart.com/search/${encodeURIComponent(query)}`
    };

    for (const [name, url] of Object.entries(links)) {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.textContent = `Search "${query}" on ${name}`;
        resultsDiv.appendChild(link);
    }
}
