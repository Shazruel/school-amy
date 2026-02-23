const games = [
    { id: 1, name: "Genshin Impact", icon: "https://web.cloudmoonapp.com/favicon.ico", url: "/app/" },
    { id: 2, name: "Roblox", icon: "https://web.cloudmoonapp.com/favicon.ico", url: "/app/" },
    // Use "/app/" as the URL so Netlify proxies it instead of redirecting
];

function renderGames(data) {
    const list = document.getElementById('gameList');
    list.innerHTML = data.map(game => `
        <div class="game-card">
            <img src="${game.icon}" alt="${game.name}">
            <div style="font-size: 0.7rem; margin-top: 5px;">${game.name}</div>
            <button class="play-btn" onclick="openMirror('${game.url}')">PLAY NOW</button>
        </div>
    `).join('');
}

function openMirror(url) {
    const frame = document.getElementById('mirror-frame');
    // We set the source to our own subdomain path to keep the URL consistent
    frame.src = url; 
    document.getElementById('mirror-layer').style.display = 'block';
    document.getElementById('hub-ui').style.display = 'none';
}

function closeMirror() {
    const frame = document.getElementById('mirror-frame');
    frame.src = 'about:blank'; // Clears the game session when closing
    document.getElementById('mirror-layer').style.display = 'none';
    document.getElementById('hub-ui').style.display = 'block';
}

renderGames(games);
