const game = () =>{
    let pScore=0;
    let cScore=0;
    
    // Start the Game
    const startGame= () =>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match =  document.querySelector(".match");

        playBtn.addEventListener("click", ()=> {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    // play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand=document.querySelector('.player-hand');
        const computerHand =document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = "";
            });
        });
        // Computer options 
        const computerOptions = ['rock', 'paper' , 'scissors'];

        options.forEach(option =>{
            option.addEventListener('click', function(){
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    //call compareHands 
                compareHands(this.textContent, computerChoice);
                //update images
                playerHand.src = `./${this.textContent}.png`;
                computerHand.src = `./${computerChoice}.png`;
                }, 2000)

                // Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });

    }

    // Score
    const upadateScore = () =>{
        const playerScore =document.querySelector('.player-score p');
        const computerScore =document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    
    // Winning
    const compareHands = (playerChoice, computerChoice) => {
        //update text
        const winner=document.querySelector('.winner');
        //check for tie
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie";
            return;
        }

        // Check for rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors')
            {
                winner.textContent = 'Player Wins';
                pScore++;
                upadateScore();
                return;
            }
            else{
                winner.textContent = 'Computer Wins';
                cScore++;
                upadateScore();
                return;
            }
        }

        //check for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors')
            {
                winner.textContent = 'Computer Wins';
                cScore++;
                upadateScore();
                return;
            }
            else{
                winner.textContent = 'Player Wins';
                pScore++;
                upadateScore();
                return;
            }
        }

        //check for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock')
            {
                winner.textContent = 'Computer Wins';
                cScore++;
                upadateScore();
                return;
            }
            else{
                winner.textContent = 'Player Wins';
                pScore++;
                upadateScore();
                return;
            }
        }
    }

    // To call the inner Function
    startGame();
    playMatch();
};

// start the game function
game();