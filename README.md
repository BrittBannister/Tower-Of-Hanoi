                   TOWER OF HANOI 
        BRITTNEY BANNISTER && CHRISTY BODNAR
                        PLAN        

1. Way to select disc from the top of tower
        1. attach a click handler to pick up top disc of each tower
                tower.addEventListener('click',function)
                tower.lastElementChild (to pick up the top disc only from each tower)
2. Way to move disc from tower to tower
        1. click handler on each tower - utilize like above ***
        2. compare size of disc to drop vs top disc of current tower
            *Want to make sure we have the top disc. (tower.lastElChild)
                a. if disc is smaller, add disc to top of current tower
                        Compare widths by:
                                disc1.dataset.width < disc3.dataset.width
                b. to add to current tower:
                        tower.appendChild(disc)
3. Check for winning conditions
        1. all discs in tower 3
                1. get number of disc in tower
                        tower3.childElementCount === 4
                2. possible if/else statement^^^
                3. alert box "you won"? something fun!

