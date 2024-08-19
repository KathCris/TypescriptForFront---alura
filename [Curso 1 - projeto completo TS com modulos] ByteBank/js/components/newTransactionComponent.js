import countNewTransaction from "./countNewTransaction.js";
const formTransaction = document.querySelector('.block-nova-transacao form');
const inputTypeFormTransaction = formTransaction.querySelector("#tipoTransacao");
const inputValueFormTransaction = formTransaction.querySelector("#valor");
const inputDateFormTransaction = formTransaction.querySelector("#data");
formTransaction.addEventListener('submit', async function (event) {
    event.preventDefault();
    if (!inputTypeFormTransaction.value || !inputValueFormTransaction.value || !inputDateFormTransaction.value) {
        alert('preencha todos os campos obrigatorios!');
        return;
    }
    let valueTypeTransaction = inputTypeFormTransaction.value;
    const newTransaction = {
        typeTransaction: valueTypeTransaction,
        valueTransaction: Number(inputValueFormTransaction.value),
        dateTransaction: new Date(inputDateFormTransaction.value)
    };
    await countNewTransaction.registerNewTransaction(newTransaction);
    formTransaction.reset();
});
