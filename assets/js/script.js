var wins = 0;
var losses = 0;
var ties = 0;
var showWins = document.querySelector('#wins');
var showLosses = document.querySelector('#losses');
var showTies = document.querySelector('#ties');
var submitAnswer = document.querySelector('#submit');
var showComp = document.querySelector('#comp');


submitAnswer.addEventListener('click', function getComputerChoice() {
    var choices = ["rock", "paper", "scissors"];

    var compChoice = choices[Math.floor(choices.length * Math.random())];

    var userChoice = document.getElementById('user-input')
    .value
    .toLowerCase();
    
    showComp.textContent = "Computer chooses... " + compChoice + "!";

    if (userChoice === 'rock' && compChoice === 'scissors' ||
        userChoice === 'scissors' && compChoice === 'paper' ||
        userChoice === 'paper' && compChoice === 'rock') {
            alert('You win!');
            wins++;
            showWins.textContent = "Wins: " + wins;
        } else if (userChoice === 'rock' && compChoice === 'rock' ||
        userChoice === 'scissors' && compChoice === 'scissors' ||
        userChoice === 'paper' && compChoice === 'paper') {
            alert('Tie!');
            ties++;
            showTies.textContent = "Ties: " + ties;
        } else {
            alert('You lose!');
            losses++;
            showLosses.textContent = "Losses: " + losses;
        }
});


