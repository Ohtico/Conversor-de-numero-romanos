



function obtenerText() {
  numero = document.getElementById('cuadroText').value;

  //DECLARION DE VARIABLES
  let romano = '';
  let str = numero;
  resultado = [];
  let answer1 = '';
  let answer2 = '';
  let answer3 = '';
  let answer4 = '';
  if (str.length == 0) {
    resultado = [];
  } else if (str.length > 0) {
    switch (str[str.length - 1]) {
      case "1":
        answer1 = "I";
        break;
      case "2":
        answer1 = "II";
        break;
      case "3":
        answer1 = "III";
        break;
      case "4":
        answer1 = "IV";
        break;
      case "5":
        answer1 = "V";
        break;
      case "6":
        answer1 = "VI";
        break;
      case "7":
        answer1 = "VII";
        break;
      case "8":
        answer1 = "VIII";
        break;
      case "9":
        answer1 = "IX";
        break;
    }
    switch (str[str.length - 2]) {
      case "1":
        answer2 = "X";
        break;
      case "2":
        answer2 = "XX";
        break;
      case "3":
        answer2 = "XXX";
        break;
      case "4":
        answer2 = "XL";
        break;
      case "5":
        answer2 = "L";
        break;
      case "6":
        answer2 = "LX";
        break;
      case "7":
        answer2 = "LXX";
        break;
      case "8":
        answer2 = "LXXX";
        break;
      case "9":
        answer2 = "XC";
        break;
    }
    switch (str[str.length - 3]) {
      case "1":
        answer3 = "C";
        break;
      case "2":
        answer3 = "CC";
        break;
      case "3":
        answer3 = "CCC";
        break;
      case "4":
        answer3 = "CD";
        break;
      case "5":
        answer3 = "D";
        break;
      case "6":
        answer3 = "DC";
        break;
      case "7":
        answer3 = "DCC";
        break;
      case "8":
        answer3 = "DCCC";
        break;
      case "9":
        answer3 = "CM";
        break;
    }
    switch (str[str.length - 4]) {
      case "1":
        answer4 = "M";
        break;
      case "2":
        answer4 = "MM";
        break;
      case "3":
        answer4 = "MMM";
        break;
        
    }
    resultado.push(answer4,answer3,answer2,answer1);
    romano = resultado.join('')

    swal.fire({
      title: `El numero Romano es: ${romano}`, 
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: `Entendido`,
      timer: 4500,
      imageUrl: 'https://static2.abc.es/media/ciencia/2020/09/09/AdobeStock_60291725-k3hH--620x349@abc.jpg',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',

    })
  }
}