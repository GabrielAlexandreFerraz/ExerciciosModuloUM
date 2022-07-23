// Em grupos e utilizando o laço de interação foreach execute 
// uma função que irá percorrer a seguinte lista de nomes:

// var names = ["Ben","Carol", "Iane", "Jafar", "Matt", "Priya", "Brian", "Guilherme", "Bruna"];
// A cada item deverá ser verificado se o primeiro caractere é B, 
// caso seja, adicione toda a string do item em um outro array.

var names = ["Ben","Carol", "Iane", "Jafar", "Matt", "Priya", "Brian", "Guilherme", "Bruna"];

var arrayDois = [];

names.forEach(function(item) {
    if (item[0] == "B") {
        arrayDois.push(item);
        console.log(arrayDois);
    }
});


// var names = ["Ben","Carol", "Iane", "Jafar", "Matt", "Priya", "Brian", "Guilherme", "Bruna"];
// var arrayItensLetraB = [];

// names.forEach(function (item) {
//   if (item.charAt(0) == "B") {
//     arrayItensLetraB.push(item);
//     console.log(arrayItensLetraB);
//   }
  
// });