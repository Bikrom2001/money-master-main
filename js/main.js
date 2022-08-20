function getInputElementById(InputElementId) {
    const foodField = document.getElementById(InputElementId);
    const FoodFieldString = foodField.value;
    const newFoodPrice = parseFloat(FoodFieldString);
    foodField.value = '';
    return newFoodPrice;
}

function getElementById(elementId, value) {
    const expensesTotalField = document.getElementById(elementId);
    const expensesTotalFieldString = expensesTotalField.innerText;
    const newExpensesTotal = parseFloat(expensesTotalFieldString);
    expensesTotalField.innerText = value;
    return newExpensesTotal;
}

function getBalanceInputElement(inputElement) {
    // Balance
    const incomeField = document.getElementById(inputElement);
    const incomeFieldString = incomeField.value;
    const newIncomeField = parseFloat(incomeFieldString);
    return newIncomeField;
}

function getBalanceNumberConvert(number) {
    // Remaining Balance
    const balanceTotalField = document.getElementById(number);
    const balanceTotalFieldString = balanceTotalField.innerText;
    const newBalance = parseFloat(balanceTotalFieldString);
    return newBalance;
}

document.getElementById('Calculat-btn').addEventListener('click', function () {

    // Expenses
    const FoodPriee = getInputElementById('food-input');
    const rentPrice = getInputElementById('rent-input');
    const clothesPrice = getInputElementById('Clothes-input');


    const totalExpenses = FoodPriee + rentPrice + clothesPrice;
    const expensesTotal = getElementById('expenses-total', totalExpenses);

    const newIncomeField = getBalanceInputElement('income-field');

    const totalBalance = newIncomeField - totalExpenses;
    getElementById('balance-total', totalBalance);

    if (isNaN(FoodPriee, rentPrice, clothesPrice)) {
        alert('type a Number');
    }
    if (FoodPriee < 0 || rentPrice < 0 || clothesPrice < 0) {
        alert('type a Number');
    }
    if (newIncomeField < totalExpenses) {
        alert('ইনকাম এর চাইতে বেশি খরচ করা যাবে না');
    }
})



// save 
document.getElementById('save-btn').addEventListener('click', function () {
    const savingField = getInputElementById('saving-field');

    // Balance
    const incomeTotalBalance = getBalanceInputElement('income-field')
    const save = (incomeTotalBalance / 100) * savingField;
   


    const previousBalance = getBalanceNumberConvert('balance-total');

    const newRamainingBalance = previousBalance - save;

    if (previousBalance < save) {
        alert('তোমার balance এর চাইতে বেশি সেইভ করতে পারবে না।');
    }
    else {
        const savingamount = getElementById('saving-amount', save);
        getElementById('ramaining-balance', newRamainingBalance);
    }

})