type TypeStyleDate = 'defualt' | 'long'


export function formatterDate (date: Date, style: TypeStyleDate) {

  console.log('date', date)
  
  if(style === 'defualt') {
    const formattedDate = date.toLocaleDateString('pt-BR')
    console.log('formattedDate.toString()', formattedDate.toString())
    return formattedDate.toString()
    
  } else if (style === 'long') {
    const formattedDate = date.toLocaleDateString('pt-BR',  { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' })
    console.log('formattedDate.toString()', formattedDate.toString())
    return formattedDate.toString()
  }
}


export function formatterMoney  (value: number) {
  const valueFormated = value.toLocaleString('pt-br', {currency: 'BRL', style: "currency"})

  return valueFormated.toString()
}


export function removeFormatterMoney (valueFormatted: string) {
  let removeFormatter = valueFormatted.substring(3)
  removeFormatter = removeFormatter.replace(/^R\$ /, '').replace(/,00$/, '').replace(/\./g, '')

  return removeFormatter
}

