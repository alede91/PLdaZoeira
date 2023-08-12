const playerOneScore = document.querySelector('.player-one-score');
const playerTwoScore = document.querySelector('.player-two-score');
const playerThreeScore = document.querySelector('.player-three-score');
let object;
/*Fetching data */

async function fetchData(){
    const object = await fetch('json/players.json').then(response => response.json());
    return object;
};

/*Using the data fetched to update the score */

async function updateScore(){
    object = await fetchData();
    playerOneScore.innerText = object.allison.score;
    playerTwoScore.innerText = object.claudinho.score;
    playerThreeScore.innerText = object.dudu.score;
    console.log(object)
};

updateScore();
