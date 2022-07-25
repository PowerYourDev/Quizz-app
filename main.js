

let quizQuestions=document.getElementById('quizz-questions');
const questionNoo= document.getElementById('question-noo');

let questionsCompleted=document.getElementById('questions-complete');
selectedquizz()

let j=0;
let score = 0;
var questionNumber=1;


function displayQuestion(x){
   quizQuestions.innerHTML= 
   `    <h3 id="questions-question">${x[j].question}</h3>
<ul id="ui">
<li class="options" onclick="changeColor(this.children[1])">
   <input type="radio" id="opt1" name="answer" >
 <label class="o"  for="opt1" >${x[j].opt[0]}</label>
</li>
<li class="options" onclick="changeColor(this.children[1])">
   <input type="radio" id="opt2" name="answer">
 <label class="o"  for="opt2" >${x[j].opt[1]}</label>
</li>
<li class="options" class="options" onclick="changeColor(this.children[1])">
   <input  type="radio"   id="opt3" name="answer">
 <label class="o"  for="opt3">${x[j].opt[2]}</label>
</li>
<li class="options"  onclick="changeColor(this.children[1])">
<input  type="radio"  id="opt4" name="answer" >
 <label   class="o"  for="opt4">${x[j].opt[3]}</label>
</li>
</ul>

<button onclick="nextQuestion()"  id="nextQuestion-btn">Next > </button>

`
}
function changeColor(str) {
   

   otherOptions = document.getElementsByClassName("o");
    for (var i = 0; i < otherOptions.length; i++) {
         otherOptions[i].style.border = "none";
     }
     str.style.border = "2.5px solid #DDDDDD"; 
 }

var param;
function selectedquizz(){
   const topicQuestion = new URLSearchParams(window.location.search);
 
   if(topicQuestion.get("exam") === "html"){
      param = htmlQ;
   }
   else if(topicQuestion.get("exam") === "js"){
      param = jsQ;
   }
   else{
      param = tsQ;
   }
  
}

displayQuestion(param);

function getCheckedAnswer (){
   var ele = document.getElementsByName('answer');
   let answer;
        
   for(i = 0; i < ele.length; i++) {
       if(ele[i].checked){
           answer = ele[i].id;
      
       }
   }
   return answer;
   

}


   

   function nextQuestion() {
      const CheckedAnswer = getCheckedAnswer();
      
      console.log(CheckedAnswer)
      if(CheckedAnswer === param[j].ans){
         score++;
      }
      if(CheckedAnswer !== undefined){
         j++;
         questionNumber=questionNumber+1;
      }else{
         questionNumber=questionNumber;
         window.alert("please choose the option");
      }
   
      if(j < param.length){
         displayQuestion(param);
      }else{
         window.open("score-page.html?score="+score,"_top")
      }

      const submitBtn=document.getElementById('nextQuestion-btn');
      if( j===param.length-1){
         submitBtn.innerHTML="finish & show score"; 
      }
      
      questionNoo.innerHTML= `<h4> question ${questionNumber} of ${param.length} </h4>`
     }
 
  
 