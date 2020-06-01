// set input validation rules
let max = 26 // will be the maximum height of board
let min = 1 // will be the minimum height of board
let validImages = ["newman", "interceptor", "cooper", "X"]

const validLetter = (letter) => {
    let letters = /^[A-Za-z]+$/
    if(letter.match(letters)){ return true }
    // TODO: add just single letter validation
}

const validNumber = (number) => {
    if (isNaN(number)) { return false }
    if (number <= max && number >= min) { return true }
}

const validImage = (imageName) => {
    return validImages.includes(imageName)
}

module.exports = {
    validLetter,
    validNumber,
    validImage
}