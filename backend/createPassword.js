const alpha = 'abcdefghijklmnopqrstuvwxyz'
const capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*_-+='

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
    let chars = alpha
    hasNumbers ? (chars += numbers) : ''
    hasSymbols ? (chars += symbols) : ''
    hasCapitals ? (chars += capitals) : ''
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