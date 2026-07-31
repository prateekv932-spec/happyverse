console.log("Splash.js loaded successfully");


function showSplash(){


    const app = document.getElementById("app");


    app.innerHTML = `


    <div class="splash">


        <div class="splash-stars"></div>


        <div class="splash-content">


            <h1>
                HappyVerse ❤️
            </h1>


            <p>
                A universe created just for you ✨
            </p>


            <div class="loading">

                <span></span>
                <span></span>
                <span></span>

            </div>


        </div>


    </div>


    `;



    createSplashStars();



    setTimeout(()=>{


        showScanner();


    },5000);



}





function createSplashStars(){


    const container =
    document.querySelector(".splash-stars");


    if(!container) return;



    for(let i=0;i<80;i++){


        const star =
        document.createElement("div");


        star.className="splash-star";



        const size =
        Math.random()*3+1;



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