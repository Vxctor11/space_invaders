document.addEventListener('DOMContentLoaded', () => {
    let audioIntro = document.getElementById('backgroundMusic')
    audioIntro.play();
    audioIntro.volume = 0.1;
})


document.getElementById('insert-coin').addEventListener('click', () => {
    let audioInsertCoin = new Audio('./sound/Arcade_INSERT_COIN.mp3')
    audioInsertCoin.play();
    audioInsertCoin.volume = 0.2;
    window.location.href = 'main_game.html';
})
