//alert("Hello Web3");

// const item = document.getElementById("myDiv");
// item.innerHTML = "helloooo";

// const byCLass = document.getElementsByClassName("myClass");
// byCLass[0].innerHTML = "welcome 1";
// byCLass[1].innerHTML = "welcome 2";

// const myTag = document.getElementsByTagName("h2");
// myTag[0].innerHTML = "my Title Tag";

function carNames(){
    let cars = ["subaru", "toyota", "Datsun", "BMW"];
    console.log(cars);
    cars.push("Volvo")
    console.log(cars);
    cars.pop("Datsun");
    console.log(cars);
    cars.pop();
    console.log(cars);
}

//carnames();

function carNamesLooper(){
    
    let cars = ["subaru", "toyota", "Datsun"];
    
    for (let index = 0; index < cars.length; index++){
        const element = cars[index];
        console.log(element);
    } 

    console.log("-------");

    cars.forEach(element => {
       
        console.log(element);
    });


    console.log("-------");

    for (const key in cars) {
        console.log(cars[key]);
    }

    // console.log("-----+++--");
    // const items = cars.filter(
    //     item => item == "Subaru" );
    //    console.log(item);

    console.log("----++++++++---");

    const myDiv = document.getElementById("myDiv")
    for(let index = 0; index < cars.length; index++){
        const element = cars[index];
        const node = document.createElement("li");
        const textnode = document.createTextNode(element);
        node.appendChild(textnode);
        myDiv.appendChild(node);
    }

    console.log("----+++++++cccc+---");

}
carNamesLooper();


function names(){

    let name = prompt("Input your name");

    if(name == undefined || name.length == 0){
        alert(" Ohhh no name");
    }
    else {
        //console.error("hi "+name);
        console.log(` hi ${name}` );
    }

}

names();


console.log("----+++++++cccc+---");

const input = document.getElementById("input");
const result = document.getElementById("result");

const eventListener = function(e) {
    console.log(e.target.value);
   // result.innerHTML = e.target.value;


} 

function event(e){
    console.log(e.target.value)
    result.innerHTML = e.target.value
}

input.addEventListener("keyup", event);