let mode = 'pickup'
let selected = null

const pickUpOrDropDisc = function(evt) {
    const tower = evt.currentTarget
    if (mode === 'pickup') {
        const disc = tower.lastElementChild
            //pickup
        if (disc) {
            console.log('you picked up disc ' + disc.id)
            selected = disc
            mode = 'drop'

        } else {
            console.log('no disc picked up')

        }
    } else {
        //drop
        console.log('you dropped the disc on ' + tower.id)
        tower.append(selected)
        mode = 'pickup'
    }
}

const tower1 = document.querySelector('#tower1')
const tower2 = document.querySelector('#tower2')
const tower3 = document.querySelector('#tower3')

tower1.addEventListener('click', pickUpOrDropDisc)
tower2.addEventListener('click', pickUpOrDropDisc)
tower3.addEventListener('click', pickUpOrDropDisc)