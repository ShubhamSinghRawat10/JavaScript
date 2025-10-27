function account(){
    balance =1000;  //Local to Account Function
    console.log("accountr balance is : ", balance);
    balance = depositamount(balance); // passing balance to depositamount function
    console.log("after deposit , account balance is : ", balance);

}
function depositamount(bal){ // bal is local to depositamount function
    console.log("depositing amount to account",bal);
    depositamt = 100;  // local to depositamount function
    bal = bal + depositamt; // updating bal variable
    console.log("amount after deposit is : ", bal);
    return bal;
}

account();