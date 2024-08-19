import { formatterDate } from "../utils/Formatter.js";


const elementDateToDay = document.querySelector('.block-saldo time') as HTMLElement;


export function getActualDate () {
  if (elementDateToDay) {
    const dateToDay = new Date()

    console.log('dateToDay', dateToDay)
  
   return elementDateToDay.textContent = formatterDate(dateToDay, 'long')
  
  }
}