const formTransaction = document.querySelector('.block-nova-transacao form');
const inputTypeFormTransaction = formTransaction.querySelector("#tipoTransacao");
const inputValueFormTransaction = formTransaction.querySelector("#valor");
const inputDateFormTransaction = formTransaction.querySelector("#data");
formTransaction.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!inputTypeFormTransaction.value || !inputValueFormTransaction.value || !inputDateFormTransaction.value) {
        alert('preencha todos os campos obrigatorios!');
        return;
    }
    const convertNoFormatteMoney = removeFormatterMoney(moneyValue.textContent);
    const currentBalance = Number(convertNoFormatteMoney);
    let valueBalance = 0;
    let valueTypeTransaction = inputTypeFormTransaction.value;
    const newTransaction = {
        typeTransaction: valueTypeTransaction,
        valueTransaction: Number(inputValueFormTransaction.value),
        dateTransaction: new Date(inputDateFormTransaction.value)
    };
    if (newTransaction.typeTransaction === TypeTransaction.DEPOSITO) {
        valueBalance = currentBalance + Number(newTransaction.valueTransaction);
        console.log('currentBalance', currentBalance);
        console.log('newTransaction.valueTransaction', newTransaction.valueTransaction);
        console.log('valueBalance', valueBalance);
    }
    else if (newTransaction.typeTransaction === TypeTransaction.TRANSFERENCIA) {
        valueBalance = currentBalance - Number(newTransaction.valueTransaction);
    }
    else if (newTransaction.typeTransaction === TypeTransaction.PAGAMENTO_BOLETO) {
        valueBalance = currentBalance - Number(newTransaction.valueTransaction);
    }
    moneyValue.textContent = formatterMoney(valueBalance);
    formTransaction.reset();
});
