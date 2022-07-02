function func_ej1(){
    var ej1_c1 = document.getElementById("ej1_c1").value
    var ej1_c2 = document.getElementById("ej1_c2").value
    var ej1_c3 = document.getElementById("ej1_c3").value

    if (ej1_c1 > ej1_c2 && ej1_c1 > ej1_c3) {
        document.getElementById("ej1_resultado").value = ej1_c1;
    } else if (ej1_c2 > ej1_c3) {
        document.getElementById("ej1_resultado").value = ej1_c2;
    } else {
        document.getElementById("ej1_resultado").value = ej1_c3;
    }
}

function func_ej2(){
    let ej2_c1 = parseFloat (document.getElementById('ej2_c1').value)
    let ej2_c2 = parseFloat (document.getElementById('ej2_c2').value)

   const suma = ej2_c1 + ej2_c2;

    document.getElementById("ej2_resultado").value = suma;
}

function repetir(){
    let ej3_palabra = document.getElementById('ej3_palabra').value
    let ej3_num = parseFloat (document.getElementById('ej3_num').value)
    let frase = ""

    for (let index = 0; index < ej3_num; index++) {
        frase = frase + ej3_palabra
        
    }
    document.getElementById("ej3_repeticion").value = frase
}


function convertir(){
    let ej4_centigrados= parseFloat (document.getElementById("ej4_centigrados").value)
    let ej4_fahrenheit= parseFloat (document.getElementById("ej4_fahrenheit").value)
    
    if (ej4_centigrados > 0){

         ej4_fahrenheit = ej4_centigrados * 1.8 + 32
         document.getElementById("ej4_fahrenheit").value = ej4_fahrenheit
     }

    if (ej4_fahrenheit > 0){
         ej4_centigrados = (ej4_fahrenheit - 32) * 0.5556
         document.getElementById("ej4_centigrados").value = ej4_centigrados
    }
}

function contarcaracteres(){

    var valor=document.getElementById('contador');
    var respuesta=document.getElementById('ej5_res');
    var cantidad=valor.value.length;
    document.getElementById('ej5_res').innerHTML = "tiene " + cantidad + " letras";
};

function division(){
    let ej6_num = parseFloat(document.getElementById("ej6_num").value)

     if(ej6_num%2==0){
        document.getElementById('ej6_res').innerHTML = "el numero es par";
     }
    else{
        document.getElementById('ej6_res').innerHTML = "el numero es impar"; 
    }
}

function func_ej8(){
    let ej8_num = parseFloat(document.getElementById("ej8_num").value);

    function esPrimo(numero){
        
        let divisores = 0;
        
        for(let i=2; i <= numero; i++) {        
            if(numero % i === 0) {
            divisores += 1;                    
            }
        }
    
        if(divisores===1){
            console.log(numero + " es primo")
        return true
        }else{
            console.log(numero + " no es primo")
        return false
        }
    }

    let Primo = [];

    for(let i=0; i <= ej8_num; i++){
        console.log("i es " + i)
    if (esPrimo(i)){
        Primo.push(i);
        }
    }

    document.getElementById("ej8_res").value = Primo.toString();
}

function ej9_func() {
    var ej9_nombre = document.getElementById("ej9_nombre").value;
    var ej9_apellido = document.getElementById("ej9_apellido").value;
    var ej9_ciudad = document.getElementById("ej9_ciudad").value;
    var ej9_edad = document.getElementById("ej9_edad").value;
 
    document.getElementById('ej9_res').innerHTML = 'Mi nombre es ' + ej9_nombre + " " + ej9_apellido +', tengo ' + ej9_edad + ' años. Nací en la ciudad de ' + ej9_ciudad
}

function ej10(){
    var ej10_num1 = parseInt(document.getElementById("ej10_num1").value)
    var ej10_num2 = parseInt(document.getElementById("ej10_num2").value)
    var ej10_res = ""

    if (ej10_num1 > ej10_num2) {
      
      for (let index = ej10_num1 - 1; index > ej10_num2 ; index--) {
                        
          ej10_res = ej10_res + index + ", ";
      }
  
          document.getElementById("ej10_res").value = ej10_res
      } 
          
  
      if (ej10_num2 > ej10_num1){
          
      for (let index = ej10_num1 + 1; ej10_num2 > index ; index++) {
                        
        ej10_res = ej10_res + index + ", ";;
      }
          document.getElementById("ej10_res").value = ej10_res
      }
}