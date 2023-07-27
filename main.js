song1 = "" ;
song2 = "";

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(600, 500);
}

function draw() {
    image(VIDEO, 0, 0, 600, 500);
}