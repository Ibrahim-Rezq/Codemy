// helper functions for global use

export const convertToCurrency = (number: number) => {
    const currency = new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'EGP',
        minimumFractionDigits: 2,
    }).format(number)

    return currency
}
