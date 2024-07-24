type TypeStyleDate = 'defualt' | 'long'


export function formatterDate (date: Date, typeStyle: TypeStyleDate) {
  const dateFormatted = new Date(date)

  if (typeStyle === 'defualt') {
    dateFormatted.toLocaleString("pt-br")
  } else if (typeStyle === 'long') {
    dateFormatted.toLocaleString("pt-br", 
      {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      }
    )
  }

  return dateFormatted.toString()
}


export function formatterMoney  (value: number) {
  const valueFormated = value.toLocaleString('pt-br', {currency: 'BRL', style: "currency"})

  return valueFormated.toString()
}

