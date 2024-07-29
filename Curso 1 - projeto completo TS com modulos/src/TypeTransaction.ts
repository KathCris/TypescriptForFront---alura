interface Transaction {
  typeTransaction: TypeTransaction,
  valueTransaction: Number,
  dateTransaction: Date
}

//Enum
enum TypeTransaction {
  DEPOSITO = "DEPOSITO",
  TRANSFERENCIA = "TRANSFERENCIA",
  PAGAMENTO_BOLETO = "PAGAMENTO_BOLETO"
}