const ALPHA = 'abcdefghijklmnopqrstuvwxyz'
const CAPITALS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NUMBERS = '0123456789'
const SYMBOLS = '!@#$%^&*_-+='

/**
 *
 *
 * @param {number} [length=8]
 * @param {*} hasNumbers
 * @param {*} hasSymbols
 * @param {*} hasCapitals
 * @return {*} 
 */
const createPassword = (length = 8, hasNumbers, hasSymbols, hasCapitals) => {
    let chars = ALPHA
    hasNumbers ? (chars += NUMBERS) : ''
    hasSymbols ? (chars += SYMBOLS) : ''
    hasCapitals ? (chars += CAPITALS) : ''
    return generatePassword(length, chars)
}

/**
 *
 *
 * @param {*} length
 * @param {*} chars
 * @return {*} 
 */
const generatePassword = (length, chars) => {
    let password = ''
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return password
}

module.exports = createPassword