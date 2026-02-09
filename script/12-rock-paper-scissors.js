let score=JSON.parse(localStorage.getItem('score')) ||{
        wins: 0,
        losses:0,
        ties:0
      };
      updateScoreElement();
      /*
      if (!score){
        score ={
        wins: 0,
        losses:0,
        ties:0
        };
      }*/
     let isAutoPlaying= false;
     let intervalId;
       function autoPlay(){
        if(!isAutoPlaying){
          intervalId= setInterval(function() {
            const playerMove= pickCompMove();
            playGame(playerMove);}
            ,1000);
            isAutoPlaying=true;
        }else{
          clearInterval(intervalId);
          isAutoPlaying =false;
        
        }
          
            
        }

      function playGame(playerMove){
        const compMove =pickCompMove();

        let result ='';
        if(playerMove ==='scissors'){
          if(compMove=== 'rock'){
            result = 'you loose';
          }else if(compMove ==='paper'){
            result ='you win';
          }else if (compMove ==='scissors'){
            result = 'you tie';
          }

        } else if(playerMove=== 'paper'){
          if(compMove=== 'rock'){
            result = 'you win';
          } else if(compMove ==='paper'){
            result ='tie';
          }else if (compMove ==='scissors'){
            result = 'you loose';
         }
         
        }else if (playerMove==='rock'){
          if(compMove=== 'rock'){
            result = 'tie';
          } else if(compMove ==='paper'){
            result ='you loose';
          }else if (compMove ==='scissors'){
            result = 'you win';
          }

        }
        
        if(result === 'you win'){
          score.wins  +=1;
        } else if(result ==='you loose'){
          score.losses +=1;
        } else if(result === 'tie'){
          score.ties +=1;
        }
        
        localStorage.setItem('score',JSON.stringify(score));

        updateScoreElement();

        document.querySelector('.js-result').innerHTML= result;
        document.querySelector('.js-move').innerHTML=`you
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${compMove}-emoji.png"class="move-icon">
    Computer`;

        
      }

      function updateScoreElement(){
        document.querySelector('.js-score').innerHTML= `Wins=${score.wins}, Losses=${score.losses}, Ties=${score.ties}`;

      }
    
      function pickCompMove(){
      
        const randomNumber= Math.random();

        let compMove ='';

        if(randomNumber >=0 && randomNumber <1/3){
          compMove = 'rock';
        }else if(randomNumber >= 1/3 &&randomNumber <2/3){
          compMove ='paper';
        }else if(randomNumber >=2/3 && randomNumber <1){
          compMove='scissors';
      }   
      return compMove;// returning a value from function
      

      }