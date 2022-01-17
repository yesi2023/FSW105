const readlineSync = require('readline-sync');

const playerName = readlineSync.question('May I have your name? ');

readlineSync.question('Hello ' + playerName + ', Welcome to MIITOPIA! A fantasy world with wonders and monsters all around! Youre in a town called Greenhorne amd your mission is to complete quests and combat`. Press Enter to begin.');

const evilGuys = ['Butterfly Boss', 'Blue Cobra', 'Yeti'];
const supplies = ['Hero Fan', 'Sorcerer Wand', 'Kimono Robe', 'Steel Claws'];
var prize = [];
let playerHealth = 30;
const options = ['Walk', 'Exit', 'Print'];
let pickUP = supplies[Math.floor(Math.random() * supplies.length)];

function game(){
    const attackPower = Math.floor(Math.random() * (5 - 4 + 3) +5);
    const evilGuy = evilGuys[Math.floor(Math.random() * evilGuys.length)];
    let evilGuysHealth = 30;
    const evilGuysPower = Math.floor(Math.random() * (5 - 3 + 2) + 5);

    const index = readlineSync.keyInSelect(options, 'What will you do next?');

    if (options[index] == 'Exit') {
        return playerHealth = 0;
    } else if (options[index] == 'Print') {
        console.log(playerName + ': \n' + playerHealth + '\nSupplies: ' + pickUP);
    } else if (options[index] === 'Walk'){
        let key = Math.random();
        if (key <= .3) {
            console.log('Walking....');
        } else if (key >= .3) {
            console.log(evilGuy + ' appeared.');

            while(evilGuysHealth > 0 && playerHealth > 0) {

                const player = readlineSync.question('What do you want to do next? Enter "r" to run or "a" to attack: ');

                switch (player){
                    case 'r': //runawy
                        const run = Math.random();
                        if (run < .5) {
                            console.log('Good Grief!! Before you faint ' + evilGuy + ' attacks you with: ' + evilGuysPower);
                        } else {
                            console.log('You Ran Away!!');
                            break;
                        }
                    case 'a': //if attack is chosen
                        evilGuysHealth -= attackPower;
                        console.log('You attacked ' + evilGuy + ' with ' + attackPower + ' attack power');

                        playerHealth -= evilGuysPower;
                        console.log('Enemy just attacked you with:  ' + evilGuysPower + ' attack power');
                        
                        if (evilGuysHealth <= 0) {
                            console.log('You knocked out ' + evilGuy + '.\n' + evilGuy + ' left you ' + pickUP + ' YOU WIN!');
                                let loot = Math.random();
                                if (loot <= .3){
                                    prize.push(pickUP);
                                } else if(playerHealth <= 0){
                                    console.log(evilGuy + ' has knocked you out you have now, fainted!. OH NOO, GAME OVER!');
                                }
                        }
                }
            }
        }
    }
}

while (playerHealth > 0){
    playerRestore = function(){
        playerActive = true;
        playerHealth = 30;
    };
    playerRestore();
    game();
}