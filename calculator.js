//FUNCIONES DECLARATIVAS
//SOLO SE HACE UNA VEZ
//function
function sum(a, b) {

  //en caso de que no haya argumentos
 if(!a && !b){
   return 0
 }

//EN CASO DE QUIE EL SEGUNDO ARGUMENTO NO EXISTA
if(!b) {
  b=0
}
  const total = a + b


  return total;
}
//INVOCACION DE FUNCIÓN
//PUEDE USARSE (INVOCARSE) LAS VECES QUE SE NECESITE
// sum(1, 2)

function subtract(a, b) {
  
  //EN CASO DE NO RECIBIR ARGUMENTOS
  if( !a && !b){
    return 0;
  }

  //EN CASO DE QUE EL SEGUNDO ARGUMENTO NO EXISTA
  if(!b) {
    b=0
  }

  const result = a - b
  return result;
}

function divide(a, b) {
  //EN CASO DE QUE EL SEGUNDO VALOR SEA 0
  if( b===0){
    return error();
  }
  const divi = a / b
  return divi;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
