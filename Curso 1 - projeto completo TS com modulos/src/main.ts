
const balanceValue: number = 3000

const moneyValue = document.querySelector('.saldo-valor .valor') as HTMLElement;

const formTransaction = document.querySelector('.block-nova-transacao form') as HTMLFormElement;

moneyValue.textContent = balanceValue.toString()

formTransaction.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputTypeFormTransaction = formTransaction.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValueFormTransaction = formTransaction.querySelector("#valor") as HTMLInputElement;
    const inputDateFormTransaction = formTransaction.querySelector("#data") as HTMLInputElement;
    
    if(!inputTypeFormTransaction.value || !inputValueFormTransaction.value || !inputDateFormTransaction.value) {
        alert('preencha todos os campos obrigatorios!');
        return;
    }

    const newTransaction = {
        typeTransaction : inputTypeFormTransaction.value,
        valueTransaction : inputValueFormTransaction.value,
        dateTransaction : inputDateFormTransaction.value
    }


    const currentBalance = Number(moneyValue.textContent)
    let valueBalance: number = 0
    
    if(newTransaction.typeTransaction === "Depósito") {
        valueBalance = currentBalance + Number(newTransaction.valueTransaction) 
    } else if (newTransaction.typeTransaction === "Transferência") {
            valueBalance = currentBalance - Number(newTransaction.valueTransaction) 
        
    } else if (newTransaction.typeTransaction === "Pagamento de Boleto") {
            valueBalance = currentBalance - Number(newTransaction.valueTransaction) 
    }

    
    moneyValue.textContent = valueBalance.toString()

    formTransaction.reset();
})





