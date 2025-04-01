document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-poll");
    const pollContainer = document.getElementById("poll-container");
    const resultContainer = document.getElementById("result-container");
    const questionText = document.getElementById("question-text");
    const optionsList = document.getElementById("options-list");
    const scoreText = document.getElementById("score");
    const restartButton = document.getElementById("restart-poll");

    // Питання опитування
    const questions = [
        {
            question: "Який матеріал найчастіше використовували в українському ткацтві?",
            options: ["Шовк", "Льон", "Бавовна", "Поліестер"],
            correct: 1
        },
        {
            question: "Що символізує червоний колір у вишивці?",
            options: ["Любов і життя", "Врятування від негоди", "Військову доблесть", "Мудрість"],
            correct: 0
        },
        {
            question: "Яка техніка використовується у гончарстві?",
            options: ["Карбування", "Вишивка", "Ліплення", "Гравірування"],
            correct: 2
        },
        {
            question: "Що часто зображали на українській кераміці?",
            options: ["Міські краєвиди", "Абстрактні фігури", "Орнаменти та тварин", "Космічні пейзажі"],
            correct: 2
        },
        {
            question: "Який регіон України відомий чорними вишиванками?",
            options: ["Чернігівщина", "Гуцульщина", "Полісся", "Закарпаття"],
            correct: 0
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    // Функція для запуску опитування
    function startPoll() {
        startButton.style.display = "none"; // Ховаємо кнопку
        pollContainer.style.display = "block"; // Показуємо опитування
        loadQuestion();
    }

    // Завантаження питання
    function loadQuestion() {
        if (currentQuestionIndex < questions.length) {
            let currentQuestion = questions[currentQuestionIndex];
            questionText.textContent = currentQuestion.question;
            optionsList.innerHTML = "";

            currentQuestion.options.forEach((option, index) => {
                let button = document.createElement("button");
                button.textContent = option;
                button.classList.add("poll-option");
                button.onclick = function () {
                    if (index === currentQuestion.correct) {
                        score++;
                    }
                    currentQuestionIndex++;
                    loadQuestion();
                };
                optionsList.appendChild(button);
            });
        } else {
            showResults();
        }
    }

    // Показати результати
    function showResults() {
        pollContainer.style.display = "none";
        resultContainer.style.display = "block";
        scoreText.textContent = `Ви набрали ${score} із ${questions.length} правильних відповідей!`;
    }

    // Почати знову
    restartButton.addEventListener("click", function () {
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.style.display = "none";
        startPoll();
    });

    // Додаємо подію на кнопку
    startButton.addEventListener("click", startPoll);
});