const startBtn = document.querySelector("#startBtn")
const exitBtn = document.querySelector("#exitBtn")
const exit2Btn = document.querySelector("#exit2Btn")
const restartBtn = document.querySelector("#restartBtn")
const questionNumber = document.querySelector("#questionNumber")
const questionnn = document.querySelector("#questionnn")

startBtn.addEventListener("click", function () {
    document.querySelector("#firstPage").style.display = "none"
    document.querySelector("#game").style.display = "flex"
})

exitBtn.addEventListener("click", function () {
    window.close();
})

exit2Btn.addEventListener("click", function () {
    window.close();
})

restartBtn.addEventListener("click", function () {
    document.querySelector("#game").style.display = "flex"
    document.querySelector("#finish").style.display = "none"
    questionNumber.innerHTML = "Question 1"
    index = 0;
    corrects = 0;
    document.querySelector("#progress").style.backgroundColor = "white"
    showQuestion()
})

const questions = [
    {
        question: 'What do you call people who are 18+?',
        answers: [
            {
                answer: "Baby",
                correctly: false
            },
            {
                answer: "Adult",
                correctly: true
            },
            {
                answer: "Person",
                correctly: false
            }
        ]
    },
    {
        question: "What color is the tree?",
        answers: [
            {
                answer: "Red",
                correctly: false
            },
            {
                answer: "Brown",
                correctly: false
            },
            {
                answer: "Green",
                correctly: true
            }
        ]
    },
    {
        question: "What do you call people who has a wife?",
        answers: [
            {
                answer: "Wife",
                correctly: false
            },
            {
                answer: "Husband",
                correctly: false
            },
            {
                answer: "Married",
                correctly: true
            }
        ]
    }
]

let index = 0;
let corrects = 0;

function showQuestion() {
    const question = questions[index];

    for (let i = 0; i < questions.length; i++) {
        questionnn.innerHTML = question.question;
        const btn = document.querySelector(`#variant${i + 1}`)
        btn.innerHTML = question.answers[i].answer
        btn.onclick = function () {
            if (question.answers[i].correctly) {
                document.querySelector(`#text${i + 1}`).style.backgroundColor = "green"
                corrects++;
                setTimeout(next, 1000)
                setTimeout(loadProgressBar, 1000)
            }
            else {
                document.querySelector(`#text${i + 1}`).style.backgroundColor = "red"
                setTimeout(next, 1000)
                setTimeout(loadProgressBar, 1000)
            }
        }
    }
}

showQuestion()

function changeColorToDefault() {
    document.querySelector("#text1").style.backgroundColor = "#343A40"
    document.querySelector("#text2").style.backgroundColor = "#343A40"
    document.querySelector("#text3").style.backgroundColor = "#343A40"
}
function next() {
    index++;
    if (index >= questions.length) {
        changeColorToDefault();
        document.querySelector("#game").style.display = "none"
        document.querySelector("#finish").style.display = "flex"
        document.querySelector("#totalPoint").innerHTML = `Corrects: ${corrects} <br> Incorrects: ${questions.length - corrects} <br> Your score: ${Math.floor((corrects / questions.length) * 100)}%`
        setTimeout(loadProgressBar, 1000)
    } else {
        questionNumber.innerHTML = `Question ${index + 1}`
        showQuestion();
        changeColorToDefault();

    }
}

function loadProgressBar() {
    const percent = 100 * (index / questions.length)
    document.querySelector("#progress").style.backgroundColor = "green"
    document.querySelector("#progress").style.width = `${percent}%`
}
