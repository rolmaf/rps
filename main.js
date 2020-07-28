function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

let userScore = localStorage.getItem("userScore");
let botScore = localStorage.getItem("botScore");
botScore == null ? botScore = 0 : localStorage.getItem("botScore");
userScore == null ? userScore = 0 : localStorage.getItem("userScore");


document.querySelector(".score-bot").textContent = `${botScore} points`;
document.querySelector(".score-user").textContent = `${userScore} points`;

let rps = ["rock", "paper", "scissors"];


document.querySelector(".players__user").addEventListener("click", event => {

    if (event.target.classList.contains("user-img")) {
        if (document.querySelector(".active") != undefined) {
            document.querySelector(".active").classList.remove("active");
        };

        if (document.querySelector(".bot-active") != undefined) {
            document.querySelector(".bot-active").classList.remove("bot-active");
        };

        event.target.classList.add("active");
        let userTurn = event.target.classList[2];
        rps = shuffle(rps);
        let botTurn = rps[0];

        document.querySelector(`.bot-${botTurn}`).classList.add("bot-active");

        if (botTurn === "rock" && userTurn === "scissors") {
            botScore++;
        } else if (botTurn === "rock" && userTurn === "paper") {
            userScore++;
        } else if (botTurn === "rock") {

        } else if (botTurn === "scissors" && userTurn === "paper") {
            botScore++;
        } else if (botTurn === "scissors" && userTurn === "rock") {
            userScore++;
        } else if (botTurn === "scissors") {

        } else if (botTurn === "paper" && userTurn === "rock") {
            botScore++;
        } else if (botTurn == "paper" && userTurn === "scissors") {
            userScore++;
        } else if (botTurn === "paper") {

        };
    };

    localStorage.setItem("botScore", botScore);
    localStorage.setItem("userScore", userScore);
    document.querySelector(".score-bot").textContent = `${botScore} points`;
    document.querySelector(".score-user").textContent = `${userScore} points`;
});



let { width, height }= screen;

if (width <= 745) {
    let userTitle = document.createElement("div");
    userTitle.className = `user-title title`;
    userTitle.innerHTML = `&#8593; User`;
    userTitle.style.marginLeft = "32px";

    let scoreUserEl = document.createElement("div");
    scoreUserEl.className = `score-user title`;
    scoreUserEl.innerHTML = `&#8595; ${userScore} points`;
    scoreUserEl.style.marginLeft = "20px";
    scoreUserEl.style.marginBottom = "27px";    

    document.querySelector(".score-user").parentElement.removeChild(document.querySelector(".score-user"));
    document.querySelector(".user-title").parentNode.removeChild(document.querySelector(".user-title"));
    document.querySelector(".players__user").prepend(scoreUserEl);
    document.querySelector(".players__user").append(userTitle);

    let botTitle = document.createElement("div");
    botTitle.className = `bot-title title`;
    botTitle.innerHTML = `&#8593; Bot`;
    botTitle.style.marginLeft = "30px";
    botTitle.style.marginTop = "32px"

    let scoreBotEl = document.createElement("div");
    scoreBotEl.className = `score-bot title`;
    scoreBotEl.innerHTML = `&#8595; ${botScore} points`;
    scoreBotEl.style.marginLeft = "20px";
    scoreBotEl.style.marginBottom = "17px";    

    document.querySelector(".score-bot").parentElement.removeChild(document.querySelector(".score-bot"));
    document.querySelector(".bot-title").parentNode.removeChild(document.querySelector(".bot-title"));
    document.querySelector(".players__bot").prepend(scoreBotEl);
    document.querySelector(".players__bot").append(botTitle);
    document.querySelector(".players__bot").style.marginTop = "95px";
};