// 1. Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).

const baseURL = "http://deckofcardsapi.com/api/deck";

// draw cards from a new shuffled deck:
// http://deckofcardsapi.com/api/deck/new/draw/?count=1

//1
$.getJSON(`${baseURL}/new/draw/?count=1`)
    .then(data => {
        console.log(data)
        let card = data.cards[0]
        console.log(`${ card.value } of ${ card.suit }`)
        // console.log(data.text)
        // console.log(myNumber)
        
    })