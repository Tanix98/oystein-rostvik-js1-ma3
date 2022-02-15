const key = "0da38fff62ac41cda60963a363a82df7";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${key}`;

const dataContainer = document.querySelector(".data");

async function callApi(){
    const response = await fetch(url);
    const data = await response.json();
    const profileData = data.results;

    dataContainer.innerHTML = "";
    
    for(let i = 0; i < 8; i++){
        dataContainer.innerHTML += `<div class="game-info"><p class="title-text">Game title:</p>${profileData[i].name} <p class="rating-text">Rating:</p> ${profileData[i].rating} <p class="tag-amount-text">Number of tags:</p> ${profileData[i].tags.length}</div>`;
    }
}

callApi();