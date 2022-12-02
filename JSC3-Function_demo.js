function multiplyValues(number1, number2, number3) {
    let result = number1 * number2 * number3; //* <-multiply
    return result;
}

let result = multiplyValues(10,73,15);
console.log(result);

//napraviti funkciju kojoj ce se proslijediti dva broja/parametra
//izbacit ce rezultat sabiranja

function sumabr(nr1, nr2) {
    let suma = nr1 + nr2;
    return suma;
}

let suma = sumabr(2, 5);
console.log(suma);

let result1 = sumabr(37,23);
let result2 = sumabr(34,21);
let result3 = sumabr(14,19);

console.log (result1, result2, result3);

//kreirati funkciju koja ispisuje sumu brojeva, funkcija prima 2 parametra, i zove se 
//printSumOfNumbers ,bez rezultata.
//testirai funkciju pozivom

function PrintSumOfNumbers(br1, br2) {
    let Sum = br1 + br2;
    console.log(Sum);
}
PrintSumOfNumbers(3,15);
PrintSumOfNumbers(34,23);

function PrintSumOfNumbers(br1, br2) { //alternativni
    console.log(br1 + br2); //alternativni
} //alternativni
PrintSumOfNumbers(3,15); //alternativni
PrintSumOfNumbers(34,23); //alternativni

//artimetic operators
//kreirati vise funkcija
let nr1 = 24;
let nr2 = 10;
let sum = nr1 + nr2;
console.log (sum);
let poruka = "Suma je " +sum;
console.log (poruka);
let ded = nr1 - nr2;
console.log (ded);
let mult = nr1 * nr2;
console.log (mult);
let div = nr1 / nr2;
let mod = nr1 & nr2; //daje ostatak od djeljenja
console.log ("division je " +div +" ostatak je " +mod);
let quad = nr1 ** 2; //ovo je kvadrat, tj. na drugu zato sto je poslje "**" broj 2, 
console.log ("Kvadrat od " +nr1 +" je " +quad);

//Unarni operatori
//++ increment
//-- decrement
let number = 10;

console.log(number); //10 
console.log(++number); //11
console.log(++number); //12
console.log(++number); //13
console.log(number); //13
console.log(number++); //13
console.log(number++); //14
console.log(number++); //15
console.log(number++); //16

//operatori vrjednosti
number+=4; //number = number + 4
console.log(number); //21 (16 + nr++ + 4) 
number-=3 //number = number -3
console.log(number); //18 
number/=2 //number 18/2
console.log(number); //9
number%=2; //number = number % 2; 9 % 2
console.log(number); //1

let number = 10;
number**=2; //number = number**2, 10x10
console.log(number) //100

//Opertori poređenja
let name = "Adis";
let surname = "Gluhović";
let fullname = name + surname;
let number = 10;
console.log (fullname + number);

//
let number = 10;
let comprasionResult = number == 10;
console.log (comprasionResult); //true
let text = "10";
let comparsionRes2 = number == text; //true poređenje po vrijednosti
console.log (comparsionRes2);
let comparisonRes3 = number === text; //false poređenje po vrijednosti i tipu
console.log (comparisonRes3);

let nr = 10;
coRe = nr != '10'; //false
console.log (coRe);
coRe = nr !== '10'; //true
console.log (coRe);

let br = 73;
coRe = nr >= br; //false nije veci ili jednak
console.log (coRe); 

if(nr > br) {
    console.log ("nr je veći ob br");
}
if(br > nr) {
    console.log ("br (" +br +") je veći broj od nr (" +nr +")");
}

//
let userinput = ("unesi broj godina");
let age = parseInt(userinput); //parse Int, kreaira cjeli broj, parse float kreira decimalni broj
if (age < 18) {
    console.log("lafo si premlad da kupiš i konzumiraš alkohol");
    alert("lafo si premlad da kupiš i konzumiraš alkohol");
    //ili let message = "lafo si..."; console.log (message); alert (message);
}
else {
    let message = "sad ti ni zakon ne brani"
    alert(message);
}

//
let userinput = prompt("Unesi broj svojih godina"); //pokusava kreirati cijeli broj 13.5 postaje 13
let userinput2 = prompt("Unosi koliko para imaš"); //pokusaca decimalni 13.5 ostake 13.5

let age = parseInt(userinput);
let moneyz = parseFloat(userinput2);

console.log(age);
console.log(moneyz);
//logicki AND &&
//logicki OR ||
if(age<18 || novac<30){
    alert("nemaš dovoljno novca (minimlno 30) ili godina (minimalno 18)");
}
else{
    alert"imaš dovoljno i godina i para, radi šta hoćeš"
};
 //
let message = age || 
alert(message)
