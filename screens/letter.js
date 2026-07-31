/* ============================================================
        HAPPYVERSE 3.0 - PREMIUM LOVE LETTER EXPERIENCE
        Letter System - Part 1A
============================================================ */

console.log("HappyVerse Premium Letter 3.0 Loaded ❤️");


let letterMusic = null;
let romanticIntervals = [];
let letterOpened = false;


/* ============================================================
        1. START LETTER EXPERIENCE
============================================================ */


function showLetter(){

    const app = document.getElementById("app");


    app.innerHTML = `

    <section class="premium-letter-page">


        <!-- DARK CINEMATIC BACKGROUND -->
        <div class="ambient-dark-bg"></div>


        <!-- PARTICLES -->
        <div id="letterParticles"></div>



        <!-- INTRO TEXT -->

        <div class="luxury-intro" id="letterIntro">


            <h1 class="elegant-title">

                Some feelings...

            </h1>


            <p class="elegant-subtitle">

                are too beautiful to be spoken.

            </p>


            <p class="elegant-subtitle">

                They deserve a place on paper.

            </p>


        </div>





        <!-- ENVELOPE AREA -->


        <div class="premium-envelope-section"
             id="premiumEnvelopeSection">


            <div class="luxury-envelope-container">



                <div class="luxury-envelope"
                     onclick="openLuxuryEnvelope(this)">



                    <!-- BACK PAPER -->

                    <div class="envelope-back"></div>



                    <!-- LETTER INSIDE -->


                    <div class="hidden-letter-paper">


                        <div class="mini-photo">

                            <img src="assets/images/letter-photo.jpg">

                        </div>


                        <p>

                            To Anwesha ❤️

                        </p>


                    </div>




                    <!-- LEFT FOLD -->

                    <div class="envelope-left"></div>




                    <!-- RIGHT FOLD -->

                    <div class="envelope-right"></div>





                    <!-- FRONT LOWER FOLD -->


                    <div class="envelope-bottom"></div>





                    <!-- OPENING FLAP -->


                    <div class="envelope-flap"></div>





                    <!-- WAX SEAL -->


                    <div class="wax-seal">


                        <span>

                            ❤️

                        </span>


                    </div>



                </div>


            </div>



            <h3 class="tap-message">

                Tap the envelope ❤️

            </h3>


        </div>



    </section>

    `;




    createLetterParticles();



    /*
        After intro disappears,
        envelope appears smoothly
    */


    setTimeout(()=>{


        const intro =
        document.getElementById("letterIntro");


        const envelope =
        document.getElementById(
        "premiumEnvelopeSection"
        );



        if(intro){

            intro.classList.add(
            "fade-out-intro"
            );

        }



        if(envelope){

            envelope.classList.add(
            "show-envelope"
            );

        }



    },5000);



}






/* ============================================================
        2. OPEN ENVELOPE ANIMATION
============================================================ */



function openLuxuryEnvelope(envelope){



    if(letterOpened)

        return;



    letterOpened=true;



    envelope.classList.add(
        "envelope-opening"
    );



    playLetterMusic();




    /*
        Wait for envelope animation
        then show paper
    */


    setTimeout(()=>{


        showLuxuryLetterPaper();


    },3000);



}






/* ============================================================
        3. LETTER MUSIC
============================================================ */



function playLetterMusic(){



    if(letterMusic){

        letterMusic.pause();

    }



    letterMusic =
    new Audio(
    "assets/music/letter.mp3"
    );



    letterMusic.volume = 0.25;


    letterMusic.loop=true;



    letterMusic.play()

    .catch(()=>{

        console.log(
        "Browser blocked autoplay"
        );

    });



}

/* ============================================================
        4. SHOW PREMIUM LETTER PAPER
============================================================ */


function showLuxuryLetterPaper(){


    const app =
    document.getElementById("app");



    app.innerHTML = `


    <section class="premium-letter-page">


        <div class="ambient-dark-bg"></div>



        <div id="paperParticles"></div>





        <div class="paper-stage">



            <div class="warm-light"></div>



            <div class="love-paper">





                <!-- ATTACHED PHOTO -->

                <div class="attached-photo">



                    <div class="paper-clip">

                        📎

                    </div>




                    <div class="photo-frame">


                        <img
                        src="assets/images/letter-photo.jpg"
                        alt="Anwesha">


                    </div>



                </div>







                <!-- LETTER CONTENT -->


                <h2 class="letter-title">


                    To Anwesha ❤️


                </h2>





                <div
                id="typedLetter"
                class="letter-text">


                </div>







                <!-- SIGNATURE -->


                <div
                id="letterSignature"
                class="letter-signature">


                    <p>

                        Forever yours,

                    </p>


                    <h3>

                        Prateek ❤️

                    </h3>


                </div>







                <button
                id="continueLetterBtn"
                class="continue-letter-btn"
                onclick="continueLuxuryJourney()">


                    Continue Our Journey →

                </button>




            </div>


        </div>


    </section>


    `;




    createLetterParticles();



    startLetterTyping();



}







/* ============================================================
        5. TYPEWRITER LETTER EFFECT
============================================================ */


