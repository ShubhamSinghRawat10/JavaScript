valueprint(10,20,40,50,60);

function valueprint(billamount =10 ,...args){
    console.log("Bill Amount :" , billamount);
}

function returnval(){
    return undefined;
}
valueprint(returnval());