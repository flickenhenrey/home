// ADD YOUR ANIME HERE
const animeList = [
    {
        title: 'Chainsaw Man',
        description: 'cool',
        image: 'images/dogchainsaw.png',
        url: 'https://flickenhenrey.github.io/coolanime/',
        episodes: 12
    },
    // Add more anime:
    // {
    //     title: 'Another Anime',
    //     description: 'Description here',
    //     image: 'images/anotheranime.png',
    //     url: 'https://flickenhenrey.github.io/anotheranime/',
    //     episodes: 24
    // },
];

const animeListEl = document.getElementById('anime-list');

function loadAnime() {
    animeListEl.innerHTML = '';

    animeList.forEach(anime => {
        const card = document.createElement('a');
        card.className = 'anime-card';
        card.href = anime.url;
        card.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}" class="anime-image">
            <div class="anime-info">
                <div class="anime-title">${anime.title}</div>
                <div class="anime-description">${anime.description}</div>
                <div class="anime-meta">
                    <span>📺 ${anime.episodes} Episode${anime.episodes !== 1 ? 's' : ''}</span>
                </div>
            </div>
        `;
        animeListEl.appendChild(card);
    });
}

loadAnime();
