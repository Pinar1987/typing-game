// Variables for the DOM elements

// Array
    const words = [
        "dependent",
        "dog",
        "superficial",
        "admit",
        "juice",
        "javascript",
        "developer",
        "airplane",
        "great",
        "fun",
        "manipulate",
        "cat",
        "transition",
        "school",
        "computer",
        "programming",
        "drag",
        "loving",
        "north",
    ];

    let score = 0;
    let randomWord;
    let time = 10;
    let timeInterval;

    const wordElement = document.getElementById('word')
    function addWordToDOM() {
        randomWord = words[Math.floor((Math.random() * words.length))]
        wordElement.innerText=randomWord
    }

    const scoreElement = document.getElementById('score')
    function updateScore() {
        score += 1
        scoreElement.innerText=score
    }

    const textElement = document.getElementById('text')
    textElement.addEventListener('input', () => {
        const inputText = textElement.value;
        if (inputText === randomWord){
            updateScore()
            addWordToDOM()
            time += 5
            textElement.value = ''
        }
    }) 

    const timeElement = document.getElementById('time')
    
    
    function updateTime(){
        time -= 1
        timeElement.innerText = time + 's'

        if (time === 0) {
            clearInterval(timeInterval)
            gameOver()
        }
    }

    const endGameContainer = document.getElementById('end-game-container')
    const gameOver = () => {
        endGameContainer.innerHTML = `
            <h2>Game Over</h2>
            <h4>Score : ${score}</h4>
            <button onClick = 'location.reload()'>
                Start Game
            </button>
        `
        endGameContainer.classList.add('show')
    }

    const settingsButton= document.getElementById ('settings-btn')
    const settingsElement = document.getElementById('settings')
    settingsButton.addEventListener ('click', () => {
        settingsElement.classList.toggle('hide')
    })

    const difficultyElement= document.getElementById ('difficulty')
    function timeByDifficulty () {
        const difficulty = difficultyElement.value;
        if (difficulty ==='easy') {
            time = 10
        } else if (difficulty === 'medium') {
            time = 7
        } else if (difficulty === 'hard') {
            time = 4
        }
        timeElement.innerText = time+'s'
    }

    difficultyElement.addEventListener('change', timeByDifficulty)


    addWordToDOM();
    timeInterval = setInterval(updateTime, 1000)
