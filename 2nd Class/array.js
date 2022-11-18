let favcities = ["Tokyo", "Kyoto", "London", "Berlin",73,373]; //mogu se unositi razni tipovi podataka, tj. mješati se
console.log(favcities[0]); //tokyo=0, Kyoto=1, London=2, Berlin=3, 73=4, 373=5 zato sto je prvi u nizu indexiran sa 0, tokyo je 0
favcities[6] = "Midgar"; //mozemo dinamnicno prosirivati listu
console.log(favcities[6]);
console.log(favcities);
console.log(typeof favcities);