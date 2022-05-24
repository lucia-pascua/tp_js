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

function division(){
    let ej6_num = parseFloat(document.getElementById("ej6_num").value)

if(ej6_num%2==0){

document.write("Ej6; El número "+ej6_num+" es par");
}
else{
document.write("Ej6; El número "+ej6_num+" es impar"); 
  }
}