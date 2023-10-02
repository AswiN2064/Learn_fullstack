var mySelf = ["Aswin", 20, 6, 2004, "B.tech"];
console.log(mySelf);
var myName = mySelf[0];
console.log("My name is "+myName);

// checking inside the array

console.log(mySelf.includes("Karthi"));

var friendName = "Hritick";
if (mySelf.includes(friendName) === false){
    console.log(friendName + " is my friend.");
}