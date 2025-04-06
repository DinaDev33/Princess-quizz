let colors = [
        '#76bffc',
        '#f5768b',
        '#f080b8',
        '#d946ef',
        '#be82f5',
        '#9d76f8',
       '#6366f1',
        'rgb(78, 142, 245)',
        '#0ea5e9',
        '#29c1db',
        '#14b8a6',
        '#29b888',
        '#41da79',
        '#93ce3a',
        '#f3c63e',
        '#f7b139',
        '#f1893f',
        '#ec6a6a',
  ]
  let index =0;
  
function colorChange(){
 document.body.style.backgroundColor = colors[index];
 index = (index + 1) % colors.length;
console.log(colorChange)
}
 setInterval(colorChange, 3000);
 


const button = document.querySelector ("#btn");
const answers =  document.querySelectorAll(".answer";)

button.addEventListener ("click", result);


function result(e){
e.preventDeafault();
let score = 0;
answers.forEach (answer =>{
    if (answer.checked)
 points ++;
});
show.textContent = + score + "/12"
}




const spans = document.querySelectorAll(".par span");

spans.forEach(function(span) {
    const originalText = span.textContent;
    span.style.textTransform = "uppercase"; 
    span.setAttribute("data-original-text", originalText); 
});




//const show = document.querySelector("#show");

/*function result(e) {
    e.preventDefault();

    let score = 0;

    if ( document.querySelector("#answerOne").checked ){
        score++;
    }
    if ( document.querySelector("#answerTwo").checked ){
        score++;
    }

    if ( document.querySelector("#answerThree").checked ){
        score++;
    }

    if ( document.querySelector("#answerFour").checked ){
        score++;
    }

    if ( document.querySelector("#answerFive").checked ){
        score++;
    }

    if ( document.querySelector("#answerSix").checked ){
        score++;
    }
    if ( document.querySelector("#answerSeven").checked ){
        score++;
    }
    if ( document.querySelector("#answerEight").checked ){
        score++;
    }
    if ( document.querySelector("#answerNine").checked ){
        score++;
    }

    if ( document.querySelector("#answerTen").checked ){
        score++;
    }
    if ( document.querySelector("#answerEleven").checked ){
        score++;
    }
    if ( document.querySelector("#answerTwelve").checked ){
        score++;
    }
show.textContent = + score + "/12";
show.style.display = "block";

}*/











const button = document.querySelector ("#btn");
const answers =  document.querySelectorAll(".answer");
const show = document.querySelector ("#show");

button.addEventListener ("click", result);


function result(e){
e.preventDefault();
let score = 0;


answers.forEach (answer =>{   
    if (answer.checked) score++; 

});


show.textContent = score + "/12"
show.style.display = "block";
}







const button = document.querySelector("#btn");
const questions = document.querySelectorAll(".question");
const show = document.querySelector("#show");

button.addEventListener("click", result);

function result(e) {
    e.preventDefault();
    let score = 0;

    questions.forEach(question => {
        const answers = question.querySelectorAll(".answer");

        answers.forEach(answer => {
            if (answer.checked && answer.parentElement.classList.contains("par")) {
                score++;
            }
        });
    });

    show.textContent = score + "/12";
    show.style.display = "block";
}
