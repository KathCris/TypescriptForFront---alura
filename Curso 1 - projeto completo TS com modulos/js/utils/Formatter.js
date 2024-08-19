export function formatterDate(date, style) {
    if (style === 'defualt') {
        const formattedDate = date.toLocaleDateString('pt-BR');
        return formattedDate.toString();
    }
    else if (style === 'long') {
        const formattedDate = date.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' });
        return formattedDate.toString();
    }
}
export function formatterMoney(value) {
    const valueFormated = value.toLocaleString('pt-br', { currency: 'BRL', style: "currency" });
    return valueFormated.toString();
}
export function removeFormatterMoney(valueFormatted) {
    let removeFormatter = valueFormatted.substring(3);
    removeFormatter = removeFormatter.replace(/^R\$ /, '').replace(/,00$/, '').replace(/\./g, '');
    return removeFormatter;
}
