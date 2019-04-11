window.cipher = {
  encode: (offSet, userString) => {
    /* Acá va tu código */

  let code=""; // el código final del usuario
  let cesarEncryption; // formula del cifrado cesar

    for(let i=0; i<userString.length; i++){

        if(userString.charCodeAt(i) >= 65 && userString.charCodeAt(i) <= 90){
          cesarEncryption = (userString.charCodeAt(i) - 65 + parseInt(offSet)) % 26 + 65;
          }

          else if(userString.charCodeAt(i) >= 97 && userString.charCodeAt(i) <= 122){
            cesarEncryption = (userString.charCodeAt(i) - 97 + parseInt(offSet)) % 26 + 97;
            }

            else if(userString.charCodeAt(i) >= 48 && userString.charCodeAt(i) <= 57){
              cesarEncryption = (userString.charCodeAt(i) - 48 + parseInt(offSet)) % 10 + 48;
              }

            else if(userString.charCodeAt(i) === 32){
              cesarEncryption = (userString.charCodeAt(i) - 32 + parseInt(offSet)) % 1 + 32;
              }

        let encrypted= String.fromCharCode(cesarEncryption);
        code+= encrypted;
    }

return code

  },
  decode: (offSet, userString) => {
    /* Acá va tu código */

      let decode=""; // el código final del usuario
      let cesarEncryption; // formula del cifrado cesar

        for(let i=0; i<userString.length; i++){

          if(userString.charCodeAt(i) >= 65 && userString.charCodeAt(i) <= 90){
            cesarEncryption = (userString.charCodeAt(i) + 65 - parseInt(offSet)) % 26 + 65;
            }

            else if(userString.charCodeAt(i) >= 97 && userString.charCodeAt(i) <= 122){
              cesarEncryption = (userString.charCodeAt(i) - 122 - parseInt(offSet)) % 26 + 122;
              }

              else if(userString.charCodeAt(i) >= 48 && userString.charCodeAt(i) <= 57){
                cesarEncryption = (userString.charCodeAt(i) - 57 - parseInt(offSet)) % 10 + 57;
                }

              else if(userString.charCodeAt(i) === 32){
                cesarEncryption = (userString.charCodeAt(i) - 32 + parseInt(offSet)) % 1 + 32;
                }

            let encrypted= String.fromCharCode(cesarEncryption);
            decode+= encrypted;
        }

return decode

  }
};
