// pasa de la pantalla de introducción a la pantalla de pregunta del offset
document.getElementById("screenOne").addEventListener("click", ()=> {

  document.getElementById("screenDecipher").style.display = "none";
  document.getElementById("screenCipher").style.display = "none";
  document.getElementById("screenIntro").style.display = "none";
  document.getElementById("screenOneA").style.display = "block";

}
);
// pasa de la pantalla del offset a la pantalla del mensaje o código
document.getElementById("screenTwo").addEventListener("click", ()=> {

  document.getElementById("screenOneA").style.display = "none";
  document.getElementById("screenTwoA").style.display = "block";

}
);
// botón que limpia el campo del mensaje o códijo
document.getElementById("clean").addEventListener("click", ()=> {

document.getElementById("userString").value=" ";

}
);

// función para el cifrado
document.getElementById("cipher").addEventListener("click", ()=> {

  let userString = document.getElementById("userString").value.toUpperCase();
  let offSet = document.getElementById("offSet").value;

  document.getElementById("screenTwoA").style.display = "none";
  document.getElementById("screenDecipher").style.display = "none";
  document.getElementById("screenCipher").style.display = "block";

 document.getElementById("userCode").value = window.cipher.encode(offSet, userString);
}
);

// función para el decifrado
document.getElementById("decipher").addEventListener("click", ()=> {

  let userString = document.getElementById("userString").value.toUpperCase();
  let offSet = document.getElementById("offSet").value;

  document.getElementById("screenTwoA").style.display = "none";
  document.getElementById("screenCipher").style.display = "none";
  document.getElementById("screenDecipher").style.display = "block";

document.getElementById("userDecode").value = window.cipher.decode(offSet, userString);
}
);

//document.getElementById("start").addEventListener("click", ()=> {

  // document.getElementById("screenDecipher").style.display = "none";
  //document.getElementById("screenCipher").style.display = "none";
  //document.getElementById("screenIntro").style.display = "none";
  //document.getElementById("screenOneA").style.display = "block";

//}
//);

// pantalla de despedida
document.getElementById("screenFinal").addEventListener("click", ()=> {

  document.getElementById("screenDecipher").style.display = "none";
  document.getElementById("screenCipher").style.display = "none";
  document.getElementById("screenFinalA").style.display = "block";

}
);
