console.log("hi");
document.getElementById("calc").addEventListener("click", clickedBtn);
function clickedBtn() {
  //input
  let inp2 = +document.getElementById("input2").value;

  //process
  answer = ((inp2 - 32) * 5) / 9;
  answer = answer.toFixed(0);
  //Output
  document.getElementById("output").innerHTML = answer;
  document.getElementById("thermo1").src = "IMG/thermo.png";
  document.getElementById("html").style.background = "red";
  document.getElementById("cels1").value = "";
  document.getElementById("calc").style.background = " #26d978";
  document.getElementById("calc1").style.background = " white";
  document.getElementById("link").href = "https://www.google.com/";
}
//Clicked farenheit
document.getElementById("calc1").addEventListener("click", clickfaren);

function clickfaren() {
  //input
  let inp1 = +document.getElementById("cels1").value;
  //process
  answer1 = (inp1 * 9) / 5 + 32;
  answer1 = answer1.toFixed(0);
  //output
  document.getElementById("output").innerHTML = answer1;
  document.getElementById("thermo1").src = "IMG/thermo.png";
  document.getElementById("html").style.background = "blue";
  document.getElementById("input2").value = "";
  document.getElementById("calc1").style.background = " #26d978";
  document.getElementById("calc").style.background = " white";
  document.getElementById("link").href = "https://www.google.com/";
}
