import { Transaction, TypeTransaction } from "../types/TypeTransaction.js";
import countNewTransaction from "./countNewTransaction.js";

  
  const formTransaction = document.querySelector('.block-nova-transacao form') as HTMLFormElement;
  const inputTypeFormTransaction = formTransaction.querySelector("#tipoTransacao") as HTMLSelectElement;
  const inputValueFormTransaction = formTransaction.querySelector("#valor") as HTMLInputElement;
  const inputDateFormTransaction = formTransaction.querySelector("#data") as HTMLInputElement;


formTransaction.addEventListener('submit', async function(event) {
  event.preventDefault();
  
  if(!inputTypeFormTransaction.value || !inputValueFormTransaction.value || !inputDateFormTransaction.value) {
      alert('preencha todos os campos obrigatorios!');
      return;
  }


  let valueTypeTransaction: TypeTransaction = inputTypeFormTransaction.value as TypeTransaction

  const newTransaction: Transaction = {
      typeTransaction: valueTypeTransaction,
      valueTransaction: Number(inputValueFormTransaction.value),
      dateTransaction: new Date(inputDateFormTransaction.value)
  }

  await countNewTransaction.registerNewTransaction(newTransaction)

  formTransaction.reset();
})
