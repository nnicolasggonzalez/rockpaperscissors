const game = ()=> {
    let uScore=0;
    let cScore=0;
    
    const beginGame = ()=> {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
        

        playBtn.addEventListener('click',()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });

    };

    const playMatch =() =>{
        const options = document.querySelectorAll('.options button');
        const userHand = document.querySelector('.user-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            })
        })

        const computerOptions = ["rock", "paper", "scissors"];
       
        options.forEach(option => {
            option.addEventListener("click", function(){
                
                setTimeout(()=>{                
                userHand.src=`./images/${this.textContent}.png`;
                computerHand.src=`./images/${computerChoice}.png`;
                
                compareHands(this.textContent,computerChoice);
                },2000)

                const computerNumber= Math.floor(Math.random() * 3);
                const computerChoice=computerOptions[computerNumber];

                userHand.style.animation = "shakeUser 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };
    function scoreKeeper(){
        if (uScore===5 || cScore===5){
            winner.textContent = 'Game over';
            uScore===0;
            cScore===0;
            return;
    
        }

    };
    const updateScore = () =>{
        const userScore=document.querySelector('.user-score p');
        const computerScore=document.querySelector('.computer-score p');
        userScore.textContent=uScore;
        computerScore.textContent=cScore;
        scoreKeeper();
    };


    
    const compareHands = (userChoice, computerChoice) =>{
        const winner=document.querySelector('.winner');
        if (userChoice === computerChoice){
            winner.textContent = "It's a tie";
            return;
        }
        if (userChoice === 'rock'){
            if (computerChoice==='scissors'){
                winner.textContent = 'Player wins'
                uScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
        }
        if (userChoice === 'paper'){
            if (computerChoice==='rock'){
                winner.textContent = 'Player wins'
                uScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
        }
        if (userChoice === 'scissors'){
            if (computerChoice==='paper') {
                winner.textContent = 'Player wins'
                uScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
        }


    }



    // Calling the above functions
    beginGame();
    playMatch();
    };
// Starts the game
game();