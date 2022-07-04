const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option-list");

start_btn.onclick = () => {
    info_box.classList.add("activeInfo");
    // quiz_box.classList.add("activeQuiz");
    // showQuestion(0);
    // queCounter(1);
   
}
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
}

continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestion(0);
    queCounter(1);
}


let que_count = 0;
let que_num = 1;
let userScore = 0;

const next_btn = quiz_box.querySelector(".next_btn");
const previous_btn = quiz_box.querySelector(".previous_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = () => {
    window.location.reload();
}
quit_quiz.onclick = () => {
    window.location.reload();
}

previous_btn.onclick = () => {
    if (que_count >= 1) {
        que_count--;
        que_num--;
        showQuestion(que_count);
        queCounter(que_num);       
    } else {
        console.log("Questions finished");
        
    }

}

next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        que_num++;
        showQuestion(que_count);
        queCounter(que_num);
       
    } else {
        console.log("Questions completed");
        showResultBox();
    }
}
    
function queCounter(index) {
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}

function showQuestion(que_count) {
    const que_text = document.querySelector(".que_text");
    
    let que_tag = '<span>' +questions[que_count].num+'.'+ questions[que_count].question + '</span>';
    let option_tag = '<div class="option">'+ questions[que_count].options[0] + '<span></span></div>'
                    +'<div class="option">' + questions[que_count].options[1] + '<span></span></div>'
                    +'<div class="option">' + questions[que_count].options[2] + '<span></span></div>'
                    +'<div class="option">' + questions[que_count].options[3] + '<span></span></div>'
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
        
    }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon='<div class="icon cross"><i class="fas fa-times"></i></div>'

function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if (userAns == correctAns) {
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
        console.log("Answer is Correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        answer.classList.add("incorrect");
        console.log("Answer is wrong"); 
        answer.insertAdjacentHTML("beforeend",crossIcon)
        
        for (let i = 0; i < allOptions; i++)
        {
            if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend",tickIcon)
           }    
        }
    }

    for (let i = 0; i < allOptions; i++)
    {
        option_list.children[i].classList.add("disabled");
    }
    
}

function showResultBox() {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3) {
        let scoreTag = '<span> Congrats!! You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    } else if (userScore > 1) {
        let scoreTag = '<span> nice !! You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else {
        let scoreTag = '<span> sorry, You got only<p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}


