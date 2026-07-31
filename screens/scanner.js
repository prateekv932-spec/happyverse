console.log("Scanner.js loaded successfully");


function showScanner(){


    const app = document.getElementById("app");


    app.innerHTML = `


    <div class="scanner-screen">


        <div class="scanner-box">


            <div class="scanner-corner top-left"></div>
            <div class="scanner-corner top-right"></div>
            <div class="scanner-corner bottom-left"></div>
            <div class="scanner-corner bottom-right"></div>



            <div class="scanner-circle">


                <div class="scan-line"></div>



                <img 
                id="profileImage"
                src="assets/images/anwesha.jpg"
                alt="Profile">


            </div>



        </div>



        <div class="scanner-text">


            <p id="status">
                Initializing System...
            </p>


            <h2 id="welcome"></h2>


            <p id="subtitle"></p>



        </div>


    </div>



    `;



    startScanning();


}





function startScanning(){



    const status =
    document.getElementById("status");



    const messages=[


        "Initializing System...",


        "Connecting To HappyVerse...",


        "Searching For Someone Special...",


        "Analyzing Memories...",


        "Checking Birthday Database...",


        "Identity Found ✓"


    ];



    let index=0;



    const scanInterval =
    setInterval(()=>{


        status.innerHTML =
        messages[index];



        index++;



        if(index >= messages.length){


            clearInterval(scanInterval);


            identityFound();


        }



    },1200);



}





function identityFound(){



    const line =
    document.querySelector(".scan-line");



    const image =
    document.getElementById("profileImage");



    line.style.animation="none";


    line.style.opacity="0";



    setTimeout(()=>{


        image.classList.add("show");



        document.querySelector(".scanner-circle")
        .classList.add("found");



        typeWelcome();



    },700);



}






function typeWelcome(){



    const welcome =
    document.getElementById("welcome");



    const subtitle =
    document.getElementById("subtitle");



    const text =
    "Welcome, Anwesha ❤️";



    let i=0;



    const typing =
    setInterval(()=>{


        welcome.innerHTML =
        text.substring(0,i);



        i++;



        if(i > text.length){


            clearInterval(typing);



            subtitle.innerHTML =
            "Your special universe is ready ✨";



            createEnterButton();



        }



    },100);



}






function createEnterButton(){



    const button =
    document.createElement("button");



    button.className =
    "enter-button";



    button.innerHTML =
    "✨ Tap To Enter ✨";



    document.querySelector(".scanner-screen")
    .appendChild(button);




    button.onclick=function(){


        showHome();



    };



}