  
  const formTransaction = document.querySelector('.block-nova-transacao form') as HTMLFormElement;
  const inputTypeFormTransaction = formTransaction.querySelector("#tipoTransacao") as HTMLSelectElement;
  const inputValueFormTransaction = formTransaction.querySelector("#valor") as HTMLInputElement;
  const inputDateFormTransaction = formTransaction.querySelector("#data") as HTMLInputElement;


formTransaction.addEventListener('submit', function(event) {
  event.preventDefault();
  
  if(!inputTypeFormTransaction.value || !inputValueFormTransaction.value || !inputDateFormTransaction.value) {
      alert('preencha todos os campos obrigatorios!');
      return;
  }

  
  const convertNoFormatteMoney = removeFormatterMoney(moneyValue.textContent)
  const currentBalance = Number(convertNoFormatteMoney)
  let valueBalance: number = 0

  let valueTypeTransaction: TypeTransaction = inputTypeFormTransaction.value as TypeTransaction

  const newTransaction: Transaction = {
      typeTransaction: valueTypeTransaction,
      valueTransaction: Number(inputValueFormTransaction.value),
      dateTransaction: new Date(inputDateFormTransaction.value)
  }

  
  if(newTransaction.typeTransaction === TypeTransaction.DEPOSITO) {
      valueBalance = currentBalance + Number(newTransaction.valueTransaction) 

      console.log('currentBalance', currentBalance)
      console.log('newTransaction.valueTransaction', newTransaction.valueTransaction)
      console.log('valueBalance', valueBalance)

  } else if (newTransaction.typeTransaction === TypeTransaction.TRANSFERENCIA) {
          valueBalance = currentBalance - Number(newTransaction.valueTransaction) 
      
  } else if (newTransaction.typeTransaction === TypeTransaction.PAGAMENTO_BOLETO) {
          valueBalance = currentBalance - Number(newTransaction.valueTransaction) 
  }

  
  moneyValue.textContent = formatterMoney(valueBalance)

  formTransaction.reset();
})
