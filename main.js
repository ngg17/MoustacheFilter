mouthX=0;
mouthY=0;

function preload() {
mouth = loadImage('https://i.postimg.cc/zff0M5bP/Moustache.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(530, 200);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        mouthX = results[0].pose.nose.x - 20;
        mouthY = results[0].pose.nose.y;
        console.log("mouth x = " + mouthX);
        console.log("mouth y = " + mouthY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mouth, mouthX, mouthY, 50, 30);
}

function take_snapshot() {
    save('myFilterImage.png');
}