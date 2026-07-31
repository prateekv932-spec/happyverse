/* =====================================================
        HAPPYVERSE 4.0
        GIRLFRIEND DAY SURPRISE
        PART 1
===================================================== */


console.log("Girlfriend Day JS Loaded ❤️");



let girlfriendMusic = null;



/* =====================================================
        START GIRLFRIEND DAY
===================================================== */


function showGirlfriendDay(){


    const app =
    document.getElementById("app");



    app.innerHTML = `


    <section class="girlfriend-page">


        <div class="girlfriend-bg"></div>


        <div id="girlfriendHearts"></div>



        <div class="girlfriend-intro">


            <h1>
                Are you ready...
            </h1>


            <h2>
                to be showered with love? ❤️
            </h2>



            <div class="yes-buttons">


                <button onclick="girlfriendWelcome()">

                    YES ❤️

                </button>



                <button onclick="girlfriendWelcome()">

                    YES 💗

                </button>


            </div>


        </div>



    </section>



    `;



    createGirlfriendHearts();


}







/* =====================================================
        PAGE 2
        GIRLFRIEND DAY WELCOME
===================================================== */


function girlfriendWelcome(){



    const app =
    document.getElementById("app");



    app.innerHTML = `



    <section class="girlfriend-page welcome-page">


        <div class="girlfriend-bg"></div>


        <div class="welcome-card">



            <h1>

                Happy Girlfriend's Day Princess ❤️

            </h1>



            <div class="love-notes">


                <p>
                ✨ To the one who makes every day brighter
                </p>


                <p>
                ❤️ To the one who made me believe in love
                </p>


                <p>
                🌹 To the one who makes ordinary moments special
                </p>


            </div>



            <button onclick="showUSPage()">

                Continue 💗

            </button>



        </div>


    </section>


    `;



}







/* =====================================================
        PAGE 3
        IF YOU WERE HERE
===================================================== */


function showUSPage(){



    const app =
    document.getElementById("app");



    app.innerHTML = `



    <section class="girlfriend-page us-page">


        <div class="girlfriend-bg"></div>



        <div class="us-card">


            <h1>

                If You Were Here...

            </h1>


            <h2>

                This Would Be US ❤️

            </h2>



            <div class="cute-couple">


                💗 🧸 💗


            </div>



            <p>

            Just you and me...

            talking about random things,

            laughing at silly jokes,

            and creating our own little universe ❤️

            </p>



            <button onclick="showDescribePage()">

                Continue ✨

            </button>



        </div>



    </section>



    `;



}







/* =====================================================
        FLOATING HEARTS
===================================================== */


function createGirlfriendHearts(){


    const container =
    document.getElementById(
        "girlfriendHearts"
    );



    if(!container)
    return;



    setInterval(()=>{


        let heart =
        document.createElement("span");



        heart.className =
        "girlfriend-heart";



        heart.innerHTML =
        "❤️";



        heart.style.left =
        Math.random()*100+"%";



        heart.style.animationDuration =
        (Math.random()*5+5)+"s";



        container.appendChild(
            heart
        );



        setTimeout(()=>{

            heart.remove();

        },10000);



    },500);



}

/* =====================================================
        PAGE 4
        IF I HAD TO DESCRIBE YOU
        PART 2
===================================================== */


function showDescribePage(){


    const app =
    document.getElementById("app");



    app.innerHTML = `



    <section class="girlfriend-page describe-page">


        <div class="girlfriend-bg"></div>



        <div class="describe-container">



            <h1>

                If I Had To Describe You... ❤️

            </h1>




            <div class="describe-cards">



                <div class="describe-card">


                    <h2>
                        🌅 Sunset
                    </h2>


                    <p>

                    If you were a sunset...

                    I would stop everything

                    just to admire you.

                    </p>


                </div>






                <div class="describe-card">


                    <h2>
                        📖 Book
                    </h2>


                    <p>

                    If you were a book...

                    I would read every chapter

                    again and again.

                    </p>


                </div>






                <div class="describe-card">


                    <h2>
                        🎶 Song
                    </h2>


                    <p>

                    If you were a song...

                    you would always be

                    my favourite melody.

                    </p>


                </div>




            </div>





            <button onclick="showFavouritePerson()">

                Continue ❤️

            </button>




        </div>


    </section>



    `;



}








/* =====================================================
        PAGE 5
        MY FAVOURITE PERSON
===================================================== */



