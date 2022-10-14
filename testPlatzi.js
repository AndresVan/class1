/* var userType = "Expert"
var tipoDeSuscripcion = ["Free","Basic","Expert","ExpertPlus"]
var entonces =["solo puedes tomar cursos gratis", "puedes tomar casi todos los cursos por un mes",
"puedes tomar los cursos por un año", "tu y otra persona pueden tomas los cursos por un año"];

for (let i =0; i<=3; i++){

    if(userType == tipoDeSuscripcion[i]){
        console.log(entonces[i]);
    }
    else {
        console.log("Nada");
    }
}
 */

// ----- Cuánto es 2 + 2 --------------//
/* const prompt = require ("prompt-sync")({sigint:true});
const suma = parseInt(prompt("Cuanto es 2 + 2 : "));
 if(suma == 4){
   console.log("Felicitaciones, respuesta correcta ​🥳​✔️​");
 } else {
   console.log("Respuesta incorrecta, vuelve a intentar ​❌​");
 }  */
 //--------------FUNCIÓN CON ARRRAY --------------------
 /* var lista= [10,9,8,7];

 function llamandoLista(miLista){
    console.log("El primer elemento del array es: "+miLista[0]);
 }
 llamandoLista(lista) */
//--------------FUNCIÓN CON ARRRAY DESGLOSADO --------------------
 /* var lista= [10,9,8,7];

 function llamandoLista(miLista){
    for(let i=0; i<miLista.length;i++){
    console.log("Los elementos del array son: "+miLista[i]);
    }
 }
 llamandoLista(lista) */
 //--------------FUNCIÓN CON ARRRAY DE OBJETOS--------------------
/*  var lista = [
    {
        "Equipo": "Millos",
        "Color": "Azul"
    },{
        "Equipo":"América",
        "Color": "Rojo"
    }
]

function llamandoLista(miLista){
    
    for(let i=0; i<miLista.length;i++){
       
    console.log("Los elementos del array "+i +" son: "+miLista[i].Equipo +" " +miLista[i].Color);
    }
 }
 llamandoLista(lista)
  */
 //----------------Contador de Impares ----------------
 var contador = 0;
 var cuentaImpares = 0;

 for(contador=0; contador<=20; contador++){
    if(contador == 20){
        break;          //la instrucción break finaliza el for
    }
    else if (contador %2 == 0){
        continue;       //la instrucción continue SALTA la siguiente instrucción
                        //evita que se sume cuentaImpares si es par
    }
    cuentaImpares++;
 }
 console.log('Hay '+cuentaImpares+' números impares');