/* =====================================================
        HAPPYVERSE 5.0
        ULTIMATE BIRTHDAY SURPRISE
        CINEMATIC EXPERIENCE
        birthday.js Part 1A
===================================================== */


console.log("HappyVerse 5.0 Birthday Loaded ❤️");


let birthdayMusic = null;
let cameraSound = null;
let heartbeatSound = null;

let birthdayTimers = [];

let currentMemory = 0;
let memoryInterval = null;
let finalScreenShown = false;



/* =====================================================
        PHOTOS
===================================================== */


const birthdayPhotos = [

"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg",
"photo5.jpg",
"photo6.jpg",
"photo7.jpg",
"photo8.jpg",
"photo9.jpg",
"photo10.jpg"

];



const memoryTexts=[


"The day our beautiful memories started ❤️",

"Every smile became my favourite thing ✨",

"Little moments became forever memories 🌹",

"Some memories deserve to stay forever ❤️",

"You made ordinary days magical ✨",

"Every conversation with you feels special 💫",

"Thank you for all these beautiful moments 🌸",

"You are my happiest memory ❤️",

"Our journey is my favourite story ✨",

"And this is only the beginning ❤️"


];





/* =====================================================
        IMAGE PRELOADER
===================================================== */


function preloadBirthdayImages(){


    birthdayPhotos.forEach(photo=>{


        let img=new Image();


        img.src=
        "assets/images/birthday/"
        +
        photo;


    });


}







/* =====================================================
        START SURPRISE
===================================================== */


function showBirthdaySurprise(){


const app=document.getElementById("app");



currentMemory=0;

finalScreenShown = false;

birthdayTimers.forEach(clearInterval);
birthdayTimers = [];



preloadBirthdayImages();



app.innerHTML=`

<section class="birthday-page">


<div class="cinematic-bg"></div>


<div id="birthdayStars"></div>


<div class="intro-cinema">


<h1>
I saved this moment...
</h1>


<h2>
just for you ❤️
</h2>


<p>
Because someone special deserves more than words...
</p>


<p>
This little universe is created for you ✨
</p>


</div>



</section>


`;



startBirthdayMusic();


createBirthdayStars();





setTimeout(()=>{


document
.querySelector(".intro-cinema")
.classList.add("intro-hide");


},6000);



setTimeout(()=>{


showPolaroidJourney();


},7500);



}







/* =====================================================
        MUSIC WITH FADE IN
===================================================== */


function startBirthdayMusic(){


if(birthdayMusic){

birthdayMusic.pause();

}



birthdayMusic=
new Audio(
"assets/music/birthday.mp3"
);



birthdayMusic.loop=true;


birthdayMusic.volume=0;



birthdayMusic.play()
.catch(()=>{});



let fade=setInterval(()=>{


if(birthdayMusic.volume < 0.35){


birthdayMusic.volume +=0.02;


}

else{


clearInterval(fade);


}


},200);



}







/* =====================================================
        STAR BACKGROUND
===================================================== */


function createBirthdayStars(){


const box=
document.getElementById(
"birthdayStars"
);



if(!box)return;



for(let i=0;i<100;i++){


let star=document.createElement("span");


star.className="birthday-star";


star.style.left=
Math.random()*100+"%";


star.style.top=
Math.random()*100+"%";


star.style.animationDelay=
Math.random()*5+"s";


box.appendChild(star);



}



}

/* =====================================================
        HAPPYVERSE 5.0
        HANGING POLAROID MEMORY GALLERY
        birthday.js Part 1B
===================================================== */





/* =====================================================
        SHOW POLAROID JOURNEY
===================================================== */


