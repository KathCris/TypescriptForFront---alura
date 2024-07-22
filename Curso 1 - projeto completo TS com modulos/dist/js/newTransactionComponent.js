import { TypeTransaction } from "./TypeTransaction";
const formTransaction = document.querySelector('.block-nova-transacao form');
formTransaction.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputTypeFormTransaction = formTransaction.querySelector("#tipoTransacao");
    const inputValueFormTransaction = formTransaction.querySelector("#valor");
    const inputDateFormTransaction = formTransaction.querySelector("#data");
    if (!inputTypeFormTransaction.value || !inputValueFormTransaction.value || !inputDateFormTransaction.value) {
        alert('preencha todos os campos obrigatorios!');
        return;
    }
    let currentBalance = Number(moneyValue.textContent);
    let valueBalance = 0;
    let valeuTypeTransaction = inputTypeFormTransaction.value;
    const newTransaction = {
        typeTransaction: valeuTypeTransaction,
        valueTransaction: Number(inputValueFormTransaction.value),
        dateTransaction: new Date(inputDateFormTransaction.value)
    };
    if (newTransaction.typeTransaction === TypeTransaction.DEPOSITO) {
        valueBalance = currentBalance + Number(newTransaction.valueTransaction);
    }
    else if (newTransaction.typeTransaction === TypeTransaction.TRANSFERENCIA) {
        valueBalance = currentBalance - Number(newTransaction.valueTransaction);
    }
    else if (newTransaction.typeTransaction === TypeTransaction.PAGAMENTO_BOLETO) {
        valueBalance = currentBalance - Number(newTransaction.valueTransaction);
    }
    moneyValue.textContent = valueBalance.toString();
    formTransaction.reset();
});
