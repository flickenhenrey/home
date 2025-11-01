// ADD YOUR ANIME HERE
const animeList = [
    {
        title: 'Chainsaw Man',
        description: 'cool',
        image: 'images/dogchainsaw.png',
        url: 'https://flickenhenrey.github.io/coolanime/',
        episodes: 12
    },
    
     {
        title: 'The Boondocks',
        description: 'hi',
        image: 'images/boondock.png',
        url: 'https://flickenhenrey.github.io/bondock/',
        episodes: 55
     },

         {
        title: 'Chainsaw Man – The Movie: Reze Arc',
        description: 'reze woman',
        image: 'csmovie/.png',
        url: 'https://flickenhenrey.github.io/chainsawguymovie/',
        episodes: 1
     },
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
