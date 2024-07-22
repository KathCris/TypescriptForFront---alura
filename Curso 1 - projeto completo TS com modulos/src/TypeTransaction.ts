export interface Transaction {
  typeTransaction: TypeTransaction,
  valueTransaction: Number,
  dateTransaction: Date
}

//Enum
export enum TypeTransaction {
  DEPOSITO = "Depósito",
  TRANSFERENCIA = "Transferência",
  PAGAMENTO_BOLETO = "Pagamento de Boleto"
}