function showPolaroidJourney(){


const app=document.getElementById("app");



app.innerHTML=`

<section class="birthday-page polaroid-page">


<div class="cinematic-bg"></div>


<div class="fairy-lights" id="fairyLights"></div>


<div id="memoryParticles"></div>




<div class="memory-title-box">


<h1>
Our Beautiful Journey ❤️
</h1>


<p>
Every picture holds a little piece of us ✨
</p>


</div>





<div class="string-gallery">


<div class="photo-string"></div>



<div class="polaroid-container"
id="polaroidContainer">


<div class="polaroid-card">


<div class="photo-holder">


<img 
id="memoryImage"
src="assets/images/birthday/photo1.jpg"
>


</div>


<p id="memoryText">
</p>


</div>


</div>


</div>





<div class="memory-counter"
id="memoryCounter">

1 / 10

</div>




</section>


`;



createFairyLights();


createMemoryParticlesPremium();


startPolaroidSlideshow();



}







/* =====================================================
        FAIRY LIGHT CREATION
===================================================== */


function createFairyLights(){



const container=
document.getElementById(
"fairyLights"
);



if(!container)
return;



for(let i=0;i<25;i++){



let bulb=document.createElement("span");



bulb.className=
"fairy-bulb";



bulb.style.left=
(i*4)+"%";



bulb.style.animationDelay=
Math.random()*3+"s";



container.appendChild(
bulb
);



}



}








/* =====================================================
        POLAROID SLIDESHOW
===================================================== */


function startPolaroidSlideshow(){



const image=
document.getElementById(
"memoryImage"
);



const text=
document.getElementById(
"memoryText"
);



const counter=
document.getElementById(
"memoryCounter"
);



if(!image)
return;



function nextMemory(){



image.classList.remove(
"photo-show"
);



setTimeout(()=>{


playCameraSound();



image.src=
"assets/images/birthday/"
+
birthdayPhotos[currentMemory];



text.innerHTML=
memoryTexts[currentMemory];



counter.innerHTML=

(currentMemory+1)
+
" / "
+
birthdayPhotos.length;



image.classList.add(
"photo-show"
);



rotatePolaroid();



currentMemory++;




if(currentMemory >= birthdayPhotos.length){

    birthdayTimers.forEach(clearInterval);
    birthdayTimers = [];

    setTimeout(()=>{

        showHeartMessage();

    },4000);

    return;

}



},700);



}





text.innerHTML=
memoryTexts[0];


image.classList.add(
"photo-show"
);



setTimeout(()=>{


let slider=setInterval(()=>{


nextMemory();



},5000);



birthdayTimers.push(
slider
);



},5000);



}









/* =====================================================
        RANDOM POLAROID ROTATION
===================================================== */


function rotatePolaroid(){



const card=
document.querySelector(
".polaroid-card"
);



if(!card)
return;



let angle=
Math.random()*8-4;



card.style.transform=
`
rotate(${angle}deg)
`;



}









/* =====================================================
        CAMERA SHUTTER SOUND
===================================================== */


function playCameraSound(){



if(!cameraSound){


cameraSound=
new Audio(
"assets/music/camera.mp3"
);



}



cameraSound.currentTime=0;


cameraSound.volume=0.4;


cameraSound.play()
.catch(()=>{});



}









/* =====================================================
        PREMIUM FLOATING PARTICLES
===================================================== */


function createMemoryParticlesPremium(){



const box=
document.getElementById(
"memoryParticles"
);



if(!box)
return;



let timer=setInterval(()=>{


let particle=
document.createElement("span");



particle.className=
"memory-golden-dust";



particle.style.left=
Math.random()*100+"%";



particle.style.animationDuration=
(Math.random()*5+5)
+"s";



box.appendChild(
particle
);



setTimeout(()=>{


particle.remove();


},9000);



},300);



birthdayTimers.push(
timer
);



}

/* =====================================================
        HAPPYVERSE 5.0
        EMOTIONAL MESSAGE + FINAL LOVE SCREEN
        birthday.js Part 2
===================================================== */





/* =====================================================
        HEART MESSAGE SCREEN
===================================================== */


