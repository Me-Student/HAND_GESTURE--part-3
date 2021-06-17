prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

camera = document.getElementById("camera");

Webcam.attach(camera);

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log("ml5 version is", ml5.version);
  
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fPDppZkto/model.json",modelLoaded);

  function modelLoaded() {
    console.log("Model Loaded!");
  }
  
function speak(){
  var synth = window.speechSynthesis;
  speak_data_1 = "The first prediction is " + prediction_1;
  speak_data_2 = "And the second prediction is " + prediction_2;
  var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
  synth.speak(utterThis);
}

function check(){
    img= document.getElementById("captured_image")
    classifier.classify(img, gotResult)
}

function gotResult(error,results){
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results); 
    }
}

Webcam.set(
  {
      width:360,
      height:360,
      image_format:'png',
      png_format:90
  }
);





camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
 Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML="<img id='img_result' src='"+data_uri+"'>";
});
console.log("ml.5 version=",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fPDppZkto/model.json",modelLoaded);
function modelLoaded(){
  console.log("modelloaded");
}

}
function check(){
  image=document.getElementById("img_result");
  classifier.classify(image,gotResult);
}

function gotResult(error,results){
  if (error){
      console.log(error);
  }
  else{
      console.log(results);
      document.getElementById("emotion1_output").innerHTML=results[0].label;
      
  }
  if (results[0].label=="Best"){
      document.getElementById("emoji1_output").innerHTML=" &#128077;";
  }
  if (results[0].label=="Amazing"){
      document.getElementById("emoji1_output").innerHTML="&#9996;";
  }
  if (results[0].label=="Nice"){
      document.getElementById("emoji1_output").innerHTML="&#128076; ";
  }
  

}