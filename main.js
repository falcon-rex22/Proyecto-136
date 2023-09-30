object_detector = ml5.objectDetector(video, modelLoaded);
status = "";

function setup(){
    canvas.createCenvas(480, 380);
    canvas.center();

    video.createCapture(VIDEO);
    video.hide();
}

function start(){
    cocossd.on("cocossd", gotResults)
    document.getElementById("satus").innerHTML = "Detectando aparato";
    campo_texto = document.getElementById("campo_texto").value;
}

function modelLoaded(){
    console.log("Modelo cargado");
    status = true;   
}

function draw(){
    image(video, 0, 0, 480, 380);
}