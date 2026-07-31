console.log("Playlist.js loaded successfully");



let currentSong = 0;

let isPlaying = false;



const songs = [


    {

        name:"Perfect",

        artist:"Ed Sheeran",

        file:"assets/music/song1.mp3"

    },


    {

        name:"Until I Found You",

        artist:"Stephen Sanchez",

        file:"assets/music/song2.mp3"

    },


    {

        name:"Golden Hour",

        artist:"JVKE",

        file:"assets/music/song3.mp3"

    }



];





let audio = new Audio();

let progressTimer;






function showPlaylist(){



    const app =
    document.getElementById("app");



    app.innerHTML = `



    <div class="playlist-page">



        <div class="playlist-stars"></div>

        <div id="music-notes"></div>



        <div class="playlist-header">


            <button class="back-button" onclick="showHome()">

                ←

            </button>


            <h1>

                Birthday Playlist 🎵

            </h1>


            <p>

                Songs that remind me of you ❤️

            </p>



        </div>







        <div class="music-player">



            <div class="album-cover">


                <img 
                src="assets/images/music-cover.jpg"
                id="coverImage">


            </div>





            <h2 id="songName">

                Perfect

            </h2>



            <p id="artistName">

                Ed Sheeran

            </p>







            <div class="visualizer">


                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>


            </div>








            <div class="time-box">


    <span id="currentTime">
        0:00
    </span>



    <span id="duration">
        0:00
    </span>


</div>



<div class="progress">


    <input 
    type="range"
    id="seekBar"
    value="0"
    min="0"
    max="100">


</div>







            <div class="controls">


                <button onclick="previousSong()">

                    ⏮

                </button>



                <button 
                class="play-button"
                onclick="toggleMusic()">


                    ▶️


                </button>




                <button onclick="nextSong()">


                    ⏭


                </button>



            </div>





            <p class="music-message">


                Every song has a memory ❤️


            </p>



        </div>








        <div class="song-list">


            ${createSongList()}


        </div>




    </div>



    `;



    loadSong();
    createMusicNotes();



}









function createSongList(){



    return songs.map((song,index)=>{


        return `



        <div class="song-item"

        onclick="changeSong(${index})">


            <div>


                <h3>

                ${song.name}

                </h3>



                <p>

                ${song.artist}

                </p>


            </div>



            <span>

                🎵

            </span>



        </div>



        `;



    }).join("");



}









function loadSong(){



    audio.src =
    songs[currentSong].file;



    document.getElementById("songName")
    .innerHTML =
    songs[currentSong].name;



    document.getElementById("artistName")
    .innerHTML =
    songs[currentSong].artist;



}









function toggleMusic(){


    const button =
    document.querySelector(".play-button");



    if(!isPlaying){



        audio.play();



        isPlaying=true;



        button.innerHTML="⏸";



        document.querySelector(".music-player")
        .classList.add("playing");



        startProgress();



    }

    else{


        audio.pause();



        isPlaying=false;



        button.innerHTML="▶️";



        document.querySelector(".music-player")
        .classList.remove("playing");



        clearInterval(progressTimer);


    }


}









function changeSong(index){


    audio.pause();


    currentSong=index;


    isPlaying=false;


    audio.currentTime=0;


    loadSong();



    const button =
    document.querySelector(".play-button");


    button.innerHTML="▶️";


}









function nextSong(){


    currentSong++;


    if(currentSong >= songs.length){

        currentSong=0;

    }


    changeSong(currentSong);


}









function previousSong(){


    currentSong--;


    if(currentSong < 0){

        currentSong=songs.length-1;

    }


    changeSong(currentSong);


}

function startProgress(){


    clearInterval(progressTimer);



    progressTimer=setInterval(()=>{


        if(audio.duration){



            let percentage =
            (audio.currentTime / audio.duration) * 100;



            const seek =
            document.getElementById("seekBar");



            if(seek){

                seek.value=percentage;

            }




            document.getElementById("currentTime")
            .innerHTML =
            formatTime(audio.currentTime);



            document.getElementById("duration")
            .innerHTML =
            formatTime(audio.duration);



        }



    },500);



}

audio.addEventListener("ended",()=>{


    nextSong();


});

function createMusicNotes(){


    const container =
    document.getElementById("music-notes");



    setInterval(()=>{


        const note =
        document.createElement("div");



        note.className="music-note";


        const notes=["🎵","🎶","🎧","❤️"];


        note.innerHTML =
        notes[Math.floor(Math.random()*notes.length)];



        note.style.left =
        Math.random()*100+"%";



        container.appendChild(note);



        setTimeout(()=>{


            note.remove();


        },6000);



    },1200);



}

function formatTime(seconds){


    if(isNaN(seconds)){

        return "0:00";

    }



    let minutes =
    Math.floor(seconds/60);



    let sec =
    Math.floor(seconds%60);



    if(sec < 10){

        sec="0"+sec;

    }



    return minutes+":"+sec;


}

document.getElementById("seekBar")
.addEventListener("input",function(){


    if(audio.duration){


        audio.currentTime =
        (this.value/100)
        *
        audio.duration;


    }


});