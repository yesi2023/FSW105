

var readlineSync = require('readline-sync'); // Must require to run in readline-sync
var playerName = readlineSync.question('May I have your name? ');  // First option player will see 


var welcomeMessage = `Howdy, ${playerName}, Welcome to The Code and Key Escape Room ----- Can you find the clues, solve the puzzle, and get out of the room in 30 minutes?! `;
console.log(welcomeMessage);


console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

var welcomeMessage = `PLAYER INSTRUCTIONS: \n You're locked in a room. \n In order to escape the room, you need to search and find the KEY to be able to open the door otherwise you will be stuck. \n Sounds like a simple task, right? NOT REALLY! \n But, be CAREFULL there's ancient traps hidden in the room that can be FATAL if activated! Please!!! BE CAREFUL and choose wisely! \n Goodluck, you will need it!! `;
console.log(welcomeMessage);



console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");


// Code to run the game

var isAlive = true;
var hasKey = false;

while(isAlive == true){
    const menuOptions = readlineSync.keyIn(' Enter 1 to Put hand in hole: \n Enter 2 to Find the key: \n Enter 3 to Open the door: ', {limit: '$<1-3>'});
    //console.log(menuOptions);
    //isAlive = false;
    if (menuOptions == 1){
        console.log(`Oh Noooo ${playerName}, you've ACTIVATED an ancient trap, you are now PERISHED. GAME IS NOW OVER!!!! :( `);
        isAlive = false;
    }
    else if (menuOptions == 2 && hasKey == false){
        //first time player chooses option 2
        console.log(` ${playerName}, you have found the key successfully! Proceed to menu option 3. `);
        hasKey = true; 
    }
    else if (menuOptions == 2 && hasKey == true){
        //Subsequent entry with option 2
        //Display a message that the player is waiting time and they need to proceed to option-3
        console.log(` ${playerName}, You have ALREADY found the key, STOP waisting your time. Please proceed to menu option 3 ASAP!! `);
    }
    else if (menuOptions == 3 && hasKey == false){
        //first time player chooses option 2, and has NOT found the key 
        console.log(` ${playerName}, Unfortunately, you don't have the key, please find the key ... than continue!`);
    }
    else if (menuOptions == 3 && hasKey == true){
        //player choose option 3 and has FOUND the key
        console.log(` ${playerName}, NO WAY! YOU FOUND THE KEY!!!, and were able to opened the exit door, successfully!! CONGRATULATIONS!!! YOU WIN and were able to ESCAPE!!! `);
        isAlive = false;
    }
}