let fighters = ["bryan", "anna", "king", "bob", "panda","steve", "kazuya", "noctis", "negan", "alisa", "armor-king", "zafina"]

// Recreate the Fighters grid using this function

const fighterUrl = (name) => {
    return `https://tk7.tekken.com/assets/images/fighters-final/${name}-standard/thumbnail-headshot.png`
}

let fightersGrid = document.querySelector('#fighters-div')
console.log('fighters grid', fighters)

fighters.forEach((fighter) => {
    let div = document.createElement('div')
    div.classList.add('fighter-thumb')
    let img = document.createElement('img')
    img.src = fighterUrl(fighter)
    img.style.height = '100px'
    img.style.width = '100px'
    div.append(img)
    fightersGrid.append(img)
})