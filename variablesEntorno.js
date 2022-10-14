/* la variable nombre se cargará 
con el valor que reciba de una fuente externa denominada NOMBRE*/

let nombre = process.env.NOMBRE || "Sin nombre"; //env viene de enviroment 
//variables || esto es "o" y si no me dan ningún valor pues aparecerá "sin nombre"

console.log("Hola " + nombre);

/*Para ejecutar la prueba desde Node sólo basta con 
poner NOMBRE=nombrexxxx espacio y el comando node nombredelarchivo.js,
con esto se emula que se trae una variable externa y podemos comprobar el código.*/