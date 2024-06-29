
const balanceValue = 3000

const moneyValue = document.querySelector('.saldo-valor .valor');

const formTransaction = document.querySelector('.block-nova-transacao form');

moneyValue.textContent = balanceValue

console.log('formTransaction', formTransaction)
console.log('moneyValue', moneyValue)



formTransaction.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('teste') 
    
    console.log('formTransaction', formTransaction)

    console.log('event', event)

    
    const inputTypeFormTransaction = formTransaction.querySelector("#tipoTransacao")
    const inputValueFormTransaction = formTransaction.querySelector("#valor")
    const inputDateFormTransaction = formTransaction.querySelector("#data")
    
    if(!inputTypeFormTransaction.value || !inputValueFormTransaction.value || !inputDateFormTransaction.value) {
        alert('preencha todos os campos obrigatorios!');
        return;
    }

    console.log('inputTypeFormTransaction', inputTypeFormTransaction.value)
    console.log('inputValueFormTransaction', inputValueFormTransaction.value)
    console.log('inputDateFormTransaction', inputDateFormTransaction.value)




    const newTransaction = {
        typeTransaction : inputTypeFormTransaction.value,
        valueTransaction : inputValueFormTransaction.value,
        dateTransaction : inputDateFormTransaction.value
    }

    console.log('newTransaction', newTransaction)
    
    if(newTransaction.typeTransaction === "Depósito") {
        const valueBalance = Number(newTransaction.valueTransaction)
        console.log('moneyValue type', typeof moneyValue)

        moneyValue.textContent += valueBalance
    }

    formTransaction.reset();
})





