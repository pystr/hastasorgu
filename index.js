const urlParams = new URLSearchParams(window.location.search);
const age = urlParams.get('age');
const sex = urlParams.get('sex');
const cp= urlParams.get('cp');
const trestbps= urlParams.get('trestbps');
const chol= urlParams.get('chol');
const fbs= urlParams.get('fbs');
const restecg= urlParams.get('restecg');
const thalach= urlParams.get('thalach');
const exang= urlParams.get('exang');
const oldpeak= urlParams.get('oldpeak');
const slope= urlParams.get('slope');
const ca= urlParams.get('ca');
const thal= urlParams.get('thal');
const nn = ml5.neuralNetwork();
function LoadModel(){
  nn.load("./MyModel/model.json")
  console.log("Model Yüklendi")
 // classify();
}
function classify(){

  const input = {
    "age": parseInt(age),
    "sex": parseInt(sex),
    "cp": parseInt(cp),
    "trestbps": parseInt(trestbps),
    "chol": parseInt(chol),
    "fbs": parseInt(fbs),
    "restecg": parseInt(restecg),
    "thalach": parseInt(thalach),
    "exang": parseInt(exang),
    "oldpeak": parseFloat(2.3),
    "slope": parseInt(slope),
    "ca": parseInt(ca),
    "thal": parseInt(thal),
  }
  console.log("fl",parseFloat(2.3))
  // console.log("inpt",{
  //   age: 57,
  //   sex: 1,
  //   cp: 3,
  //   trestbps: trestbps,
  //   chol: chol,
  //   fbs: fbs,
  //   restecg: restecg,
  //   thalach: thalach,
  //   exang: exang,
  //   oldpeak: oldpeak,
  //   slope: slope,
  //   ca: ca,
  //   thal: thal
  // })
  nn.classify(input, handleResults);
}
$(document).ready(function() {
  document.getElementById('Sonuc').innerHTML="Model Hazır..."
  LoadModel()
});
function handleResults(error, result) {
    if(error){
      console.error(error);
      return;
    }
    document.getElementById('Sonuc').innerHTML=result[0].label
    console.log(result); // {label: 'red', confidence: 0.8};
}