function showHeartMessage(){


const app=
document.getElementById("app");



app.innerHTML=`

<section class="birthday-page heart-screen">


<div class="cinematic-bg"></div>


<div id="heartParticles"></div>




<div class="heart-message-box">


<div class="glowing-heart">

❤️

</div>




<h1>

Anwesha...

</h1>



<div class="typed-love-message"
id="typedLoveMessage">


</div>



</div>



</section>


`;



createHeartParticles();


startLoveTyping();



}









/* =====================================================
        TYPEWRITER LOVE MESSAGE
===================================================== */


function startLoveTyping(){


const text=`

Thank you for coming into my life ❤️


Thank you for every smile,
every conversation,
and every beautiful memory.


You made my ordinary days
feel magical ✨


No matter where life takes us,
you will always be
my favourite person.


Happy Birthday My Love ❤️


`;



const box=
document.getElementById(
"typedLoveMessage"
);



let index=0;



function type(){


if(index < text.length){



let char=
text.charAt(index);



if(char==="\n"){


box.innerHTML += "<br>";


}
else{


box.innerHTML += char;


}



index++;



setTimeout(
type,
45
);



}
else{


setTimeout(()=>{


showFinalLoveScreen();



},5000);



}



}



type();



}









/* =====================================================
        HEART FLOATING PARTICLES
===================================================== */


function createHeartParticles(){



const container=
document.getElementById(
"heartParticles"
);



if(!container)
return;



let timer=setInterval(()=>{



let heart=
document.createElement("span");



heart.className=
"floating-love-heart";



heart.innerHTML=
Math.random()>0.5
?
"❤️"
:
"✨";



heart.style.left=
Math.random()*100+"%";



heart.style.animationDuration=
(Math.random()*5+5)
+"s";



container.appendChild(
heart
);



setTimeout(()=>{


heart.remove();



},9000);



},400);



birthdayTimers.push(
timer
);



}









/* =====================================================
        FINAL LOVE SCREEN
===================================================== */


function showFinalLoveScreen(){



const app=
document.getElementById("app");



app.innerHTML=`

<section class="birthday-page final-love-screen">


<div class="cinematic-bg"></div>


<div id="loveExplosion"></div>




<div class="final-love-content">



<div class="final-ring">


❤️


</div>





<h1>


I LOVE YOU ANWESHA ❤️


</h1>




<p>


Thank you for being
the happiest chapter of my life ✨


</p>



<div class="final-sign">


Forever & Always

<br>

Prateek ❤️


</div>




</div>




</section>


`;



stopBirthdayMusic();


playHeartbeat();



createLoveExplosion();



}









/* =====================================================
        HEARTBEAT SOUND
===================================================== */


function playHeartbeat(){



if(!heartbeatSound){


heartbeatSound=
new Audio(
"assets/music/heartbeat.mp3"
);



}



heartbeatSound.volume=0.5;


heartbeatSound.play()
.catch(()=>{});



}









/* =====================================================
        STOP BIRTHDAY MUSIC
===================================================== */


function stopBirthdayMusic(){



if(birthdayMusic){


birthdayMusic.pause();


birthdayMusic=null;


}



}









/* =====================================================
        FINAL HEART EXPLOSION
===================================================== */


function createLoveExplosion(){



const container=
document.getElementById(
"loveExplosion"
);



if(!container)
return;



for(
let i=0;
i<100;
i++
){



let heart=
document.createElement("span");



heart.className=
"explosion-heart";



heart.innerHTML=
Math.random()>0.3
?
"❤️"
:
"✨";



heart.style.setProperty(
"--x",
(Math.random()*800-400)
+"px"
);



heart.style.setProperty(
"--y",
(Math.random()*600-300)
+"px"
);



container.appendChild(
heart
);



setTimeout(()=>{


heart.remove();


},4000);



}



}









/* =====================================================
        EXIT SURPRISE
===================================================== */


function exitBirthday(){



stopBirthdayMusic();



if(heartbeatSound){


heartbeatSound.pause();


}



birthdayTimers.forEach(
clearInterval
);



birthdayTimers=[];



showHome();



}