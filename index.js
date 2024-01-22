let num = 60
let interval;
function count() {
    interval = setInterval(() => {
        num--
        if (num < 1) {
            // Call submitAnswer() after a 3-second delay
            setTimeout(() => {
                submitAnswer();
                bell.style.display = 'none';
                audio.pause()
            }, 3000);
            audio.play();
            containerTwo.style.display = 'none'
            bell.style.display = 'block';
            clearInterval(interval)
        }

        fortime.innerHTML = `${num}`
    }, 1000);

}
function start() {
    display();
    count()
    container.style.display = 'none'
    containerTwo.style.display = 'block'
    forButtons.hidden = false
}
let array = [
    {
        question: '1. What is the capital city of Bhutan?',
        answers: [
            'a : plantinum',
            'b : thimphu',
            'c : anumbar',
            'd : cardify'
        ],
        correctAnswer: 'b : thimphu',
        selectedAnswer: ''
    },
    {
        question: '2.  What is the largest bird of prey in the world?',
        answers: [
            'a : eagle',
            'b : andre condor',
            'c : parrot',
            'd : dove'
        ],
        correctAnswer: 'b : andre condor',
        selectedAnswer: ''
    },
    {
        question: '3. What year was the movie Titanic released?',
        answers: [
            'a : 1950',
            'b : 1945',
            'c : 1990',
            'd : 1997'
        ],
        correctAnswer: 'c : 1990',
        selectedAnswer: ''
    },
    {
        question: '4.  When did World War II begin?',
        answers: [
            'a : june 8, 1990',
            'b : august 5, 1997',
            'c : sectember 1, 1939',
            'd : octomber 9, 1830'
        ],
        correctAnswer: 'c : sectember 1, 1939',
        selectedAnswer: ''
    },
    {
        question: '5. Which two colors make up the flag of Denmark?',
        answers: [
            'a : black and white',
            'b : red and blue',
            'c : red and white',
            'd : green and white'
        ],
        correctAnswer: 'c : red and white',
        selectedAnswer: ''
    },
    {
        question: '6. How many times did Ross Geller marry and divorce on Friends?',
        answers: [
            'a : Four Times',
            'b : Six Times',
            'c : Three Times',
            'd : Two Times'
        ],
        correctAnswer: 'c : Three Times',
        selectedAnswer: ''
    },
    {
        question: '7. Which country is Tasmania a part of?',
        answers: [
            'a : America',
            'b : Spain',
            'c : Australia',
            'd : Nigeria'
        ],
        correctAnswer: 'c : Australia',
        selectedAnswer: ''
    },
    {
        question: '8. If you tipped 20% on a $15 bill, how much would the tip be?',
        answers: [
            'a : $3.00',
            'b : $4.00',
            'c : $1.00',
            'd : $2.00'
        ],
        correctAnswer: 'a : $3.00',
        selectedAnswer: ''
    },
    {
        question: '9.What month was Julius Caesar stabbed in?',
        answers: [
            'a : June',
            'b : January',
            'c : March',
            'd : December'
        ],
        correctAnswer: 'c : March',
        selectedAnswer: ''
    },
    {
        question: '10.Who painted the Mona Lisa?',
        answers: [
            'a : Leonardo da Vinci',
            'b : Augustin Jordan',
            'c :Julian Mark',
            'd :J. Williams'
        ],
        correctAnswer: 'a : Leonardo da Vinci',
        selectedAnswer: ''
    }



]
let array2 = [
    {
        question: '1.  What is your body’s largest organ?',
        answers: [
            'a : Skin',
            'b : Heart',
            'c : Stomach',
            'd : Kidney'
        ],
        correctAnswer: 'a : Skin',
        selectedAnswer: ''
    },
    {
        question: '2.   Which country invented tea?',
        answers: [
            'a : India',
            'b :China',
            'c : America',
            'd : Korea'
        ],
        correctAnswer: 'b :China',
        selectedAnswer: ''
    },
    {
        question: '3. How many bones do sharks have?',
        answers: [
            'a : 10',
            'b : 5',
            'c : None of the above',
            'd : 30'
        ],
        correctAnswer: 'c : None of the above',
        selectedAnswer: ''
    },
    {
        question: '4. How long is an Olympic swimming pool (in meters)?',
        answers: [
            'a : 100 meters',
            'b :200 meters',
            'c : 50 meters',
            'd : 30 meters'
        ],
        correctAnswer: 'c : 50 meters',
        selectedAnswer: ''
    },
    {
        question: '5. How many wisdom teeth does the average adult have?',
        answers: [
            'a : 5',
            'b : 4',
            'c : 6',
            'd : 10'
        ],
        correctAnswer: 'b : 4',
        selectedAnswer: ''
    },
    {
        question: '6.  What is considered a normal human heart rate?',
        answers: [
            'a : 100-200 bpm',
            'b : 60-100 bpm',
            'c : 50-100 bpm',
            'd : 80-100 bpm'
        ],
        correctAnswer: 'b : 60-100 bpm',
        selectedAnswer: ''
    },
    {
        question: '7. How many oceans are there on Earth?',
        answers: [
            'a : 4',
            'b : 6',
            'c : 5',
            'd : 9'
        ],
        correctAnswer: 'c : 5',
        selectedAnswer: ''
    },
    {
        question: '8.   What color is chlorophyll?',
        answers: [
            'a : Green',
            'b : Blue',
            'c : Black',
            'd : Yellow'
        ],
        correctAnswer: 'a : Green',
        selectedAnswer: ''
    },
    {
        question: '9. In what sport could you win a Heisman trophy?',
        answers: [
            'a : American football',
            'b : Nigrian football',
            'c : Indian football',
            'd : Russian tennis'
        ],
        correctAnswer: 'c : 5',
        selectedAnswer: ''
    },
    {
        question: '10. What is the chemical symbol for potassium?',
        answers: [
            'a : M',
            'b : O',
            'c : K',
            'd : CL'
        ],
        correctAnswer: 'c : K',
        selectedAnswer: ''
    }
]

