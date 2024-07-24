// import { formatterDate, formatterMoney } from "./Formatter";

const balanceValue: number = 3000

const moneyValue = document.querySelector('.saldo-valor .valor') as HTMLElement;
const elementDateToDay = document.querySelector('.block-saldo time') as HTMLElement;


moneyValue.textContent = balanceValue.toString()

if (elementDateToDay) {
  const dateToDay = new Date()

  elementDateToDay.textContent = dateToDay.toLocaleString("pt-br", { 
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
      year: "numeric"
    }
  )

}
 

