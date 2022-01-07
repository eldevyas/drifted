// Navigation Bar

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    }

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    }
 
    
// Sound Button

function sound() {
    var vid = document.getElementById("video");

    var btn = document.getElementById("btn")
    

    if (video.muted === false) {    
        video.muted = true;
        document.getElementById("btn").className = "fas fa-volume-off";
        video.volume = 0;
    }
    else {
        video.muted = false;
        document.getElementById("btn").className = "fas fa-volume-up";
        video.volume = 1;
    };

function unmute() {
    var vid = document.getElementById("video");


    video.muted = false;
    video.volume = 1;
    }
}

var mediaPlayer = document.getElementById('video');


document.getElementById('slide').addEventListener('change', function(ev){
    mediaPlayer.volume = ev.target.value
});


document.getElementById("control").onclick = function() {

    if(document.getElementById("video").paused){
    document.getElementById("video").play();
        this.className ="fa fa-pause";

    }else{
        document.getElementById("video").pause();
        this.className ="fa fa-play";

    }
}


let i = document.getElementById("slide"),
o = document.querySelector('output'),
video = document.getElementById('video'); 

i.addEventListener('input', function () {

        o.innerHTML = Math.floor(i.value * 100);
        console.log(i.value);
        }, false);

var slider = document.getElementById("slide");
slider.addEventListener("wheel", function(e){
if (e.deltaY < 0){
    slider.valueAsNumber += 0.1;
    o.innerHTML = slider.value * 100;
    video.volume = slider.value;
}else{
    slider.value -= 0.1;
    o.innerHTML = slider.value * 100;
    video.volume = slider.value;

}

e.preventDefault();
e.stopPropagation();


})



let output = document.querySelector('output'),
    video_vol = document.querySelector('video');

    console.log(video.volume)
if (video_vol.volume = 0){
    output.innerHTML = "Muted";
    console.log(output.innerHTML)
}


let progress = document.getElementById( "progress" );
var video_time = document.querySelector("video");


function progressLoop() {
    setInterval(function () {
    document.getElementById("progress").value = Math.round(
        (video_time.currentTime / video_time.duration) * 100
    );
    });
}

progressLoop()
