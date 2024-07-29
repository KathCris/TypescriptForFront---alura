const balanceValue = 3000;
const moneyValue = document.querySelector('.saldo-valor .valor');
const elementDateToDay = document.querySelector('.block-saldo time');
moneyValue.textContent = formatterMoney(balanceValue);
if (elementDateToDay) {
    const dateToDay = new Date();
    elementDateToDay.textContent = formatterDate(dateToDay, 'long');
}
