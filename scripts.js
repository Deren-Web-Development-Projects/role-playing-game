
function getDiceRollArray(diceCount) {
    let newDiceRolls = [];
    for (let i = 0; i < diceCount; i++) {
        newDiceRolls.push(Math.floor(Math.random() * 6) + 1);
    }
    return newDiceRolls;
}

function getDiceHtml(diceCount) {
    return getDiceRollArray(diceCount).map(function(num) {
        return `<div class="dice">${num}</div>`
    }).join('')
}

const hero = {
    id: "hero",
    name: "Wizard",
    avatar: "images/wizard.png",
    health: 60,
    diceCount: 3
}

const monster = {
    id: "monster",
    name: "Orc",
    avatar: "images/orc.jpg",
    health: 10,
    diceCount: 1
}

function renderCharacter(data) {
    const {id, name, avatar, health, diceCount} = data;
    const diceHtml = getDiceHtml(diceCount);

    document.getElementById(id).innerHTML = `
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container">
                ${diceHtml}
            </div>
        </div>   
    `
}

// Create the Hero card
renderCharacter(hero);

// Create the monster card
renderCharacter(monster);

console.log('test');