function startLetterTyping(){



    const letter = `Dear Anwesha ❤️,


I still remember the first time you became a special part of my life.


Slowly, without even realizing it, you became the person who makes my ordinary days feel beautiful.


Every smile, every conversation, and every little memory with you means more to me than words can explain.


Thank you for being the happiness that entered my life and made everything brighter.


I promise to always respect you, support you, and keep our beautiful memories safe inside my heart.


You are not just a chapter of my life...


You are my favourite story.


Happy Birthday My Love ❤️`;





    const target =
    document.getElementById(
    "typedLetter"
    );



    let index = 0;




    function write(){



        if(index < letter.length){



            let character =
            letter[index];



            if(character === "\n"){


                target.innerHTML += "<br>";


            }

            else{


                target.innerHTML += character;


            }



            index++;



            setTimeout(
                write,
                35
            );



        }



        else{


            revealSignature();



        }



    }



    write();



}







/* ============================================================
        6. SIGNATURE REVEAL
============================================================ */


function revealSignature(){



    const sign =
    document.getElementById(
    "letterSignature"
    );



    if(sign){


        setTimeout(()=>{


            sign.classList.add(
            "show-signature"
            );


        },700);



    }




    setTimeout(()=>{


        const button =
        document.getElementById(
        "continueLetterBtn"
        );



        if(button){


            button.classList.add(
            "show-button"
            );


        }



    },1800);



}







/* ============================================================
        7. CONTINUE BUTTON
============================================================ */


function continueLuxuryJourney(){



    if(letterMusic){


        letterMusic.pause();


        letterMusic.currentTime=0;


    }



    romanticIntervals.forEach(
        timer=>clearInterval(timer)
    );



    romanticIntervals=[];



    if(typeof showHome === "function"){


        showHome();


    }



}

/* ============================================================
        8. ROMANTIC AMBIENT EFFECTS
============================================================ */


function createLetterParticles(){


    romanticIntervals.forEach(
        timer=>clearInterval(timer)
    );


    romanticIntervals=[];



    const containers = [

        document.getElementById(
        "letterParticles"
        ),

        document.getElementById(
        "paperParticles"
        )

    ];



    let container = containers.find(
        item=>item
    );



    if(!container)

        return;







    /* -----------------------------
          FLOATING HEARTS
    ------------------------------*/


    const heartTimer =
    setInterval(()=>{


        let heart =
        document.createElement("div");



        heart.className =
        "letter-heart";



        heart.innerHTML =
        "❤️";



        heart.style.left =
        Math.random()*100+"%";



        heart.style.fontSize =
        (Math.random()*15+12)+"px";



        heart.style.animationDuration =
        (Math.random()*5+5)+"s";



        container.appendChild(
        heart
        );



        setTimeout(()=>{


            heart.remove();


        },10000);



    },900);









    /* -----------------------------
            FALLING PETALS
    ------------------------------*/


    const petalTimer =
    setInterval(()=>{



        let petal =
        document.createElement("div");



        petal.className =
        "letter-petal";



        petal.innerHTML =
        "🌸";



        petal.style.left =
        Math.random()*100+"%";



        petal.style.fontSize =
        (Math.random()*10+14)+"px";



        petal.style.animationDuration =
        (Math.random()*6+6)+"s";



        container.appendChild(
        petal
        );



        setTimeout(()=>{


            petal.remove();


        },12000);



    },1300);









    /* -----------------------------
            GOLDEN LIGHT DUST
    ------------------------------*/


    const dustTimer =
    setInterval(()=>{


        let dust =
        document.createElement("span");



        dust.className =
        "gold-dust";



        dust.style.left =
        Math.random()*100+"%";



        dust.style.top =
        Math.random()*100+"%";



        container.appendChild(
        dust
        );



        setTimeout(()=>{


            dust.remove();


        },3000);



    },500);







    romanticIntervals.push(
        heartTimer,
        petalTimer,
        dustTimer
    );


}









/* ============================================================
        9. MOUSE ROMANTIC TRAIL
============================================================ */


function enableLetterMouseTrail(){



    const page =
    document.querySelector(
    ".premium-letter-page"
    );



    if(!page)

        return;




    page.addEventListener(
    "mousemove",
    (event)=>{



        if(Math.random()>0.88){



            const sparkle =
            document.createElement(
            "div"
            );



            sparkle.className =
            "mouse-love-particle";



            sparkle.innerHTML =
            Math.random()>0.5
            ?
            "❤️"
            :
            "✨";



            sparkle.style.left =
            event.clientX+"px";



            sparkle.style.top =
            event.clientY+"px";



            document.body.appendChild(
            sparkle
            );



            setTimeout(()=>{


                sparkle.remove();


            },1200);



        }



    });



}







/* ============================================================
        10. AUTO ENABLE MOUSE EFFECT
============================================================ */


document.addEventListener(
"mousemove",
()=>{


    enableLetterMouseTrail();


},
{
    once:true
});








/* ============================================================
        11. STOP ALL LETTER EFFECTS
============================================================ */


function stopLetterEffects(){



    romanticIntervals.forEach(
        timer=>clearInterval(timer)
    );



    romanticIntervals=[];



}