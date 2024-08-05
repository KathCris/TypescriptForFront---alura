import { formatterDate } from "../utils/Formatter.js";
const elementDateToDay = document.querySelector('.block-saldo time');
export function getActualDate() {
    if (elementDateToDay) {
        const dateToDay = new Date();
        return elementDateToDay.textContent = formatterDate(dateToDay, 'long');
    }
}
