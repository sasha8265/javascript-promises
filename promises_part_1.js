const baseURL = "http://numbersapi.com/"
const randomTrivia = "random/trivia"


let fiveRandomNumbers = []
for (let i = 0; i < 5; i++) {
    fiveRandomNumbers.push(Math.round(Math.random() * 500))
}
console.log(fiveRandomNumbers)


let fiveRandomFacts = []
for (let i = 0; i < fiveRandomNumbers.length; i++) {
        fiveRandomFacts.push(
            axios.get(`http://numbersapi.com/${fiveRandomNumbers[i]}`)
        );
    }

console.log(fiveRandomFacts)



// Promise.all(fourPokemonPromises)
//     .then(pokemonArr => (
//         pokemonArr.forEach(p => console.log(p.name))
//     ))
//     .catch(err => console.log(err));