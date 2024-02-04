const startBtn = document.querySelector("#startBtn")
const exitBtn = document.querySelector("#exitBtn")
const exit2Btn = document.querySelector("#exit2Btn")
const restartBtn = document.querySelector("#restartBtn")
const addBtn = document.querySelector("#addBtn")
const backBtn = document.querySelector("#backBtn")
const mainMenuBtn = document.querySelector("#mainMenuBtn")
const addNewQuestionBtn = document.querySelector("#addNewQuestionBtn")
const questionNumber = document.querySelector("#questionNumber")
const questionnn = document.querySelector("#questionnn")

startBtn.addEventListener("click", function () {
    document.querySelector("#firstPage").style.display = "none"
    document.querySelector("#game").style.display = "flex"
    questionNumber.innerHTML = "Question 1"
    index = 0;
    corrects = 0;
    document.querySelector("#progress").style.backgroundColor = "white"
    showQuestion()
})

mainMenuBtn.addEventListener("click", function () {
    document.querySelector("#game").style.display = "none"
    document.querySelector("#finish").style.display = "none"
    document.querySelector("#addingQuestion").style.display = "none"
    document.querySelector("#firstPage").style.display = "flex"

})

addNewQuestionBtn.addEventListener("click", function () {
   clearNewQuestionPage();
})

addBtn.addEventListener("click", function () {
    if (document.querySelector("#firstCheck").checked === false && document.querySelector("#secondCheck").checked === false && document.querySelector("#thirdCheck").checked === false) {
        popupError()
        setTimeout(() => {
            document.querySelector("#popupError").style.display = "none"
            document.querySelector("#addingQuestion").style.opacity = "1"
        }, 2000);
    } else if (document.querySelector("#newQuestion").value === "" && document.querySelector("#newVariant1").value === "" && document.querySelector("#newVariant2").value === "" && document.querySelector("#newVariant3").value === "") {
        popupError()
        setTimeout(() => {
            document.querySelector("#popupError").style.display = "none"
            document.querySelector("#addingQuestion").style.opacity = "1"
        }, 2000);
    }
    else if (document.querySelector("#newVariant1").value === document.querySelector("#newVariant2").value || document.querySelector("#newVariant1").value === document.querySelector("#newVariant3").value || document.querySelector("#newVariant2").value === document.querySelector("#newVariant3").value) {
        popupError()
        setTimeout(() => {
            document.querySelector("#popupError").style.display = "none"
            document.querySelector("#addingQuestion").style.opacity = "1"
        }, 2000);
    }
    else {
        addQuestion()
        popupSuccess()
        setTimeout(() => {
            document.querySelector("#popupSuccess").style.display = "none"
            document.querySelector("#addingQuestion").style.opacity = "1"
        }, 2000);
    }
})

backBtn.addEventListener("click", function () {
    document.querySelector("#addingQuestion").style.display = "none"
    document.querySelector("#firstPage").style.display = "flex"
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


function popupSuccess() {
    document.querySelector("#popupSuccess").style.transition = "0.5s"
    document.querySelector("#popupSuccess").style.display = "flex"
    document.querySelector("#addingQuestion").style.opacity = "0.5"
    clearNewQuestionPage()
}

function popupError() {
    document.querySelector("#popupError").style.transition = "0.5s"
    document.querySelector("#popupError").style.display = "flex"
    document.querySelector("#addingQuestion").style.opacity = "0.5"
}

var questions = [
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
var firstCheck = document.querySelector("#firstCheck")
var thirdCheck = document.querySelector("#thirdCheck")
var newQuestion = document.querySelector("#newQuestion")
var newVariant1 = document.querySelector("#newVariant1")
var newVariant2 = document.querySelector("#newVariant2")
var newVariant3 = document.querySelector("#newVariant3")

var correctVariant = ""

firstCheck.addEventListener("click", function () {
    newVariant2 = document.querySelector("#newVariant1")
    newVariant1 = document.querySelector("#newVariant2")
})

thirdCheck.addEventListener("click", function () {
    newVariant2 = document.querySelector("#newVariant3")
    newVariant3 = document.querySelector("#newVariant2")
})

function addQuestion() {
    questions.push({
        question: newQuestion.value,
        answers: [
            {
                answer: newVariant1.value,
                correctly: false
            },
            {
                answer: newVariant2.value,
                correctly: true
            },
            {
                answer: newVariant3.value,
                correctly: false
            }
        ]
    })
}

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
    changeColorToDefault();
    if (index >= questions.length) {
        document.querySelector("#game").style.display = "none"
        document.querySelector("#finish").style.display = "flex"
        document.querySelector("#totalPoint").innerHTML = `Corrects: ${corrects} <br> Incorrects: ${questions.length - corrects} <br> Your score: ${Math.floor((corrects / questions.length) * 100)}%`
        setTimeout(loadProgressBar, 1000)
    } else {
        questionNumber.innerHTML = `Question ${index + 1}`
        showQuestion();
    }
}

function loadProgressBar() {
    const percent = 100 * (index / questions.length)
    document.querySelector("#progress").style.backgroundColor = "green"
    document.querySelector("#progress").style.width = `${percent}%`
}

function clearNewQuestionPage () {
    document.querySelector("#firstPage").style.display = "none"
    document.querySelector("#addingQuestion").style.display = "flex"
    document.querySelector("#newVariant1").value = ""
    document.querySelector("#newVariant2").value = ""
    document.querySelector("#newVariant3").value = ""
    document.querySelector("#newQuestion").value = ""
    document.querySelector("#firstCheck").checked = false;
    document.querySelector("#secondCheck").checked = false;
    document.querySelector("#thirdCheck").checked = false;
}