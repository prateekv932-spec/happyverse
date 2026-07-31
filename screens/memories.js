console.log("Memories.js loaded successfully");


function showMemories(){


    const app = document.getElementById("app");



    app.innerHTML = `


    <div class="memories-page">



        <div id="memory-stars"></div>


        <div id="memory-hearts"></div>





        <!-- Header -->


        <div class="memories-header">


            <button class="back-button" onclick="showHome()">

                ←

            </button>



            <h1>
                Our Memories ❤️
            </h1>



            <p>
                Little moments, endless memories ✨
            </p>


        </div>






        <!-- Scrapbook -->


        <div class="scrapbook">



            ${createScrapbookMemories()}



        </div>




    </div>



    `;



    createMemoryStars();

    createMemoryHearts();



}








function createScrapbookMemories(){



    const memories = [


        {


            image:"assets/images/memories/memory1.jpg",


            date:"A Beautiful Day ✨",


            title:"A Special Smile ❤️",


            message:
            "Some smiles become memories that stay forever in the heart.",


            size:"big"


        },



        {


            image:"assets/images/memories/memory2.jpg",


            date:"A Little Moment 🌸",


            title:"The Happiness We Shared",


            message:
            "Small moments often create the biggest happiness.",


            size:"normal"


        },



        {


            image:"assets/images/memories/memory3.jpg",


            date:"Forever Memory 💖",


            title:"A Moment To Remember",


            message:
            "Some memories are not captured by cameras, they are captured by hearts.",


            size:"wide"


        }


    ];





    return memories.map((memory)=>{



        return `



        <div class="scrap-card ${memory.size}"

        onclick="openScrapMemory(
        '${memory.image}',
        '${memory.title}',
        '${memory.message}'
        )">





            <div class="pin">

            📌

            </div>




            <div class="scrap-photo">


                <img src="${memory.image}">


            </div>





            <div class="scrap-text">



                <h2>

                    ${memory.title}

                </h2>




                <span>

                    ${memory.date}

                </span>





                <p>

                    ${memory.message}

                </p>



            </div>





            <div class="flower">

                🌸

            </div>



        </div>



        `;



    }).join("");



}









function openScrapMemory(image,title,message){



    const popup =
    document.createElement("div");



    popup.className="memory-popup";



    popup.innerHTML=`



    <div class="popup-box">


        <span class="close-popup">

        ×

        </span>



        <img src="${image}">



        <h2>

        ${title}

        </h2>



        <p>

        ${message}

        </p>



    </div>



    `;



    document.body.appendChild(popup);





    document.querySelector(".close-popup")
    .onclick=function(){


        popup.remove();


    };



}









function createMemoryStars(){



    const container =
    document.getElementById("memory-stars");



    for(let i=0;i<70;i++){



        const star =
        document.createElement("span");



        star.className="memory-star";



        const size =
        Math.random()*3+1;



        star.style.width=size+"px";

        star.style.height=size+"px";


        star.style.left=
        Math.random()*100+"%";


        star.style.top=
        Math.random()*100+"%";



        star.style.animationDelay=
        Math.random()*5+"s";



        container.appendChild(star);



    }


}









function createMemoryHearts(){



    const container =
    document.getElementById("memory-hearts");



    setInterval(()=>{



        let heart =
        document.createElement("div");



        heart.className="memory-heart";


        heart.innerHTML="❤️";



        heart.style.left=
        Math.random()*100+"%";



        container.appendChild(heart);




        setTimeout(()=>{


            heart.remove();


        },7000);



    },1800);



}