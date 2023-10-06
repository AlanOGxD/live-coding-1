
const list = document.getElementsByClassName('div');

const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
var array2 = [];
function depuradorStrings(palabra, myArray) {

    myArray.forEach(element => {
        if (palabra.length < element.length) {
            console.log(element);
            array2.push(element);
            myFunction(element);
        }
    });
}
//depuradorStrings(palabra, myArray);

function myFunction(string) {

    var li = document.getElementById("li");
    li.innerHTML += `<li>` + string + ` </li>`;

}


var palabraa = document.querySelector(".palabra")
let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    depuradorStrings(palabraa.value, myArray);

});

