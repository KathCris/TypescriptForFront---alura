import { TypeTransaction } from "../types/TypeTransaction.js"
import { removeFormatterMoney } from "../utils/Formatter.js"
import { attValueMoney, getValueMoney } from "./balanceComponent.js"


const countNewTransaction = {
    
  registerNewTransaction (newTransaction) {
    const convertNoFormatteMoney = removeFormatterMoney(getValueMoney())
    const currentBalance = Number(convertNoFormatteMoney)
    let valueBalance: number = 0


    if(newTransaction.typeTransaction === TypeTransaction.DEPOSITO) {
        valueBalance = currentBalance + Number(newTransaction.valueTransaction) 
    } 
    else if (newTransaction.typeTransaction === TypeTransaction.TRANSFERENCIA) {
            valueBalance = currentBalance - Number(newTransaction.valueTransaction) 

    } 
    else if (newTransaction.typeTransaction === TypeTransaction.PAGAMENTO_BOLETO) {
            valueBalance = currentBalance - Number(newTransaction.valueTransaction) 
    }

    attValueMoney(valueBalance)

  }

}

export default countNewTransaction