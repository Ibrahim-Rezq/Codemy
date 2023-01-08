// helper functions for global use

/**
 * format number with commas
 * @param num 
 * @returns {string} formatted number
 */
export function formatNumber (number : number | undefined) : string {
    if(number === undefined) {
        return "you must provide number to format";
    }
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

/**
 * format currency 
 * @param number 
 * @param localas 
 * @param currency 
 * @returns {string} formatted currency
 */
export function formatCurrency(number : number, localas : string, currency : string) : string {
    return new Intl.NumberFormat(localas, 
        { 
            style: 'currency',
            currency: currency,
            
        }).format(number);
}

export function minutesToHoursMinutes(minutesToFormat : number | undefined) : string {
    if(minutesToFormat == undefined) {
        return "you must specify mintues";
    }
    const hours = Math.floor(minutesToFormat / 60);
    const minutes = minutesToFormat % 60;
    return `${hours}h ${minutes}m`
}