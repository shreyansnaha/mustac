noseX=0;
noseY=0;

function preload(){
mustach_nose=modelLoaded('https://i.postimg.cc/ZqLDt3Zc/XXXXXX.jpg');
}

function setup(){

canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide()

poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotPoses)

}

function modelLoaded(){
    console.log('PoseNet is intialized');

}

function gotPoses(results){

if(results.lenght > 0)
{
    console.log (results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nose x = " + noseX)
    console.log("nose y = " + noseY)
}

}

function draw(){
image(video,0,0,300,300);
image(mustach_nose, noseX+5,noseY+10,30,30)
}

function take_snapshot(){

save('lostfiles.png');

}