video="";
function preload(){
    video= createVideo('video.mp4');
    video.hide();
}
function setup(){
    canavs= createCanvas(480,380);
    canvas.center();
}
function draw(){
    image(video,0,0,480,380);
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modalLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Object";
}
function modalLoaded(){
    console.log("Modal loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}