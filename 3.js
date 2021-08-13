'use strict';

const diceE= document.querySelector('.dice');
const btnnew= document.querySelector('.btn--new ');
const btnroll= document.querySelector('.btn--roll');
const btnhold= document.querySelector('.btn--hold');
const score0El = document.getElementById("score--0");
const score1El = document.getElementById('score--1');
const player0E1= document.querySelector(".player--0");
const player1E1 = document.querySelector(".player--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

let playing ,scores,currentscore,activeplayer;

const restarting = function(){
    playing = true;
    scores = [0, 0];
    currentscore = 0;
    activeplayer = 0;
    
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    
    diceE.classList.add("hidden");
    player0E1.classList.remove("player--winner");
    player1E1.classList.remove("player--winner");
    player0E1.classList.add("player--active");
    player1E1.classList.remove("player--active");
};

restarting();

btnnew.addEventListener("click", restarting);

const switchplayer= function (){
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentscore = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    player0E1.classList.toggle("player--active");
    player1E1.classList.toggle("player--active");
}

btnroll.addEventListener('click', function(){
    if (playing) {
            const di = Math.trunc(Math.random() * 6) + 1;
            diceE.classList.remove("hidden");
            diceE.src = `dice-${di}.png`;

            if (di !== 1) {
              currentscore += di;
              document.getElementById(`current--${activeplayer}`).textContent =
                currentscore;
            } else {switchplayer();}
    }
});

btnhold.addEventListener('click', function(){
    if(playing) {
        scores[activeplayer] += currentscore;
        console.log(scores[activeplayer]);
        document.getElementById(`score--${activeplayer}`).textContent =
          scores[activeplayer];
        if (scores[activeplayer] >= 100) {
          playing = false;
          diceE.classList.add("hidden");
          document.querySelector(`.player--${activeplayer}`).classList.add("player--winner");
          //document.querySelector(`.player--${activeplayer}`).classList.remove("player--winner");
          } else {
              switchplayer();
            }
    }
})



