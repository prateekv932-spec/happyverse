console.log("Home.js loaded successfully");


function showHome(){

    const app = document.getElementById("app");


    app.innerHTML = `


    <div class="home">


        <!-- Background Effects -->

        <div id="stars"></div>

        <div id="balloons"></div>

        <div id="hearts"></div>

        <div id="sparkles"></div>




        <!-- Profile Section -->


        <div class="home-profile">


            <div class="profile-ring">

                <img 
                src="assets/images/anwesha.jpg"
                alt="Anwesha">

            </div>



            <h1>
                Happy Birthday ❤️
            </h1>



            <h2>
                Anwesha
            </h2>



            <p>
                Welcome to your own little universe ✨
            </p>


        </div>





        <!-- Menu Cards -->


        <div class="home-cards">



            <div class="home-card" onclick="showGirlfriendDay()">


    <div class="card-icon">
        💗
    </div>


    <div>

        <h3>
            Girlfriend Day Surprise
        </h3>


        <p>
            A little world made only for you ❤️
        </p>


    </div>


</div>






            <div class="home-card" onclick="showLoveCourt()">

    <div class="card-icon">
        ⚖️
    </div>

    <div>

        <h3>
            Our Love Court
        </h3>

        <p>
            A serious case against Anwesha 😂❤️
        </p>

    </div>

</div>







            <!-- Letter -->

            <div class="home-card"
            onclick="showLetter()">



                <div class="card-icon">
                    💌
                </div>


                <div>

                    <h3>
                        A Special Letter
                    </h3>


                    <p>
                        Something from my heart ❤️
                    </p>


                </div>


            </div>







            <!-- Birthday Surprise -->

            <div class="home-card"
            onclick="showBirthdaySurprise()">



                <div class="card-icon">
                    🎁
                </div>


                <div>

                    <h3>
                        Birthday Surprise
                    </h3>


                    <p>
                        Keep this for last ✨
                    </p>


                </div>


            </div>



        </div>






        <!-- Footer -->


        <div class="home-footer">

            Made with ❤️ for Anwesha

        </div>



    </div>



    `;



    createHomeEffects();

}









function createHomeEffects(){


    createStars();


    createBalloons();


    createHearts();


    createSparkles();


}









function createStars(){



    const container =
    document.getElementById("stars");



    for(let i=0;i<120;i++){



        let star =
        document.createElement("span");



        star.className="star";



        let size =
        Math.random()*4+1;



        star.style.width =
        size+"px";



        star.style.height =
        size+"px";



        star.style.left =
        Math.random()*100+"%";



        star.style.top =
        Math.random()*100+"%";



        star.style.animationDelay =
        Math.random()*5+"s";



        container.appendChild(star);



    }


}










function createBalloons(){



    const container =
    document.getElementById("balloons");



    const colors=[

        "#ff5ca8",
        "#ffd166",
        "#8ec5ff",
        "#c77dff"

    ];



    for(let i=0;i<8;i++){



        let balloon =
        document.createElement("div");



        balloon.className="balloon";



        balloon.style.left =
        Math.random()*100+"%";



        balloon.style.background =
        colors[
        Math.floor(Math.random()*colors.length)
        ];



        balloon.style.animationDelay =
        Math.random()*8+"s";



        container.appendChild(balloon);



    }


}









function createHearts(){



    const container =
    document.getElementById("hearts");



    setInterval(()=>{



        let heart =
        document.createElement("div");



        heart.className="heart";



        heart.innerHTML="❤️";



        heart.style.left =
        Math.random()*100+"%";



        container.appendChild(heart);




        setTimeout(()=>{

            heart.remove();

        },8000);



    },1500);



}










function createSparkles(){



    const container =
    document.getElementById("sparkles");



    setInterval(()=>{



        let sparkle =
        document.createElement("div");



        sparkle.className="sparkle";



        sparkle.innerHTML="✨";



        sparkle.style.left =
        Math.random()*100+"%";



        sparkle.style.top =
        Math.random()*100+"%";



        container.appendChild(sparkle);




        setTimeout(()=>{


            sparkle.remove();


        },2500);



    },700);



}