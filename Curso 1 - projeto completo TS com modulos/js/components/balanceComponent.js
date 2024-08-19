import { formatterMoney } from "../utils/Formatter.js";
const balanceValue = 3000;
const moneyValue = document.querySelector('.saldo-valor .valor');
export function getValueMoney() {
    return moneyValue.textContent = formatterMoney(balanceValue);
}
export function attValueMoney(newValue) {
    return moneyValue.textContent = formatterMoney(newValue);
}
