//Carnival Gift Shop Project
//Coded by Ravinder Singh

let giftList = [{
    "ID": 1, "name": "Teddy Bear", "cost": 10
}, {
    "ID": 2, "name": "Big Red Ball", "cost": 5
}, {
    "ID": 3, "name": "Huge Bear", "cost": 50
}, {
    "ID": 4, "name": "Candy", "cost": 8
}, {
    "ID": 5, "name": "Stuffed Tiger", "cost": 15
}, {
    "ID": 6, "name": "Stuffed Dragon", "cost": 30
}, {
    "ID": 7, "name": "Skateboard", "cost": 100
}, {
    "ID": 8, "name": "Toy Car", "cost": 25
}, {
    "ID": 9, "name": "Basketball", "cost": 20
}, {
    "ID": 10, "name": "Scary Mask", "cost": 75
}];

const input = require("sync-input");

//This message will be displayed in the beginning.
function startupMessage() {
    console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
    console.log("Hello friend! Thank you for visiting the carnival!");
    console.log("Here's the list of gifts:");
    console.log("");
}

//This function prints the list of gifts.
function printList() {
    //console.log('\n\n\n');
    for (let i = 0; i < giftList.length; i++) {
        console.log(giftList[i].ID + "- " + giftList[i].name + ", Cost: " + giftList[i].cost + " tickets");
    }
    console.log(" ");
}

//This functions asks user for their input
function askUser() {

    console.log("What do you want to do?");
    console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");
}

startupMessage();
printList();

function getMenuOption() {
    let option = input();
    let verifiedOption;
    if ((!isNaN(option)) && (option < 6 && option > 0)) {
        verifiedOption = option;
        return verifiedOption;
    } else {
        console.log("Please enter a valid number!");
        console.log(" ");
        return -1;
    }
}

function isNum() {
    let option = input();
    let verifiedOption;

    if (!isNaN(option)) {
        verifiedOption = option;
        return verifiedOption;
    } else {
        console.log("Please enter a valid number!\n");
        //console.log("");
        return -1;
    }
}

let userSelection = 0;
let numOfTicket = 0;
let isRunning = true;
while (isRunning) {
    switch (userSelection) {
        case "1":
            if (giftList.length === 0) {
                console.log("Wow! There are no gifts to buy.")
                console.log("");
            } else {
                console.log("Enter the number of the gift you want to get:");
                let giftNum = isNum()
                if (giftNum === -1) {
                    break;
                } else {
                    if (!(giftList.find(item => item.ID == giftNum))) {
                        console.log("There is no gift with that number!\n")
                    } else {
                        const found = giftList.find(item => item.ID == giftNum);
                        if (found.cost > numOfTicket) {
                            console.log("You don't have enough tickets to buy this gift.")
                            console.log("Total tickets: " + numOfTicket);
                            console.log("");
                        } else {
                            console.log("Here you go, one " + found.name + "!");
                            numOfTicket = numOfTicket - found.cost;
                            giftList.splice(giftList.indexOf(found), 1);
                            console.log("Total tickets: " + numOfTicket);
                            console.log(" ");
                        }
                    }
                }
            }
            break;
        case "2":
            console.log("Enter the ticket amount:");
            let addTicket = input();
            if (isNaN(addTicket) || !(addTicket >= 0 && addTicket < 1001)) {
                console.log("Please enter a valid number between 0 and 1000.");
                console.log(" ");
            } else {
                numOfTicket += Number(addTicket);
                console.log("Total tickets: " + numOfTicket);
                console.log(" ");
            }
            break;
        case "3":
            console.log("Total tickets: " + numOfTicket);
            console.log(" ");
            //askUser();
            //userSelection = getMenuOption();
            break;
        case "4":
            console.log("Here's the list of gifts:");
            console.log("");
            printList();
            if (giftList.length === 0) {
                console.log("Wow! There are on gifts to buy.")
                console.log(" ");
            }
            //askUser();
            //userSelection = getMenuOption();
            break;
        case "5":
            console.log("Have a nice day!");
            isRunning = false;
            break;
        default:
            break;
    }
    if (isRunning) {
        askUser();
        userSelection = getMenuOption();
    }
}
