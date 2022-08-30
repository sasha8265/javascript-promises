
const baseURL = "http://deckofcardsapi.com/api/deck";

// 1. Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).

$.getJSON(`${baseURL}/new/draw/?count=1`)
    .then(data => {
        // console.log(data)
        let card = data.cards[0]
        console.log("Answer to #1:")
        console.log(`${card.value} of ${card.suit}`);
    });


// 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck. Once you have both cards, console.log the values and suits of both cards.

let card1
$.getJSON(`${baseURL}/new/draw/`)
    .then(data => {
        // console.log(data)
        card1 = data.cards[0];
        let deckId = data.deck_id;
        return $.getJSON(`${baseURL}/${deckId}/draw/`)
    })
    .then(data => {
        let card2 = data.cards[0];
        let cards = [card1, card2]
        console.log("Answer to #2:")
        cards.forEach(function (card) {
            console.log(`${card.value} of ${card.suit}`);
        });
    });


//3
$(function () {
    let deckId
    let $btn = $('#get-card')
    let $cardBlock = $('#card-block')
    let $cardsLeft = $('#cards-left')

    $.getJSON(`${baseURL}/new/shuffle/`)
        .then(data => {
            deckId = data.deck_id;
        });

    $btn.on('click', function () {
        $.getJSON(`${baseURL}/${deckId}/draw/`)
            .then(data => {
                let imgSource = data.cards[0].image;
                let moveX = Math.random() * 50 - 20;
                let moveY = Math.random() * 50 - 20;
                $cardBlock.append(
                    $(`<img>`, {
                        src: imgSource,
                        css: {
                            transform: `translate(${moveX}px, ${moveY}px)`
                        }
                    })
                );
                return $.getJSON(`${baseURL}/${deckId}/`)
            .then(data => {
                cardsRemaining = data.remaining;
                console.log(cardsRemaining)
                $cardsLeft.text(cardsRemaining);
                if (data.remaining == 0) {
                    $btn.text("Start Over?")
                        .on('click', function () {
                        location.reload()
                    });
                };
            });
        });
    });
})
