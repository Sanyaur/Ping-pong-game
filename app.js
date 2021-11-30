const p1 = {
    score: document.querySelector('#score-1'),
    button: document.querySelector('#p1')
}

const p2 = {
    score: document.querySelector('#score-2'),
    button: document.querySelector('#p2')
}

const dropdownSelection = document.querySelector('#score-select')
const resetButton = document.querySelector('#reset')

// creating dropdown options
for (let i = 5; i < 11; i++) {
    let option = document.createElement('option')
    option.value = i
    option.innerText = i

    dropdownSelection.append(option)
}

let setMaxPointFromDropdown = (point) => {

    function gameOverStyles(player, opponent) {
        player.score.style.color = 'green'
        opponent.score.style.color = 'red'

        for (const p of [player, opponent]) {
            p.button.disabled = true;
        }
    }

    if (point == Number(p1.score.innerText)) {
        gameOverStyles(p1, p2)
    } else if (point == Number(p2.score.innerText)) {
        gameOverStyles(p2, p1)
    }
}

let resetFunction = () => {
    for (const p of [p1, p2]) {
        p.score.innerText = 0
        p.score.removeAttribute('style')
        p.button.disabled = false;
    }
}

let maxPoint = dropdownSelection.value
setMaxPointFromDropdown(maxPoint)

dropdownSelection.addEventListener('change', (event) => {
    maxPoint = Number(event.target.value)
    setMaxPointFromDropdown(maxPoint)
    resetFunction()
})

p1.button.addEventListener('click', function () {
    console.log(this.innerText)
    p1.score.innerText++
    setMaxPointFromDropdown(maxPoint)
})

p2.button.addEventListener('click', function () {
    p2.score.innerText++
    setMaxPointFromDropdown(maxPoint)
})

resetButton.addEventListener('click', resetFunction)