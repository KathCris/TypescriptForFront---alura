type TypeStyleDate = 'defualt' | 'long'


function formatterDate (date: Date, typeStyle: TypeStyleDate) {
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


function formatterMoney  (value: number) {
  const valueFormated = value.toLocaleString('pt-br', {currency: 'BRL', style: "currency"})

  return valueFormated.toString()
}


function removeFormatterMoney (valueFormatted: string) {
  let removeFormatter = valueFormatted.substring(3)
  removeFormatter = removeFormatter.replace(/^R\$ /, '').replace(/,00$/, '').replace(/\./g, '')

  return removeFormatter
}

