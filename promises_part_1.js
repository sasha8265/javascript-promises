const baseURL = "http://numbersapi.com/"
const randomTrivia = "random/trivia"


let fiveNumbers = [1,2,3,4,5]

let fiveRandomFacts = []
for (let i = 0; i < fiveNumbers.length; i++) {
    fiveRandomFacts.push(
        axios.get(`http://numbersapi.com/random/trivia?json`)
    );
}


Promise.all(fiveRandomFacts)
    .then(fiveRandomFacts => (
        fiveRandomFacts.forEach(numFact => {
            console.log(numFact.data)
        })
    ))
    .catch(err => console.log(err));



