let FighterDiv = document.querySelector('.fighter-grid')
const fighterUrl = (name) => {
    return `https://tk7.tekken.com/assets/images/fighters-final/${name}-standard/thumbnail-headshot.png`
}

const renderFighterCard = (name) => {
    const card = document.createElement('div')
    const p = document.createElement('p')
    const img = document.createElement('img')
    card.className = card;
    card.id = name
    p.textContent = name
    img.src = fighterUrl(name)
    card.append(img, p)
    FighterDiv.append(card)
}

let fighters = ['devil-jin', 'anna', 'bob']

fighters.forEach(renderFighterCard)