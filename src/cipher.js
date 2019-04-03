window.cipher = {
  encode: () => {
    /* Acá va tu código */

    const cipher=()=> {

  let userString = document.getElementById("userString").value.toUpperCase();
  let offSet = document.getElementById("offSet").value;
  let code= ""; // el código final del usuario
  let cesarEncryption; // formula del cifrado cesar

    for(let i=0; i<userString.length; i++){

      if(userString.charCodeAt(i) >= 65 && userString.charCodeAt(i) <= 90 ) {
        cesarEncryption = (userString.charCodeAt(i) - 65 + parseInt(offSet)) % 26 + 65;
        }
      //  else{
        //  alert("Por favor, no insertar simbolos ni especios");
          //break
        //}
        let encrypted= String.fromCharCode(cesarEncryption);
        code+= encrypted;
    }

    document.getElementById("screenTwo").style.display = "none";
    document.getElementById("screenDecipher").style.display = "none";
    document.getElementById("screenCipher").style.display = "block";

   return document.getElementById("userCode").value =code;
}


  },
  decode: () => {
    /* Acá va tu código */

    const decipher=()=> {

      let userString = document.getElementById("userString").value.toUpperCase();
      let offSet = document.getElementById("offSet").value;
      let decode= ""; // el código final del usuario
      let cesarEncryption; // formula del cifrado cesar

        for(let i=0; i<userString.length; i++){

          if(userString.charCodeAt(i) >= 65 && userString.charCodeAt(i) <= 90 ) {
            cesarEncryption = (userString.charCodeAt(i) + 65 - parseInt(offSet)) % 26 + 65;
            }
          //  else{
            //  alert("Por favor, no insertar simbolos ni espacios");
              //break
          //  }
            let encrypted= String.fromCharCode(cesarEncryption);
            decode+= encrypted;
        }

        document.getElementById("screenTwo").style.display = "none";
        document.getElementById("screenCipher").style.display = "none";
        document.getElementById("screenDecipher").style.display = "block";

       return document.getElementById("userDecode").value =decode;
    }


  }
};
