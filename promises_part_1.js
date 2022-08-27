let myNumber = 12;
let fiveNumbers = [8, 60, 31, 15, 72]
const baseURL = "http://numbersapi.com/";
// const randomTrivia = "random/trivia"


//1
$.getJSON(`${baseURL}${myNumber}?json`)
    .then(data => {
        console.log(data)
        console.log(data.text)
        console.log(myNumber)
        $("#question-1").append(`<h2 class="card-title text-primary">#${myNumber}</h2>`)
        $("#question-1").append(`<p class="card-text text-secondary">${data.text}</p>`)
    })


//2
for (num of fiveNumbers) {
    $.getJSON(`${baseURL}${num}?json`)
        .then(data => {
            console.log(data)
            $("#question-2").append(
                `<div class="my-4 card" id="card-${data.number}">
                    <div class="card-body">
                        <h2 class="card-title text-primary">#${data.number}</h2>
                        <p class="card-text text-secondary">${data.text}</p>
                    </div>
                </div>`)
        })
}





// $.getJSON(`${baseURL}${fiveNumbers}?json`)
    
    // .then(facts => {
    //     facts.forEach(data => $("#card-1").append(`<h2>${data.number}</h2>`));
    // });



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
