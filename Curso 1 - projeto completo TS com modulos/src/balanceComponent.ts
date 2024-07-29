const balanceValue: number = 3000

const moneyValue = document.querySelector('.saldo-valor .valor') as HTMLElement;
const elementDateToDay = document.querySelector('.block-saldo time') as HTMLElement;


moneyValue.textContent = formatterMoney(balanceValue)

if (elementDateToDay) {
  const dateToDay = new Date()

  elementDateToDay.textContent = formatterDate(dateToDay, 'long')

}
 

