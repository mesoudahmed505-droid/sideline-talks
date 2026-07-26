const matchesData = [
    { homeTeam: "Arsenal", homeCrest: "https://crests.football-data.org/57.png", awayTeam: "Chelsea", awayCrest: "https://crests.football-data.org/61.png", score: "2 - 1", status: "LIVE 68'", type: "live" },
    { homeTeam: "Man City", homeCrest: "https://crests.football-data.org/65.png", awayTeam: "Liverpool", awayCrest: "https://crests.football-data.org/64.png", score: "0 - 0", status: "LIVE 22'", type: "live" },
    { homeTeam: "Man United", homeCrest: "https://crests.football-data.org/66.png", awayTeam: "Tottenham", awayCrest: "https://crests.football-data.org/73.png", score: "VS", status: "Tomorrow 16:30", type: "upcoming" },
    { homeTeam: "Aston Villa", homeCrest: "https://crests.football-data.org/58.png", awayTeam: "Newcastle", awayCrest: "https://crests.football-data.org/67.png", score: "VS", status: "Aug 15, 19:00", type: "upcoming" },
    { homeTeam: "Real Madrid", homeCrest: "https://crests.football-data.org/86.png", awayTeam: "Barcelona", awayCrest: "https://crests.football-data.org/81.png", score: "3 - 1", status: "Full Time", type: "ft" }
];

const standingsData = [
    { rank: 1, name: "Arsenal", crest: "https://crests.football-data.org/57.png", played: 38, gd: "+44", pts: 85 },
    { rank: 2, name: "Man City", crest: "https://crests.football-data.org/65.png", played: 38, gd: "+42", pts: 78 },
    { rank: 3, name: "Man United", crest: "https://crests.football-data.org/66.png", played: 38, gd: "+19", pts: 71 },
    { rank: 4, name: "Aston Villa", crest: "https://crests.football-data.org/58.png", played: 38, gd: "+7", pts: 65 },
    { rank: 5, name: "Liverpool", crest: "https://crests.football-data.org/64.png", played: 38, gd: "+10", pts: 60 },
    { rank: 6, name: "Chelsea", crest: "https://crests.football-data.org/61.png", played: 38, gd: "+6", pts: 52 }
];

const playersData = [
    { rank: 1, name: "Erling Haaland", team: "Man City", stat: "27 Goals" },
    { rank: 2, name: "Bukayo Saka", team: "Arsenal", stat: "16 Assists" },
    { rank: 3, name: "Mohamed Salah", team: "Liverpool", stat: "22 Goals" },
    { rank: 4, name: "Cole Palmer", team: "Chelsea", stat: "21 Goals" }
];

const newsData = [
    { title: "Tactical Breakdown: High-Press Midfields", category: "Analysis", desc: "An in-depth look at European pressing triggers.", image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80", date: "July 26, 2026" },
    { title: "Summer Transfers: Premier League Targets", category: "Transfers", desc: "Key player movements for the upcoming season.", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=600&q=80", date: "July 25, 2026" }
];

function loadMatches() {
    const container = document.getElementById('matches-container');
    if (!container) return;
    container.innerHTML = '';
    matchesData.forEach(m => {
        let statusClass = m.type === 'live' ? 'status-live' : (m.type === 'upcoming' ? 'status-upcoming' : 'status-ft');
        container.innerHTML += `<div class="match-card"><div class="match-team home"><span>${m.homeTeam}</span><img src="${m.homeCrest}"></div><div class="match-details"><div class="match-score">${m.score}</div><div class="match-status ${statusClass}">${m.status}</div></div><div class="match-team away"><img src="${m.awayCrest}"><span>${m.awayTeam}</span></div></div>`;
    });
}

function loadStandings() {
    const tableBody = document.getElementById('table-body');
    if (!tableBody) return;
    tableBody.innerHTML = '';
    standingsData.forEach(item => {
        tableBody.innerHTML += `<tr><td><b>${item.rank}</b></td><td class="team-cell"><img class="team-crest" src="${item.crest}"><span>${item.name}</span></td><td>${item.played}</td><td>${item.gd}</td><td><b>${item.pts}</b></td></tr>`;
    });
}

function loadPlayers() {
    const scorersBody = document.getElementById('scorers-body');
    if (!scorersBody) return;
    scorersBody.innerHTML = '';
    playersData.forEach(player => {
        scorersBody.innerHTML += `<tr><td><b>${player.rank}</b></td><td style="text-align: left; font-weight: bold;">${player.name}</td><td style="text-align: left;">${player.team}</td><td style="color:#4efa8b; font-weight:bold;">${player.stat}</td></tr>`;
    });
}

function renderNews() {
    const container = document.getElementById('news-container');
    if (!container) return;
    container.innerHTML = '';
    newsData.forEach(news => {
        container.innerHTML += `<div class="news-card"><img src="${news.image}"><div class="news-content"><span class="news-tag">${news.category}</span><div class="news-title">${news.title}</div><div class="news-desc">${news.desc}</div><div class="news-date">📅 ${news.date}</div></div></div>`;
    });
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    const activeTab = document.getElementById(`tab-${tabName}`);
    const activeNav = document.getElementById(`nav-${tabName}`);
    if (activeTab) activeTab.classList.add('active');
    if (activeNav) activeNav.classList.add('active');
    if (tabName === 'matches') loadMatches();
    if (tabName === 'table') loadStandings();
    if (tabName === 'stats') loadPlayers();
    if (tabName === 'news') renderNews();
}

document.addEventListener("DOMContentLoaded", () => loadMatches());
loadMatches();

