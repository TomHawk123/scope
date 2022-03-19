// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
// let y = 1

// for (let x = 1; x < cookies.length; x++) {
//     const currentCookie = cookies[x]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }


// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
//     return conjoinedWord
// }

// const conjoinedWord = conjunction("Master", "Card")
// console.log(conjoinedWord)





// const modSquad = {
//     members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
//         "series" : {
//         start: "1968",
//         end: "1973"
//     }
// }

// let HTMLRepresentation = `<h1>The Mod Squad</h1>`

// for (const member of modSquad.members) {
//     HTMLRepresentation += `<div>${member}</div>`
// }


// console.log(HTMLRepresentation)



const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

for (const location of locations) {

    if (location[1] > 2) {
        const invalidLocation = true
    } else {
        invalidLocation = false
    }

    if (invalidLocation) {
        console.log("This location is invalid")
    }
}