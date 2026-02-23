// Sample Game Data (You can later connect this to a real API)
const games = [
    { name: "Roblox", icon: "https://web.cloudmoonapp.com/favicon.ico", url: "https://web.cloudmoonapp.com/" },
    { name: "Free Fire", icon: "https://web.cloudmoonapp.com/favicon.ico", url: "https://web.cloudmoonapp.com/" },
    { name: "Genshin", icon: "https://web.cloudmoonapp.com/favicon.ico", url: "https://web.cloudmoonapp.com/" }
];

function showSection(section) {
    const hub = document.querySelector('.hub-card');
    const display = document.getElementById('game-list-container');
    
    if (section === 'games') {
        hub.style.display = 'none';
        display.style.display = 'block';
        renderGames();
    } else {
        hub.style.display = 'block';
        display.style.display = 'none';
    }
}

function renderGames() {
    const grid = document.getElementById('games-grid');
    grid.innerHTML = games.map(game => `
        <div class="game-item">
            <img src="${game.icon}" alt="${game.name}">
            <div style="font-size:0.8rem; margin:5px 0;">${game.name}</div>
            <button class="play-small" onclick="launch('${game.url}')">PLAY</button>
        </div>
    `).join('');
}

function launch(url) {
    // This keeps Google Login working by opening a new window
    window.open(url, '_blank', 'width=1000,height=600');
}

function login() {
    // Direct login to the main site
    window.open('https://web.cloudmoonapp.com/', '_blank');
}
