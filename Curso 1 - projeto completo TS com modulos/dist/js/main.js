
const balanceValue = 3000

const moneyValue = document.querySelector('.saldo-valor .valor');

const formTransaction = document.querySelector('.block-nova-transacao form');

moneyValue.textContent = balanceValue

formTransaction.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputTypeFormTransaction = formTransaction.querySelector("#tipoTransacao")
    const inputValueFormTransaction = formTransaction.querySelector("#valor")
    const inputDateFormTransaction = formTransaction.querySelector("#data")
    
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
    let valueBalance = 0
    
    if(newTransaction.typeTransaction === "Depósito") {
        valueBalance = currentBalance + Number(newTransaction.valueTransaction) 
    } else if (newTransaction.typeTransaction === "Transferência") {
            valueBalance = currentBalance - Number(newTransaction.valueTransaction) 
        
    } else if (newTransaction.typeTransaction === "Pagamento de Boleto") {
            valueBalance = currentBalance - Number(newTransaction.valueTransaction) 
    }

    
    moneyValue.textContent = valueBalance

    formTransaction.reset();
})





