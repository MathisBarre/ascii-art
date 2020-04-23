/**
 * 
 * Puzzle ASCII ART by codeingame.com
 *     _    ____   ____ ___ ___      _    ____ _____
 *    / \  / ___| / ___|_ _|_ _|    / \  |  _ \_   _|
 *   / _ \ \___ \| |    | | | |    / _ \ | |_) || |
 *  / ___ \ ___) | |___ | | | |   / ___ \|  _ < | |
 * /_/   \_\____/ \____|___|___| /_/   \_\_| \_\|_|
 * 
 */


/**
 * Create an array with a defined length and elements
 * @param {number} length Length of the desired array
 * @param {any} elt Element to include into the array
 */
function createArray(length, elt) {
    let array = []
    for (let i = 0 ; i < length ; i++) {
        array.push(elt)
    }
    return array
}

/**
 * Create an array of lines by reading nbLines lines
 * @param {number} nbLines Number of lines to read
 */
function createArrayOfLines(nbLines) {
    let array = []
    for (let i = 0; i < nbLines; i++) { 
        array.push(readline())
    }
    return array
}

/**
 * Return an nested array of letters
 * @param {Object[]} lines - The array of lines
 * @param {Object[]} array - A nested array with alphabet.length empty array
 * @param {string} alphabet - String of the alphabet
 * @param {number} letterWidth - The width of the ASCII letters
 */
function createArrayOfLetters(lines, alphabet, array, letterWidth) {
    lines.forEach((line) => {
        line = line.split("") // To array
        for (let i = 0; i < alphabet.length; i++) {
            result = line.splice(0, letterWidth)
            array[i].push(result.join(""))
        }
    })
    return array
}

/**
 * Display a letter
 * @param {string} letter - The letter to log
 * @param {Object[]} arrayOfLetter - The ASCII array of letter
 */
function print(letter, arrayOfLetter) {
    if (letter.length > 1 || typeof letter != "string") console.error("ERROR : This is not a letter") 
    const index = alphabet.indexOf(letter)
    arrayOfLetter[index].forEach((line) => {
        console.log(line)
    })
}

/**
 * Display a string of letters
 * @param {string} str String to display
 * @param {Object[]} arrayOfLetter An ASCII array of letter
 */
function bulkPrint(str, arrayOfLetter) {
    for ( let i = 0 ; i < str.length ; i++ ) {
        letter = str[i]
        print(letter, arrayOfLetter)
    }
}

/***** MAIN ******/

(() => {
    // Variable
    const alphabet = "abcdefghijklmnopqrstuvwxyz?"

    const letterWidth = parseInt(readline());
    const letterHeight = parseInt(readline());
    const textToDisplay = readline();

    let emptyArray = createArray(alphabet.length, [])

    let arrayOfLine = createArrayOfLines(letterHeight)
    let arrayOfLetters = createArrayOfLetters(arrayOfLine, emptyArray, alphabet, letterWidth)

    print("m", arrayOfLetters)

})()