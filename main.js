song ="";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristy = "";


function preload(){
    song.loadSound("dev.mp3");
    song.setVolume(1);
    song.rate(1);
}

function setup(){
    canvas = createCanvas(621.21, 520.22);
    canvas.position(625, 300);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Posenet is itinilazed..");
}

function gotPoses(results){
    if(results > 0){
        console.log(results);  
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left wrist X :"+ leftWristX +"| Left Wrist Y :" + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right wrist X :"+ rightWristX +"| Right Wrist Y :" + rightWristY);
    }
}

function draw(){
    image(video, 0, 0, 621, 520);
}