function Restart() {
    array = array2
    containerThree.style.display = 'none'
    containerTwo.style.display = 'none'
    container.style.display = 'block'
    num = 60
    num++
    i = 0
    clapping.pause()
    sad.pause()
}
let i = 0;
// let index2 = 0
function display() {
    let data = array[i]
    forAll.innerHTML = `<h5>${data.question}</h5>`
    data.answers.forEach((el, i) => {
        forAll.innerHTML += `<p id="foranswer"> <input name="n" ${data.selectedAnswer == el ? 'checked' : ''} onchange="change('${el}')"  type="radio"  id="">${el}</p>`
    })
    // foroptions.innerHTML = `${array[i].answers}`

}
function change(params) {
    array[i].selectedAnswer = params
}

function moveToNextQuestion() {
    if (i < array.length - 1) {
        i++;
    }
    display();
}

function moveToPreviousQuestion() {
    if (i > 0) {
        i--;
    }
    display();
}
function submitAnswer() {
    let result = array.filter((el) => el.selectedAnswer === el.correctAnswer)
    demo.innerHTML = `<p id="scored"> YOU SCORED ${result.length}/${array.length}</p>
                <h4 class="learn">Learn to be fast next time. Thanks for participating</h4>  
                <h3 id="Newquestion" hidden class="NewQuestion">Do you want to start a new question?</h3>
                <h3 id="NewquestionTwo" hidden class="NewQuestion"> Sorry! this is the end of all questions</h3>          
            `
    // AreYouSure.hidden = false
    if (array === array2) {
        NewquestionTwo.hidden = false
        Newquestion.hidden = true
    }
    if (result.length === array.length) {
        clapping.play()
    }
    else (
        sad.play()
    )

    Newquestion.hidden = false
    containerThree.style.display = 'block'
    containerTwo.style.display = 'none'
    clearInterval(interval)
    // array.forEach((el) => {
    //     // el.selectedAnswer = ''
    // })
}
function No() {
    containerThree.style.display = 'none'
    containerTwo.style.display = 'none'
    bell.style.display = 'block';
    audio.play()
    sad.pause()
    setTimeout(() => {
        audio.pause()
        containerThree.style.display = 'none'
        bell.style.display = 'none';
    }, 3000);
    count()

}



//  let arr = ['', 's', 'sa', 'sam', 'sama', 'samad']
//     let index = 0
//     let indexTwo = arr.length
//     // let index2 = 0
//     let ade = ['e', 'el', 'eli', 'elis', 'elish', 'elisha']
//     let me = setInterval(() => {
//         show.innerHTML = arr[index]
//         index++
//         if (index == arr.length) {
//             clearInterval(me)
//         }
//     }, 97);
//     setTimeout(() => {
//         let ade2 = setInterval(() => {
//             indexTwo--
//             show.innerHTML = arr[indexTwo]
//             if (index2 <= 0) {
//                 clearInterval(ade2)
//             }
//         }, 97);
//     }, 500);
//     setTimeout(() => {
//         index = 0
//         let you = setInterval(() => {
//             show2.innerHTML = ade[index]
//             index++
//             if (index == ade.length) {
//                 clearInterval(you)
//             }
//         }, 97);
//     }, 1000);