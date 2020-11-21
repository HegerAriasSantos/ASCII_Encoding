const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
   "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z", " ", ",", "!" ,"?",";",":","'","1","2","3","4","5","6","7","8","9","á","é","í","ó","ú", "ñ",".","n/"];
  //  arreglar el problema de que los saltos de line lo coje como underfined
  function encrypt(text) {
    let change = text.trim()
    const changedText = change.toLowerCase();
    let newString = "";
    Array.prototype.forEach.call(changedText, letra => {
      //  if(!(/[a-zA-Z," ",",",";",":","'"]/).test(letra)) {
      //  return;
      //  } 
       if (alphabet.indexOf(letra) < 9){
        let index =  `0${alphabet.indexOf(letra)  +  1}`
        newString += index + " ";
        return newString
       }
       else{
        let index = alphabet.indexOf(letra)  + 1
        newString += index + " ";
        return newString
       }
    })
    return newString.trim();
  }

function Decrypt(number) {
  let textoFinal = "";
  let numberS = number.trim()
  let array  = numberS.split(' ')
  for(let i = 0; i < array.length; i++) {
    if( array[i] == " ") {
      continue;
    }
    else {
      textoFinal += (alphabet[array[i] - 1])
    }
  }
  return textoFinal
}
// let CambiarAletras = (numeros) => numeros.toString()
let Cod__text2 = document.getElementById("Cod__text")
let Cod__number2 = document.getElementById("Cod__number")

translateText = () =>{
  console.log('text')
  console.log(encrypt(Cod__text2.value))
   return Cod__number2.value = encrypt(Cod__text2.value)
}
translateNumber = () =>{
  if (Cod__text2.value == "" && Cod__number2.value == "") {
    console.log('text empyte')
  } else {
  console.log('number')
  console.log( Decrypt(Cod__number2.value))
  return Cod__text2.value = Decrypt(Cod__number2.value)
  }
}
//  Translate = () =>{
//    setTimeout(() => {
     
//      translateText()
//    },400);
//    setTimeout(() => {
     
//      translateNumber()
//    }, 1000);
// }





// function printNumbers(from, to) {
//   let current = from;

//   let timerId = setInterval(function() {
//     console.log(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);
// }
// printNumbers(5, 10);

// function printNumbers(from, to) {
//   let current = from;

//   setTimeout(function go() {
//     console.log(current);
//     if (current < to) {
//       setTimeout(go, 1000);
//     }
//     current++;
//   });
// }
// printNumbers(5, 10);

