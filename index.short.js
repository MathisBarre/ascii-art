const characters = 'abcdefghijklmnopqrstuvwxyz?'
const letterWidth = parseInt(readline())
const nbLines = parseInt(readline())
const textToDisplay = readline()
const emptyArray = []
const arrayOfLines = []
for (let i = 0; i < characters.length; i++) { emptyArray.push([]) }
for (let i = 0; i < nbLines; i++) { arrayOfLines.push(readline()) }
arrayOfLines.forEach((line) => {
  line = line.split('')
  for (let i = 0; i < characters.length; i++) {
    const result = line.splice(0, letterWidth)
    emptyArray[i].push(result.join(''))
  }
})
for (let i = 0; i < emptyArray[0].length; i++) {
  let totalString = ''
  for (let y = 0; y < textToDisplay.length; y++) {
    const letter = textToDisplay[y].toLowerCase()
    const letterIndex = (characters.indexOf(letter) !== -1) ? characters.indexOf(letter) : characters.length - 1
    totalString += emptyArray[letterIndex][i]
  }
  console.log(totalString)
}
