type TypeStyleDate = 'defualt' | 'long'


function formatterDate (date: Date, style: TypeStyleDate) {

  if(style === 'defualt') {
    const formattedDate = date.toLocaleDateString('pt-BR')
    return formattedDate.toString()
    
  } else if (style === 'long') {
    const formattedDate = date.toLocaleDateString('pt-BR',  { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' })
    return formattedDate.toString()
    
  }
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

