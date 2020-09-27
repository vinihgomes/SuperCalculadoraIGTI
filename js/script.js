window.addEventListener('load', start);
var globalA = document.querySelector('#entradaA');
var globalB = document.querySelector('#entradaB');
function start() {
  preventFormSubmit();
  globalA.addEventListener('input', handleChangeInputA);
  globalB.addEventListener('input', handleChangeInputB);
}
function preventFormSubmit() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  var form = document.querySelector('input');
  form.addEventListener('submit', handleSubmit);
}
function handleChangeInputA() {
  calcular();
}
function handleChangeInputB() {
  calcular();
}
function calcular() {
  function division1() {
    if (b == 0) {
      document.getElementById('respdiv1').innerHTML =
        'Impossível calcular, divisor igual a 0';
    } else {
      resultDivision1 = parseInt(a) / parseInt(b);
      document.getElementById('respdiv1').innerHTML = resultDivision1;
    }
  }
  function division2() {
    if (a == 0) {
      document.getElementById('respdiv2').innerHTML =
        'Impossível calcular, divisor igual a 0';
    } else {
      resultDivision2 = parseInt(b) / parseInt(a);
      document.getElementById('respdiv2').innerHTML = resultDivision2;
    }
  }
  function divIntA() {
    var vetorProA = [];
    if (a < 1 && a > -1) {
      document.getElementById('respDivisoresIntA').innerHTML =
        'Valor não tem divisores (0)';
    } else {
      for (var i = 1; i <= a; i++) {
        if (a % i === 0) {
          vetorProA.push(i);
        }
      }
    }
    vetorA = vetorProA.length;
    document.getElementById('respDivisoresIntA').innerHTML =
      '(' + vetorProA + ')' + ' com ' + vetorProA.length + ' posições';
  }
  function divIntB() {
    var vetorProB = [];
    if (b == 0) {
      document.getElementById('respDivisoresIntB').innerHTML =
        'Valor não tem divisores (0)';
    } else {
      for (var j = 1; j <= b; j++) {
        if (b % j === 0) {
          vetorProB.push(j);
        }
        vetorB = vetorProB.length;
        document.getElementById('respDivisoresIntB').innerHTML =
          '(' + vetorProB + ')' + ' com ' + vetorProB.length + ' posições';
      }
    }
  }
  function fatA() {
    var resultFatA = 1;
    if (a == 0 || a == 1) {
      document.getElementById('respFatorialA').innerHTML = '1';
    } else {
      if (a >= 21) {
        document.getElementById('respFatorialA').innerHTML =
          'Número muito grande';
      } else {
        if (a < 0) {
          document.getElementById('respFatorialA').innerHTML =
            'Impossível calcular. Número menor que 0';
        } else {
          for (var i = 1; i <= a; i++) {
            resultFatA = resultFatA * i;
          }
          document.getElementById('respFatorialA').innerHTML = resultFatA;
        }
      }
    }
  }
  function fatB() {
    var resultFatB = 1;
    if (b == 0 || b == 1) {
      document.getElementById('respFatorialB').innerHTML = '1';
    } else {
      if (b >= 21) {
        document.getElementById('respFatorialB').innerHTML =
          'Número muito grande';
      } else {
        if (b < 0) {
          document.getElementById('respFatorialB').innerHTML =
            'Impossível calcular. Número menor que 0';
        } else {
          for (var i = 1; i <= b; i++) {
            resultFatB = resultFatB * i;
          }
          document.getElementById('respFatorialB').innerHTML = resultFatB;
        }
      }
    }
  }
  var a = globalA.value;
  console.log(a);
  var b = globalB.value;
  console.log(b);

  var resultSum = parseInt(a) + parseInt(b);
  document.getElementById('respSoma').innerHTML = resultSum;
  var resultSub1 = parseInt(a) - parseInt(b);
  document.getElementById('respSubt1').innerHTML = resultSub1;
  var resultSub2 = parseInt(b) - parseInt(a);
  document.getElementById('respSubt2').innerHTML = resultSub2;
  resultMult = parseInt(a) * parseInt(b);
  document.getElementById('respMult').innerHTML = resultMult;
  division1();
  division2();
  var resultSquareA = parseInt(a) * parseInt(a);
  document.getElementById('respSquareA').innerHTML = resultSquareA;
  var resultSquareB = parseInt(b) * parseInt(b);
  document.getElementById('respSquareB').innerHTML = resultSquareB;
  divIntA();
  divIntB();
  fatA();
  fatB();
}

/*









function fatB(b){
    var resultFatB = 1;
    if (a === 0 || b === 1){
        return 1;
    }else{

        for (var i = 1; i <= b; i++){
            resultFatB = resultFatB * i;
        }
        return resultFatB
    }
}
*/
