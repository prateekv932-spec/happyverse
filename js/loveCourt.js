/* =====================================================
        HAPPYVERSE 3.0
        OUR LOVE COURT ❤️
        INTERACTIVE ROMANTIC QUIZ
===================================================== */


console.log("Love Court Loaded ⚖️❤️");


let currentQuestion = 0;



const loveQuestions = [

{
question:
"Who is more stubborn? 😂",

options:[
"Prateek 😎",
"Anwesha ❤️",
"Both 😂",
"Nobody 😇"
]

},


{
question:
"Who loves the other person more? ❤️",

options:[
"Prateek ❤️",
"Anwesha ❤️",
"Both equally 💕",
"Impossible to measure ♾️"
]

},


{
question:
"What makes our relationship special? ✨",

options:[
"Our conversations 💬",
"Our memories 📸",
"Our fights 😂",
"Everything ❤️"
]

},


{
question:
"Who is more dramatic? 😂",

options:[
"Me 🙈",
"You 😌",
"Both 🤣",
"No one"
]

},


{
question:
"What is my favourite thing about you? ❤️",

options:[
"Your smile 😊",
"Your nature 🌹",
"Your care 🫶",
"Everything about you ❤️"
]

}

];





/* =====================================================
        START LOVE COURT
===================================================== */


function showLoveCourt(){


const app =
document.getElementById("app");



app.innerHTML = `


<section class="love-court-page">


<div class="court-bg"></div>


<div class="court-particles"></div>



<div class="court-intro">


<h1>
⚖️ THE LOVE COURT ⚖️
</h1>


<h2>
Case No: ANWESHA-143
</h2>


<p>
Court is now in session...
</p>


<p>
A serious investigation has started ❤️
</p>



<button onclick="openCaseFile()">

Open Case File →

</button>



</div>



</section>


`;



createCourtParticles();


}







/* =====================================================
        CASE FILE
===================================================== */


function openCaseFile(){



const app =
document.getElementById("app");



app.innerHTML = `


<section class="love-court-page">


<div class="case-file">


<h1>
📁 CASE FILE
</h1>



<h2>
Accused: Anwesha ❤️
</h2>



<p>
Charges:
</p>



<div class="charges">


<p>
❌ Stealing my attention
</p>


<p>
❌ Making me smile without reason
</p>


<p>
❌ Becoming my favourite person
</p>


<p>
❌ Living in my thoughts 24/7 😂
</p>



</div>



<button onclick="startLoveTrial()">

Proceed To Trial ⚖️

</button>



</div>


</section>



`;



}







/* =====================================================
        START QUIZ
===================================================== */


function startLoveTrial(){


currentQuestion=0;


showQuestion();


}







function showQuestion(){



const app =
document.getElementById("app");



let q =
loveQuestions[currentQuestion];



app.innerHTML = `


<section class="love-court-page">


<div class="quiz-box">


<h1>
⚖️ Love Trial
</h1>



<h2>
Question ${currentQuestion+1}/${loveQuestions.length}
</h2>



<p class="question">

${q.question}

</p>




<div class="answer-box">


${

q.options.map(option=>`


<button onclick="nextQuestion()">

${option}

</button>


`).join("")

}



</div>


</div>


</section>


`;



}

/* =====================================================
        NEXT QUESTION SYSTEM
===================================================== */


function nextQuestion(){


    currentQuestion++;



    if(currentQuestion < loveQuestions.length){


        showQuestion();



    }

    else{


        showVerdict();


    }


}







/* =====================================================
        FINAL COURT VERDICT
===================================================== */


function showVerdict(){


const app =
document.getElementById("app");



app.innerHTML = `


<section class="love-court-page verdict-page">


<div class="verdict-box">



<h1>
⚖️ COURT VERDICT ⚖️
</h1>




<div class="stamp">

GUILTY ❤️

</div>




<h2>
Anwesha has been found guilty...
</h2>



<div class="verdict-text">


<p>
✓ Too adorable 😍
</p>


<p>
✓ Too special ❤️
</p>


<p>
✓ Impossible to replace ✨
</p>


<p>
✓ Stealing Prateek's heart forever 💕
</p>



</div>




<p class="punishment">


Final punishment:

<br>

Stay with Prateek forever 😂❤️


</p>




<button onclick="continueAfterCourt()">

Continue To My Heart ❤️

</button>



</div>



</section>



`;



createVerdictEffects();


}








/* =====================================================
        AFTER LOVE COURT
        RETURN TO HAPPYVERSE HOME
===================================================== */


function continueAfterCourt(){


    showHome();


}









/* =====================================================
        VERDICT PARTICLES
===================================================== */


function createVerdictEffects(){


const page =
document.querySelector(
".verdict-page"
);



if(!page)
return;



for(let i=0;i<50;i++){



let heart =
document.createElement("span");



heart.className =
"court-heart";



heart.innerHTML =
Math.random()>0.5
?
"❤️"
:
"✨";



heart.style.left =
Math.random()*100+"%";



heart.style.animationDelay =
Math.random()*3+"s";



page.appendChild(
heart
);



setTimeout(()=>{

heart.remove();

},8000);



}


}