function showFavouritePerson(){



    const app =
    document.getElementById("app");



    app.innerHTML = `



    <section class="girlfriend-page favourite-page">



        <div class="girlfriend-bg"></div>




        <div class="favourite-container">



            <h1>

                My Favourite Person &lt;3 ❤️

            </h1>



            <p>

                The most beautiful part of my universe ✨

            </p>





            <div class="photo-gallery">



                <div class="polaroid photo-one">

                    <img src="assets/images/girlfriend/photo1.jpg">

                </div>



                <div class="polaroid photo-two">

                    <img src="assets/images/girlfriend/photo2.jpg">

                </div>



                <div class="polaroid photo-three">

                    <img src="assets/images/girlfriend/photo3.jpg">

                </div>



                <div class="polaroid photo-four">

                    <img src="assets/images/girlfriend/photo4.jpg">

                </div>



                <div class="polaroid photo-five">

                    <img src="assets/images/girlfriend/photo5.jpg">

                </div>



            </div>






            <button onclick="showHeartLetter()">

                From My Heart 💌

            </button>




        </div>



    </section>



    `;



}

/* =====================================================
        PAGE 6
        FROM MY HEART TO YOURS
        PART 3
===================================================== */



function showHeartLetter(){


    const app =
    document.getElementById("app");



    app.innerHTML = `



    <section class="girlfriend-page letter-love-page">


        <div class="girlfriend-bg"></div>



        <div class="love-letter-card">



            <h1>

                From My Heart To Yours 💌

            </h1>




            <div class="handwritten-message">


                <p>
                Dear Anwesha ❤️
                </p>



                <p>
                I don't know how to explain
                how special you are to me...
                </p>



                <p>
                But I know that every little
                moment with you becomes a memory
                I want to keep forever.
                </p>



                <p>
                Your smile, your talks,
                your little habits...

                Everything about you
                makes my world brighter ✨
                </p>



                <p>
                Thank you for being
                my favourite person ❤️
                </p>



                <h3>
                Forever & Always,
                <br>
                Prateek ❤️
                </h3>



            </div>





            <button onclick="showLoveMeter()">

                One More Thing ❤️

            </button>




        </div>


    </section>



    `;



}









/* =====================================================
        PAGE 7
        LOVE METER
===================================================== */



function showLoveMeter(){



    const app =
    document.getElementById("app");



    app.innerHTML = `



    <section class="girlfriend-page meter-page">


        <div class="girlfriend-bg"></div>




        <div class="meter-container">



            <h1>

                How much do I love you? ❤️

            </h1>




            <div class="love-meter">



                <div class="meter-fill">

                </div>



                <div class="meter-heart">

                    ❤️

                </div>



            </div>





            <h2>

                100%

            </h2>





            <p>

            The meter is full...

            <br>

            just like my heart ❤️

            </p>





            <button onclick="showFinalGirlfriendMessage()">

                Continue ✨

            </button>



        </div>



    </section>



    `;



}









/* =====================================================
        FINAL MESSAGE
===================================================== */



function showFinalGirlfriendMessage(){



    const app =
    document.getElementById("app");



    app.innerHTML = `



    <section class="girlfriend-page final-girlfriend-page">



        <div class="girlfriend-bg"></div>




        <div class="final-love-box">



            <h1>

                I LOVE YOU ANWESHA ❤️

            </h1>



            <p>

                You are my favourite person,
                my happiest place,
                and my biggest smile ✨

            </p>



            <p class="final-small">

                Thank you for being you ❤️

            </p>



            <button onclick="showHome()">

                Back To HappyVerse 🌙

            </button>



        </div>



    </section>



    `;



    createFinalLoveHearts();



}









/* =====================================================
        FINAL HEART EFFECT
===================================================== */



function createFinalLoveHearts(){



    const page =
    document.querySelector(
        ".final-girlfriend-page"
    );



    if(!page)
    return;




    setInterval(()=>{


        let heart =
        document.createElement("span");



        heart.className =
        "final-love-heart";



        heart.innerHTML =
        Math.random()>0.5
        ?
        "❤️"
        :
        "✨";



        heart.style.left =
        Math.random()*100+"%";



        heart.style.animationDuration =
        (Math.random()*5+5)+"s";



        page.appendChild(
            heart
        );



        setTimeout(()=>{


            heart.remove();


        },10000);



    },500);



}