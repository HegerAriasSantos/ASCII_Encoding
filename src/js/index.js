// const alphabet = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
//   " ",
//   ",",
//   "!",
//   "?",
//   ";",
//   ":",
//   "'",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "á",
//   "é",
//   "í",
//   "ó",
//   "ú",
//   "ñ",
//   ".",
//   "\n",
// ];

// function encrypt(text) {
//   let change = text.trim();
//   const changedText = change.toLowerCase();
//   let newString = "";
//   Array.prototype.forEach.call(changedText, (letra) => {
//     if (alphabet.indexOf(letra) < 9) {
//       let index = `0${alphabet.indexOf(letra) + 1}`;
//       newString += index + " ";
//       return newString;
//     } else {
//       let index = alphabet.indexOf(letra) + 1;
//       newString += index + " ";
//       return newString;
//     }
//   });
//   return newString.trim();
// }
const alphabet = [
  "NULL",
  "SOH",
  "STX",
  "ETX",
  "EOT",
  "ENG",
  "ENQ",
  "ACK",
  "BEL",
  "BS",
  "HT",
  `\n`,
  "VT",
  "FF",
  "CR",
  "SO",
  "SI",
  "DLE",
  "DC1",
  "DC2",
  "DC3",
  "DC4",
  "NAK",
  "SYN",
  "ETB",
  "CAN",
  "EM",
  "SUB",
  "ESC",
  "FS",
  "GS",
  "RS",
  "US",
  " ",
  "!",
  `"`,
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "[",
  `\``,
  "]",
  "^",
  "_",
  "`",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "{",
  "|",
  "}",
  "~",
  "DEL",
  "Ç",
  "ü",
  "é",
  "â",
  "ä",
  "à",
  "å",
  "ç",
  "ê",
  "ë",
  "è",
  "ï",
  "î",
  "ì",
  "Ä",
  "Å",
  "É",
  "æ",
  "Æ",
  "ô",
  "ö",
  "ò",
  "û",
  "ù",
  "ÿ",
  "Ö",
  "Ü",
  "ø",
  "£",
  "Ø",
  "×",
  "ƒ",
  "á",
  "í",
  "ó",
  "ú",
  "ñ",
  "Ñ",
  "ª",
  "º",
  "¿",
  "®",
  "¬",
  "½",
  "¼",
  "¡",
  "«",
  "»",
  "░",
  "▒",
  "▓",
  "│",
  "┤",
  "Á",
  "Â",
  "À",
  "©",
  "╣",
  "║",
  "╗",
  "╝",
  "¢",
  "¥",
  "┐",
  "└",
  "┴",
  "┬",
  "├",
  "─",
  "┼",
  "ã",
  "Ã",
  "╚",
  "╔",
  "╩",
  "╦",
  "╠",
  "═",
  "╬",
  "¤",
  "ð",
  "Ð",
  "Ê",
  "Ë",
  "È",
  "ı",
  "Í",
  "Î",
  "Ï",
  "┘",
  "┌",
  "█",
  "▄",
  "¦",
  "Ì",
  "▀",
  "Ó",
  "ß",
  "Ô",
  "Ò",
  "õ",
  "Õ",
  "µ",
  "þ",
  "Þ",
  "Ú",
  "Û",
  "Ù",
  "ý",
  "Ý",
  "¯",
  "´",
  "≡",
  "±",
  "‗",
  "¾",
  "¶",
  "§",
  "÷",
  "¸",
  "°",
  "¨",
  "·",
  "¹",
  "³",
  "²",
  "■",
  "nbsp",
];
// function encrypt(text) {
//   let change = text.trim()
//   const changedText = change.toLowerCase();
//   let newString = "";
//   Array.prototype.forEach.call(changedText, letra => {
//      if (alphabet.indexOf(letra) < 9){
//       let index =  `0${alphabet.indexOf(letra)  +  1}`
//       newString += index + " ";
//       return newString
//      }
//      else{
//       let index = alphabet.indexOf(letra)  + 1
//       newString += index + " ";
//       return newString
//      }
//   })
//   return newString.trim();
// }

function encrypt(text) {
  const changedText = text.trim();
  let result = "";

  Array.prototype.forEach.call(changedText, (letter) => {
    if (
      letter == 0 ||
      letter == 1 ||
      letter == 2 ||
      letter == 3 ||
      letter == 4 ||
      letter == 5 ||
      letter == 6 ||
      letter == 7 ||
      letter == 8 ||
      letter == 9
    ) {
      console.log(Number(letter));
      result += `${alphabet.indexOf(Number(letter))} `;

      return result;
    } else {
      result += `${alphabet.indexOf(letter)} `;
      return result;
    }
  });

  return result;
}

function Decrypt(number) {
  let textoFinal = "";
  let array = number.trim().split(" ");
  for (let i = 0; i < array.length; i++) {
    if (array[i] == " ") {
      continue;
    } else {
      textoFinal += alphabet[array[i]];
    }
  }
  return textoFinal;
}

const Cod__text2 = document.getElementById("Cod__text");
const Cod__number2 = document.getElementById("Cod__number");
const translateText = () => {
  setTimeout(() => {
    return (Cod__number2.value = encrypt(Cod__text2.value));
  }, 800);
  return (Cod__number2.value = "Translating...");
};
const translateNumber = () => {
  setTimeout(() => {
    if (Cod__text2.value == "" && Cod__number2.value == "") {
    } else if ((Cod__text2.value = " " && Cod__number2.value == "")) {
      return (Cod__text2.value = "");
    } else {
      return (Cod__text2.value = Decrypt(Cod__number2.value));
    }
  }, 800);

  return (Cod__text2.value = "Translating...");
};
