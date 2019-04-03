function screenOne(){
  document.getElementById("screenDecipher").style.display = "none";
  document.getElementById("screenCipher").style.display = "none";
  document.getElementById("screenIntro").style.display = "none";
  document.getElementById("screenOne").style.display = "block";
}

function screenTwo(){
  document.getElementById("screenOne").style.display = "none";
  document.getElementById("screenTwo").style.display = "block";
}

function clean(){
document.getElementById("userString").value=" ";
}

//function cipher() {
//  document.getElementById("screenTwo").style.display = "none";
//  document.getElementById("screenDecipher").style.display = "none";
//  document.getElementById("screenCipher").style.display = "block";
//}

//function decipher() {
//  document.getElementById("screenTwo").style.display = "none";
//  document.getElementById("screenCipher").style.display = "none";
//  document.getElementById("screenDecipher").style.display = "block";
//}

function screenFinal() {
  document.getElementById("screenDecipher").style.display = "none";
  document.getElementById("screenCipher").style.display = "none";
  document.getElementById("screenFinal").style.display = "block";
}
