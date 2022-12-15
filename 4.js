
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER'];

console.log(avengers[0]); //Consigo Hulk y lo muestro

avengers[0] = 'IRONMAN'; // cambio hulk por ironman

console.log(avengers.length); //muestro num elementos del array



//-----------------------------------------------------------------------

const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry'];

rickAndMortyCharacters.push('Morty', 'Summer'); // añado 2 elementos

console.log(rickAndMortyCharacters[rickAndMortyCharacters.length-2]); //muestro el penultimo en console.log

rickAndMortyCharacters.push('Lapiz Lopez'); //añado un elemento al array para que sea igual al del ejemplo

rickAndMortyCharacters.pop(); // elimino el ultimo elemento del array

console.log(rickAndMortyCharacters[0] + " " + rickAndMortyCharacters[rickAndMortyCharacters.length-1]); //muestro primero y ultimo elemento en consola

rickAndMortyCharacters.push('Lapiz Lopez'); //añado elemento para que sea como en el ejemplo

rickAndMortyCharacters.splice(1,1); //  elimino segundo elemento del array
 
console.log(rickAndMortyCharacters); // muestro array por consola


