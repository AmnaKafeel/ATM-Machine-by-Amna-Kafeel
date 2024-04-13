#! /usr/bin/env node


import inquirer from "inquirer";

//Initialize user balance and pin code
let myBalance = 10000;
let myPin = 2233;

//Print Welcome Message
console.log("Welcome to Amna Kafeel - ATM Machine ");

let pinAnswer = await inquirer.prompt([{
    name: "pin",
    type: "number",
    message:"Enter Your Pin Code:",
}])
if(pinAnswer.pin === myPin){
console.log("Pin is Correct Login Successfully");
//console.log(`Current Account Balance is ${myBalance}`)

let operationAns = await inquirer.prompt([{
    name: "operation",
    type: "list",
    message: "select your operation",
    choices: ["Withdraw Amount", "Check Balance"]
}])
if(operationAns.operation === "Withdraw Amount"){
    let amountAns = await inquirer.prompt([{
        name: "amount",
        type: "number",
        message: "Enter the amount you want to withdraw:",
    }])
    if(amountAns.amount > myBalance){
        console.log("Insufficient Balance");
    }
    else{
        myBalance -= amountAns.amount;
        console.log(` ${amountAns.amount} Withdraw Successfully`);
        console.log(`Your Remaining Balance is ${myBalance}`);
    }
}
else if(operationAns.operation === "Check Balance"){
    console.log(`Your Current Balance is ${myBalance}`);
}
}
else{
    console.log("Pin is Incorrect.. Please Try Again!");
}