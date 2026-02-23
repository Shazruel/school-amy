// Game List Database
const games = [
    { id: 1, name: "Genshin Impact", icon: "https://web.cloudmoonapp.com/favicon.ico", url: "https://web.cloudmoonapp.com/" },
    { id: 2, name: "Roblox", icon: "https://web.cloudmoonapp.com/favicon.ico", url: "https://web.cloudmoonapp.com/" },
    { id: 3, name: "Free Fire", icon: "https://web.cloudmoonapp.com/favicon.ico", url: "https://web.cloudmoonapp.com/" },
    { id: 4, name: "Mobile Legends", icon: "https://web.cloudmoonapp.com/favicon.ico", url: "https://web.cloudmoonapp.com/" },
    { id: 5, name: "PUBG Mobile", icon: "https://web.cloudmoonapp.com/favicon.ico", url: "https://web.cloudmoonapp.com/" }
];

function renderGames(data) {
    const list = document.getElementById('gameList');
    list.innerHTML = data.map(game => `
        <div class="game-card">
            <img src="${game.icon}" alt="${game.name}">
            <button class="play-btn" onclick="openMirror('${game.url}')">PLAY NOW</button>
        </div>
    `).join('');
}

// Initial Load
renderGames(games);

// Search Function
function filterGames() {
    const query = document.getElementById('gameSearch').value.toLowerCase();
    const filtered = games.filter(g => g.name.toLowerCase().includes(query));
    renderGames(filtered);
}

// Mirror System (Loads game on same address)
function openMirror(url) {
    document.getElementById('mirror-frame').src = url;
    document.getElementById('mirror-layer').style.display = 'block';
    document.getElementById('hub-ui').style.display = 'none';
}

function closeMirror() {
    document.getElementById('mirror-frame').src = '';
    document.getElementById('mirror-layer').style.display = 'none';
    document.getElementById('hub-ui').style.display = 'block';
}
