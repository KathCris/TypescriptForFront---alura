import { Transaction, TypeTransaction } from "./TypeTransaction";


const formTransaction = document.querySelector('.block-nova-transacao form') as HTMLFormElement;

formTransaction.addEventListener('submit', function(event) {
  event.preventDefault();

  const inputTypeFormTransaction = formTransaction.querySelector("#tipoTransacao") as HTMLSelectElement;
  const inputValueFormTransaction = formTransaction.querySelector("#valor") as HTMLInputElement;
  const inputDateFormTransaction = formTransaction.querySelector("#data") as HTMLInputElement;
  
  if(!inputTypeFormTransaction.value || !inputValueFormTransaction.value || !inputDateFormTransaction.value) {
      alert('preencha todos os campos obrigatorios!');
      return;
  }

  let currentBalance = Number(moneyValue.textContent)
  let valueBalance: number = 0

  let valeuTypeTransaction: TypeTransaction = inputTypeFormTransaction.value as TypeTransaction

  const newTransaction: Transaction = {
      typeTransaction: valeuTypeTransaction,
      valueTransaction: Number(inputValueFormTransaction.value),
      dateTransaction: new Date(inputDateFormTransaction.value)
  }

  
  if(newTransaction.typeTransaction === TypeTransaction.DEPOSITO) {
      valueBalance = currentBalance + Number(newTransaction.valueTransaction) 
  } else if (newTransaction.typeTransaction === TypeTransaction.TRANSFERENCIA) {
          valueBalance = currentBalance - Number(newTransaction.valueTransaction) 
      
  } else if (newTransaction.typeTransaction === TypeTransaction.PAGAMENTO_BOLETO) {
          valueBalance = currentBalance - Number(newTransaction.valueTransaction) 
  }

  
  moneyValue.textContent = valueBalance.toString()

  formTransaction.reset();
})
