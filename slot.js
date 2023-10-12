const prompt = require('prompt-sync')();

// deposit some money
const deposit = () => {
    while (true) {
        const depositAmount = prompt('Enter a deposit amount: ');
        const numberDepositAmount = parseFloat(depositAmount);
    
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log('Not a valid amount, try again.');
        } else {
            return numberDepositAmount;
        }
    }
}
// =======================

// get the number of lines to bet on
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt('Enter the number of lines to bet on (1-3): ');
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log('Invalid number of lines, try again.');
        } else {
            return numberOfLines;
        }
    }
}
// ========================

// collect the bet amount
const getBet = (balance, betLines) => {
    while (true) {
        const bet = prompt('Enter the  bet per line: ');
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / betLines) {
            console.log('Invalid bet amount, try again.');
        } else {
            return numberBet;
        }
    }
}
// =========================

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);