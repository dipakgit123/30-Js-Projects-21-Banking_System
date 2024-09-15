let AddAmount = document.getElementById("add-amount");
let DepositAmount = document.getElementById("deposit-amount");
let CheckBalance = document.getElementById("check-balance");
let Msg = document.getElementById("msg")
const Display = document.getElementById("display");


let balance ='';
let amount =0;
function Addamount(){

    
    var amount =  parseInt(prompt("enter amount"));
    
    if (amount===''){
         alert("plz enter the amount")
    }

    else{
        balance = Number(amount) + Number(balance)
    msg.innerHTML ="You Deposited:" +amount+"Rs.";
    }
}

function Deposit(){
    let deposit = prompt("Enter the amount")
    if(deposit===''){
        alert("plz enter the amount")
    }

    if(deposit>balance){
      alert("Insufficient Funds")  
    }
    else{
        balance= Number(balance)- Number(deposit)
        msg.innerHTML ="You Withdraw:"+ deposit+"Rs."
    }
}

function CheckBalance1() {

    msg.style.display ='none'
    if(balance<=0){
        alert("Insufficient Funds")
    }{
        Display.innerHTML="Current Balance is:"+ balance;
        Display.classList.add("Colors2");
    }
 
}

AddAmount.addEventListener("click",Addamount)
DepositAmount.addEventListener("click",Deposit)
CheckBalance.addEventListener("click", CheckBalance1);