// set input validation rules
let max = 26
let min = 1
let validImages = ["newman", "interceptor", "cooper", "X"]

const validLetter = (letter) => {
    let letters = /^[A-Za-z]+$/
    if(letter.match(letters)){ return true }
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