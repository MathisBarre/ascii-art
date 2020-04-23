/**
 * Puzzle ASCII ART by codeingame.com
 *     _    ____   ____ ___ ___      _    ____ _____
 *    / \  / ___| / ___|_ _|_ _|    / \  |  _ \_   _|
 *   / _ \ \___ \| |    | | | |    / _ \ | |_) || |
 *  / ___ \ ___) | |___ | | | |   / ___ \|  _ < | |
 * /_/   \_\____/ \____|___|___| /_/   \_\_| \_\|_|
 *
 * ✅ JavaScript Standard Style
 * ✅ Documented functions
 * ✅ Functional programming
 */

/**
 * Create an array with a defined length and elements
 * * Test passed
 * @param {number} length Length of the desired array
 * @param {any} elt Element to include into the array
 */
function createArray (length, elt) {
  const array = []
  for (let i = 0; i < length; i++) {
    array.push(elt.slice())
  }
  return array
}

/**
 * Create an array of lines by reading nbLines lines
 * * Test passed
 * @param {number} nbLines Number of lines to read
 */
function linesToArray (nbLines) {
  const array = []
  for (let i = 0; i < nbLines; i++) {
    array.push(readline())
  }
  return array
}

/**
 * Return an nested array of letters
 * * Test passed
 * @param {Object[]} lines - The array of lines
 * @param {Object[]} array - A nested array with characters.length empty array
 * @param {string} characters - String of the characters
 * @param {number} letterWidth - The width of the ASCII letters
 */
function createArrayOfLetters (lines, array, characters, letterWidth) {
  lines.forEach((line) => {
    line = line.split('') // Transform to an array
    for (let i = 0; i < characters.length; i++) { // For each characters part of the line
      const result = line.splice(0, letterWidth) // Take this part (and remove it from the string)
      array[i].push(result.join('')) // And push this part as a string in the array
    }
  })
  return array
}

/**
 * Display a string of letters
 * * Test passed
 * @param {string} textToDisplay String to display
 * @param {Object[]} arrayOfASCIILetters An ASCII array of letter
 * @param {string} characters - A string representing all the characters
 */
function bulkPrint (textToDisplay, arrayOfASCIILetters, characters) {
  for (let i = 0; i < arrayOfASCIILetters[0].length; i++) { // For each line
    let totalString = ''
    for (let y = 0; y < textToDisplay.length; y++) { // For each letter
      const letter = textToDisplay[y].toLowerCase()
      const letterIndex = (characters.indexOf(letter) !== -1) ? characters.indexOf(letter) : characters.length - 1
      totalString += arrayOfASCIILetters[letterIndex][i] // Construct the text line by line
    }
    console.log(totalString)
  }
}

/****************************************************************/
/** *********************** APPLICATION **************************/
/****************************************************************/

(() => {
  const characters = 'abcdefghijklmnopqrstuvwxyz?'

  const letterWidth = parseInt(readline())
  const nbLines = parseInt(readline())
  const textToDisplay = readline()

  const emptyArray = createArray(characters.length, [])
  const arrayOfLines = linesToArray(nbLines)

  const arrayOfASCIILetters = createArrayOfLetters(arrayOfLines, emptyArray, characters, letterWidth)
  bulkPrint(textToDisplay, arrayOfASCIILetters, characters)
})()
