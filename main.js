let mode = 'pickup'
let selected = null //null because we dont have a disc selected when we first start the game

const pickUpOrDropDisc = function(evt) { //refactored this into one function, rather than using if for three seperate tower functions.
    const tower = evt.currentTarget
    if (mode === 'pickup') {
        const disc = tower.lastElementChild
        if (disc) {
            console.log('you picked up disc ' + disc.id)
            selected = disc
            pickedUp = selected
            mode = 'drop'
        } else {
            console.log('no disc picked up')
        } ///////////////////////////////////////////

    } else if (pickedUp.dataset.width < tower.lastElementChild.dataset.width) {
        tower.appendChild(pickedUp)
    }
    /////////////////////////////////////////////
    else { //drop
        console.log('you dropped the disc on ' + tower.id)
        tower.append(selected) //this will only work if we are in drop mode (selected)
        mode = 'pickup'
    }
    // let pickedUp = disc
    // if (pickedUp.dataset.width > tower.lastElementChild.dataset.width) {
    //     console.log('try again')
    // } else {
    //     tower.appendChild(pickedUp)
    // }
    winning();
}


function winning() {
    if (tower1.lastElementChild === null && tower2.lastElementChild === null) { //if tower1 and tower2 are empty-all disc are in tower 3
        console.log('you won')
        alert('you won')
    }
}

const tower1 = document.querySelector('#tower1')
tower1.addEventListener('click', pickUpOrDropDisc)
const tower2 = document.querySelector('#tower2')
tower2.addEventListener('click', pickUpOrDropDisc)
const tower3 = document.querySelector('#tower3')
tower3.addEventListener('click', pickUpOrDropDisc)