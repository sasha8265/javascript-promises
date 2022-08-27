let myNumber = 12;
let fiveNumbers = [8, 60, 31, 15, 72]
const baseURL = "http://numbersapi.com/";


//1
$.getJSON(`${baseURL}${myNumber}?json`)
    .then(data => {
        // console.log(data)
        // console.log(data.text)
        // console.log(myNumber)
        $("#question-1").append(`<h2 class="card-title text-primary">#${myNumber}</h2>`)
        $("#question-1").append(`<p class="card-text text-secondary">${data.text}</p>`)
    })


//2
for (num of fiveNumbers) {
    $.getJSON(`${baseURL}${num}?json`)
        .then(data => {
            // console.log(data)
            $("#question-2").append(
                `<div class="my-4 card" id="card-${data.number}">
                    <div class="card-body">
                        <h2 class="card-title text-primary">#${data.number}</h2>
                        <p class="card-text text-secondary">${data.text}</p>
                    </div>
                </div>`)
        })
}


//3
Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${baseURL}${myNumber}?json`)
    })
)
    .then(facts => {
        facts.forEach(data => $("#q-3-list").append(`<li class="card-text text-secondary mt-3">${data.text}</li>`));
    });


