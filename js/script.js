const gameIntro = document.querySelector("#game-intro")
const gameStart = document.querySelector("#game-intro")
const gameEnd = document.querySelector("#game-intro")
const restartButton = document.getElementById("restart-button");
const audioIntro = document.getElementById('backgroundMusic')
const insertCoinBtn =  document.getElementById('insert-coin')
let game
window.onload = function () {
    audioIntro.play();
    audioIntro.volume = 0.1;

   
  
    function startGame() {
      
      game = new Game()
      game.start()
      
      console.log("start game");
      
      document.addEventListener('keydown', (e) => {
        
        if (e.key === "ArrowRight") {
          if (game.player.directionX < 4) {
            game.player.directionX += 1
          }
        }
        
        if (e.key === "ArrowLeft") {
          if (game.player.directionX > -4) {
            game.player.directionX -= 1
          }
        }
        
        if (e.key === "ArrowDown") {
          if (game.player.directionY < 4) {
            game.player.directionY += 1
          }
        }
        
        if (e.key === "ArrowUp") {
          if (game.player.directionY > -4) {
            game.player.directionY -= 1
          }
        }
        
      })
      
    }
  
    function restartGame() {
  
      startGame()
  
      game.gameEndScreen.style.display = 'none'
      game.gameEndScreen.style.padding = 0
      game.gameEndScreen.style.height = 0
  
    }
  
    
   insertCoinBtn.addEventListener('click', () => {
      let audioInsertCoin = new Audio('./sound/Arcade_INSERT_COIN.mp3')
      audioInsertCoin.play();
      audioInsertCoin.volume = 0.2;
      startGame()
     
  })

    restartButton.addEventListener("click", () => {
      restartGame();
    });
  };