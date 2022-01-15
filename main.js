status = "";

function preload()
{
    family = "family image.jpg";
}

function setup()
{
    canvas = createCanvas(250,250);
    canvas.centre();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("no_detected").innerHTML = "status : detecting objects";
}

function modelLoaded()
{
    console.log("model Is Loaded");
    status =true;
    object_detector.detect(img , gotResults);
}

function gotResults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}