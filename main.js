noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(560, 100);

    video = createCapture(VIDEO);
    video.size(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#8b8b8b');
    text("Shruthika", noseX, noseY); 
    textSize(difference);
}

function modelLoaded() {
    console.log('Model is loaded!');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);  
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWrist =" + leftWristX + "rightWrist =" + rightWristX + "difference =" + difference);
    }
}