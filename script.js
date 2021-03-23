let playerScore=0;
let computerScore=0;
function game(computerSelection){
for (let i=0; i<5; i++) {
    let choices=["Rock", "Paper", "Scissors"];
    let move = Math.floor(Math.random()* choices.length);
    let computerSelection= choices[move];
    let playerSelection=prompt('Please choose rock, paper, or scissors');
        if(playerSelection=='scissors'&&computerSelection=='Paper'){
            alert(`You win, ${playerSelection} beats ${computerSelection}`)
            ++playerScore;   
        }
        else if (playerSelection=='scissors'&&computerSelection=='Rock'){
            alert(`You lose this round, ${computerSelection} beats ${playerSelection}`)
            ++computerScore;           
        }
        else if (playerSelection=='scissors'&&computerSelection=='Scissors'){
            alert("Tie, no winner declared this round"); 
        }
        else if(playerSelection=='paper'&&computerSelection=='Rock'){
            alert(`You win this round, ${playerSelection} beats ${computerSelection}`)
            ++playerScore;
        }
        else if (playerSelection=='paper'&&computerSelection=='Scissors'){
            alert(`You lose this round, ${computerSelection} beats ${playerSelection}`)
            ++computerScore;
        }
        else if (playerSelection=='paper'&&computerSelection=='Paper'){
            alert("Tie, no winner declared this round");            
        }
        else if(playerSelection=='rock'&&computerSelection=='Scissors'){
            alert(`You win this round, ${playerSelection} beats ${computerSelection}`)
            ++playerScore;           
        }
        else if (playerSelection=='rock'&&computerSelection=='Paper'){
            alert(`You lose this round, ${computerSelection} beats ${playerSelection}`)
            ++computerScore;           
        }
        else if (playerSelection=='rock'&&computerSelection=='Rock'){
            alert("Tie this round, no winner declared");            
        }
}
if (playerScore>computerScore){
    alert(`You win, ${playerScore} to ${computerScore}`)
}
else {
    alert(`You lose, ${computerScore} to ${playerScore}`)

}
// return playerScore;          Do these need to be returned?...
// return computerScore;
// return playerSelection; 
// return computerSelection; 
}

 


console.log(game());