import { formatterDate, formatterMoney } from "../utils/Formatter.js";

const balanceValue: number = 3000

const moneyValue = document.querySelector('.saldo-valor .valor') as HTMLElement;



export function getValueMoney () {
  return moneyValue.textContent = formatterMoney(balanceValue)
}

export function attValueMoney (newValue) {
  return moneyValue.textContent = formatterMoney(newValue)
}

 
