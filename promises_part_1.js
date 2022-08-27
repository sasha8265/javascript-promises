let myNumber = 12;
let fiveNumbers = [8, 60, 31, 15, 72]
const baseURL = "http://numbersapi.com/";
// const randomTrivia = "random/trivia"


//1
$.getJSON(`${baseURL}${myNumber}?json`)
    .then(data => {
        console.log(data)
        console.log(data.text)
    })


//2
$.getJSON(`${baseURL}${fiveNumbers}?json`)
    .then(data => {
        console.log(data)
        
    })



// let randomFactData = []
// for (let i = 0; i < fiveNumbers.length; i++) {
//     randomFactData.push(
//         axios.get(`http://numbersapi.com/random/trivia?json`)
//     );
// }

// fiveRandomFacts = []

// Promise.all(randomFactData)
//     .then(randomFactData => (
//         randomFactData.forEach(numFact => {
//             let factData = [
//                 numFact.data.number,
//                 numFact.data.text
//             ]
//             fiveRandomFacts.push(factData)
//         })
//     ))
//     .catch(err => console.log(err));
    
// console.log(fiveRandomFacts)



