const MoneyBox = (coins) =>{
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`Money Box $${saveCoins}`);
}

MoneyBox(5);
MoneyBox(10);

//------------------------------------

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);