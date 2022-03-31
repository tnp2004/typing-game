const optionSelect = document.querySelector('.select-op')
const time = document.getElementById('sec-time') 
const start = document.querySelector('.start-button')
const wordInput = document.querySelector('.word-input')
const pointer = document.querySelector('.pointer')
const wordShow = document.querySelector('.word-show')
const winBox = document.querySelector('.time')
const newGame = document.getElementById("newgame-button")
const wordList = ["Apple", "Orange", "Panda", "Tower", "Defense", "Attack", "Cheat", "Cake", "Book", "Centipede"]

let sameWord = []

const showNewgame = () => {
    newGame.style.display = "block"
}

const random = () => {
    let rd = Math.floor(Math.random() * wordList.length)
    let rdword = wordList[rd]
    let same = sameWord.includes(rdword)
    if (sameWord.length != 10) {
        if (same) {
            return random()
        }
    }else {
        showNewgame()
        time.style.display = "none"
        const win = document.createElement("span")
        win.classList.add('sec-time')
        win.innerHTML = 'You Won'
        winBox.append(win)
        return wordShow.innerHTML = "Congratulation"
    }
    sameWord.push(rdword)
    return rdword
}

let word = random()

let count;
const timeCount = () => {
    count = optionSelect.value
}

const timer = () => {
        let interval = setInterval(() => {
            console.log(count)
        if(checkTrue()) {
            return clearInterval(interval)
        }else if (count >= 1) {
            time.innerHTML = `${count} second`
            return count--;
        }
        showNewgame()
        return time.innerHTML = `You Lose`
    }, 1000); 
}

const nextWord = () => {
    word = random()
}

let pointTotal = 0
const point = () => {
    pointTotal += 10
    pointer.innerHTML = `point : ${pointTotal}`
}

const game = () => {
    timeCount()
    if (count != 0) {
        wordShow.innerHTML = word
        timer()
    }
}

const checkTrue = () => {
    if (word === wordInput.value) {
        return true
    }
}

const sendWord = (enterKey) => {
    if(count != 0) {
        if (enterKey.key === "Enter") {
            if (checkTrue()) {
                point()
                nextWord()
                game()
            }
        wordInput.value = ''
        }
    }
}



start.addEventListener('click', game)
newGame.addEventListener("click", () => {
    window.location.reload()
})
document.addEventListener('keydown', sendWord)