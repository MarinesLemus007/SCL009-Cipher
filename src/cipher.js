window.cipher = {
  encode: (offSet, userString) => {
    /* Acá va tu código */

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

return code

  },
  decode: (offset, userString) => {
    /* Acá va tu código */

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

return decode

  }
};
