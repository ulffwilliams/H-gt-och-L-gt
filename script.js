let score = 0;
let attempts = 3;
let deck = generateDeck();
let lastCard = null;
let pickedCard = null;

function generateDeck() {

    let suites = ["&hearts;","&spades;","&clubs;","&diams;"]
    let deck = [];
    
    for (suite of suites) {
        
        for(let i = 2; i<=14; i++) {
            
            let val = "";
            
            if(i < 11) {
                val = i.toString()
            }
            else if(i === 11) {
                val = "J"
            } else if (i === 12){
                val = "D"
            } else if (i === 13) {
                val = "K"
            } else if (i === 14) {
                val = "A"
            }

            let card = {
                suite: suite,
                rank: i,
                value: val,
            }

            deck.push(card)
        }


    }

    return deck;
}

function pickCard(){

    let randomPos = Math.floor(Math.random()*deck.length)
    let card = deck.splice(randomPos, 1)[0];

    lastCard = pickedCard;
    pickedCard = card[0];

    renderCard(card[0])
}

function renderCard(card){

    let red = "";
    if(card.suite === "&hearts;" || card.suite === "&diams;"){
        red = "red"
    }

    let template = `
            <article class="card ${red}">
            <aside class="top"><span>${card.suite}</span>${card.value}</aside>
            <h1>${card.suite}</h1>
            <aside class="bottom"><span>${card.suite}</span>${card.value}</aside>
        </article>
    `;

    document.querySelector("main").innerHTML = "";
    document.querySelector("main").insertAdjacentHTML("afterbegin", template)

}

pickCard()

document.querySelector(".lower")
.addEventListener("click", () => {

    console.log("du gissade lägre.")

    pickCard();
    
    console.log(lastCard)
    console.log(pickedCard)
})

document.querySelector(".equal")
.addEventListener("click", () => {

    console.log("du gissade lika.")
})

document.querySelector(".higher")
.addEventListener("click", () => {

    console.log("du gissade högre.")
})