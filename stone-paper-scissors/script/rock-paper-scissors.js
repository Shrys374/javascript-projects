let score = JSON.parse(localStorage.getItem('score'))

      if (score === null) 
      {
        score = {
          Wins: 0,
          Losses: 0,
          Ties: 0
        }
      };
      updateScoreElement();


      //This function will autoplay the game every second.

      let isAutoPlaying = false;

      let intervalId;

      function autoPlay(){
        if (!isAutoPlaying) {
          intervalId = setInterval(function(){
            const playerMove = pickComputerMove();
            playGame(playerMove);
          },1000);
          isAutoPlaying = true;
          
        } else {
          clearInterval(intervalId);
          isAutoPlaying = false;
        }
      }



      //Play game function
      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        // Compare moves to get the result
        if (playerMove === 'scissors') {

          if (computerMove === 'rock') {
            result = 'You lose.'
          } else if (computerMove === 'paper') {
            result = 'You Win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.'
          }


        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You Win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.'
          } else if (computerMove === 'scissors') {
            result = 'You lose.'
          }


        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.'
          } else if (computerMove === 'scissors') {
            result = 'You Win.'
          }
        }


        // Update the score
        if (result === 'You Win.') {
          score.Wins += 1;
        } else if (result === 'You lose.') {
          score.Losses += 1;
        } else if (result === 'Tie.') {
          score.Ties += 1;
        }


        // To store locally in browser ram(PCs ram)
        localStorage.setItem('score', JSON.stringify(score));

        // To update the score on the page.(called function)
        updateScoreElement();

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = `You
        <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        Computer`;
      }

        // Display the result
        /*
        alert(`You Picked ${playerMove} Computer Picked ${computerMove}. ${result}
  Wins: ${score.Wins}, Loses: ${score.Losses}, Ties ${score.Ties}`);
        */
      

      // To update the score on the page.
      function updateScoreElement() {
        document.querySelector('.js-score')
          .innerHTML = `Wins: ${score.Wins}, Loses: ${score.Losses}, Ties ${score.Ties}`;
      }

      // Computer randomly selects a Move
      function pickComputerMove() {
        const randomNumber = Math.random();
        let computerMove = "";

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = "rock";
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = "paper";
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = "scissors";
        }

        return computerMove;
      }