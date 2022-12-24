var a = {
    mobiles: {
        samsung: {
            a30: {
                name: "a30",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 2000,
            },
            note10: {
                name: "note10",
                ram: "6gb",
                rom: "128gb",
                camera: "50px",
                price: 4000,
            },
            s10: {
                name: "s10",
                ram: "3gb",
                rom: "128gb",
                camera: "10px",
                price: 5000,
            },
        },
        iphone: {
            iphone4: {
                name: "iphone4",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 10000,
            },
            iphone4s: {
                name: "iphone4s",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 20000,
            },
            iphone5: {
                name: "iphone5",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 30000,
            },
            iphone6: {
                name: "iphone6",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 30000,
            },
        },
        xiaomi: {
            redminote10: {
                name: "redminote10",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 10000,
            },
            redminote11: {
                name: "redminote11",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 10000,
            },
            redmi10: {
                name: "redmi10",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 10000,
            },
            redmi10pro: {
                name: "redmi10pro",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 10000,
            },
        },
    },
};

var firstDropDown = document.getElementById('dropdown');
var firsttt = document.getElementById("first");
var seconddd = document.getElementById("second");
var thirdd = document.getElementById("third");
var info = document.getElementById('model');
var infoTwo = document.getElementById('firstDrop');
var infoThree = document.getElementById('modelOne');
var infoFour = document.getElementById('modelTwo');

function one(){
var id = document.getElementById('firstDrop');
    if(id.value == "samsung"){
        firsttt.style.display = "flex";
        seconddd.style.display = "none";
        thirdd.style.display = "none";
    }
    else if(id.value == "iphone"){
        firsttt.style.display = "none";
        seconddd.style.display = "flex";
        thirdd.style.display = "none";
    }
    else if(id.value == "xiaomi"){
        thirdd.style.display = "flex";
        firsttt.style.display = "none";
        seconddd.style.display = "none";
    }
}

function search(){
    console.table(a.mobiles[infoTwo.value][info.value]);
}

function searchOne(){
    console.table(a.mobiles[infoTwo.value][infoThree.value]);
}

function searchTwo(){
    console.table(a.mobiles[infoTwo.value][infoFour.value]);
}
