//Tipo de datos letras o numeros
type alfanumerico=string|number;

//Tipo de dato string

let cadena:string|number="Victorrobles.com";
cadena=44;

//Number
let numero: number=12;

//Booleano
let verdadero_falso:boolean=true;

//Any
let cualquiera:any="hola";

//Arrays
var lenguajes:Array<string>=["PHP","JS","CSS"];

let years:number[]=[12,13,14,15];

//Let vs Var
var numero1=10;
var numero2=12;

if(numero1==10){
    let numero1=44;
    var numero2=55;

    console.log(numero1,numero2);
}
console.log(numero1,numero2);

console.log(cadena,numero,verdadero_falso,cualquiera,lenguajes,years);
