// define all games as an object
const gamesData = {
  "Assassin's Creed Valhalla": {
    details: {
      rate: 4.6,
      price: '$59.99',
      genre: 'Action RPG',
      downloads: 19000000,
      releaseYear: 2020,
      developer: 'Ubisoft Montreal',
      imgPath: 'assets/img/game01.jpeg'
    },
    brief: 'Viking-themed installment in the Assassin\'s Creed series.'
  },
  "Assassin's Creed Mirage": {
    details: {
      rate: 4.3,
      price: '$49.99',
      genre: 'Action-Adventure',
      downloads: 5000000,
      releaseYear: 2023,
      developer: 'Ubisoft Bordeaux',
      imgPath: 'assets/img/game01.jpeg'
    },
    brief: 'Return to classic AC gameplay with a focus on stealth in 9th-century Baghdad.'
  },
  "Need For Speed": {
    details: {
      rate: 4.7,
      price: '$59.99',
      genre: 'Racing',
      downloads: 8000000,
      releaseYear: 2021,
      developer: 'Capcom',
      imgPath: 'assets/img/game01.jpeg'
    },
    brief: 'First-person horror experience continuing Ethan Winters\' story.'
  },
  "Call of Duty: Modern Warfare": {
    details: {
      rate: 4.5,
      price: '$59.99',
      genre: 'Action',
      downloads: 30000000,
      releaseYear: 2019,
      developer: 'Infinity Ward',
      imgPath: 'assets/img/game01.jpeg'
    },
    brief: 'Reboot of the iconic Modern Warfare series with realistic combat.'
  },
  "Call of Duty: Black Ops Cold War": {
    details: {
      rate: 4.2,
      price: '$59.99',
      genre: 'Action',
      downloads: 25000000,
      releaseYear: 2020,
      developer: 'Treyarch',
      imgPath: 'assets/img/game01.jpeg'
    },
    brief: 'Cold War-era shooter with campaign and multiplayer modes.'
  },
  "Battlefield 2042": {
    details: {
      rate: 3.8,
      price: '$59.99',
      genre: 'Action',
      downloads: 15000000,
      releaseYear: 2021,
      developer: 'DICE',
      imgPath: 'assets/img/game01.jpeg'
    },
    brief: 'Futuristic large-scale warfare with 128-player battles.'
  },
  "Resident Evil Village": {
    details: {
      rate: 4.7,
      price: '$59.99',
      genre: 'Action',
      downloads: 8000000,
      releaseYear: 2021,
      developer: 'Capcom',
      imgPath: 'assets/img/game01.jpeg'
    },
    brief: 'First-person horror experience continuing Ethan Winters\' story.'
  },
};

// Then convert the object to a Map
const gameInfoMap = new Map(Object.entries(gamesData));

// Your access examples will work the same way
console.log(gameInfoMap.get('Assassin\'s Creed Valhalla').details.releaseYear); // 2020
console.log(gameInfoMap.get('Call of Duty: Modern Warfare').brief); // "Reboot of the iconic..."
console.log(gameInfoMap.get('Resident Evil Village').details.genre); // "Survival Horror"

const cardsContainer = document.querySelector('.game-cards-grid');

function buildUI(gameData, gameName) {
    const card = document.createElement('article');
    card.classList.add('card');

    const price = document.createElement('span');
    price.classList.add('price');
    price.textContent = gameData.details.price;

    const rate = document.createElement('span');
    rate.classList.add('rate');
    rate.textContent = gameData.details.rate;
    const genre = document.createElement('span');
    genre.classList.add('genre');
    genre.textContent = gameData.details.genre;
    const cardImgContainer = document.createElement('div');
    cardImgContainer.classList.add('card-img');
    const gameImg = document.createElement('img');
    gameImg.classList.add('game-img');
    gameImg.src = gameData.details.imgPath;
    gameImg.alt = gameName;
    const cardCaption = document.createElement('div');
    cardCaption.classList.add('card-caption');
    const cardGameName = document.createElement('p')
    cardGameName.classList.add('game-card-name');
    cardGameName.textContent = gameName;
    
    cardImgContainer.appendChild(gameImg);
    cardCaption.appendChild(genre);
    cardCaption.appendChild(cardGameName);

    // Assemble the card
    card.appendChild(price);
    card.appendChild(rate);
    card.appendChild(cardImgContainer);
    card.appendChild(cardCaption);
    cardsContainer.appendChild(card);
}

gameInfoMap.forEach(buildUI);


let filterButtons = document.querySelectorAll(".controls span");

filterButtons.forEach(btn => {
  btn.addEventListener("click", e => {
    console.log(e.target.dataset.filter);
    filterButtons.forEach(b => b.classList.remove("active"))
    e.target.classList.add("active")

    if (e.target.dataset.filter == 'all') {
      cardsContainer.innerHTML = "";
      gameInfoMap.forEach(buildUI);
      return;
    }

    let filteredGames = Object.entries(gamesData).filter(([key, obj]) => obj.details.genre.toLowerCase().includes(e.target.dataset.filter));
    const filteredGamesMap = new Map(filteredGames);
    cardsContainer.innerHTML = "";
    filteredGamesMap.forEach(buildUI);
  })
})