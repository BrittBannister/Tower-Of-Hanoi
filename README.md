                   TOWER OF HANOI 
        BRITTNEY BANNISTER && CHRISTY BODNAR
                        PLAN        

1. Way to select disc from the top of tower
        1. attach a click handler to pick up top disc of each tower
                tower.addEventListener('click',function)
                tower.lastElementChild 
                        allows us to pick up the top disc only from each tower
                When we click a tower, we are picking up a disk


2. Way to move disc from tower to tower
        1. click handler on each tower - utilize like above ***
                same ^^ to pick up && drop
        2. compare size of disc to drop vs top disc of current tower
            *Want to make sure we have the top disc. (tower.lastElChild)
                a. if disc is smaller, add disc to top of current tower
                        Compare widths by:
                                disc1.dataset.width < disc3.dataset.width
                b. to add to current tower:
                        tower.appendChild(disc)
        if statement.....if(disc)....if theres a disc then we fun the condition....if no disc, then we can go ahead and
        drop the current disc. OH! We need a way to store the current disc....and maybe to store what position we are in? 
                        let current = ?
                        let mode? let disc =? <<<<Something like that. 


3. Check for winning conditions
        1. all discs in tower 3
                1. get number of disc in tower
                        tower3.childElementCount === 4
                2. possible if/else statement^^^
                3. alert box "you won"? something fun!

QUESTIONS:

Do we need two functions? One for picking up and one for dropping? Or can we store those in a variable and just reference them throughout one function...in if/else statements or something.