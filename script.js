function searchShops() {
    const query = document.getElementById('searchBox').value.trim();
    if (!query) return;

    const amazonUrl = `https://www.amazon.in/s?k=${encodeURIComponent(query)}`;
    const flipkartUrl = `https://www.flipkart.com/search?q=${encodeURIComponent(query)}`;
    const blinkitUrl = `https://www.bigbasket.com/ps/?q=${encodeURIComponent(query)}`;
    const jiomartUrl = `https://www.jiomart.com/search/${encodeURIComponent(query)}`

    window.open(amazonUrl, '_blank');
    window.open(flipkartUrl, '_blank');
    window.open(blinkitUrl, '_blank');
    window.open(jiomartUrl, '_blank');
}