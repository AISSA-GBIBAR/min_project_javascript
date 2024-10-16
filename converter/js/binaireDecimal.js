let textInputResult = document.querySelector('.textInputResult');
// change num in Alpha
function hexa(hexaDecimal, type){
    let Alpha = ['A', 'B', 'C', 'D', 'E', 'F'];
    let tine  = ['10', '11', '12', '13', '14', '15'];
    hexaDecimal = hexaDecimal.map((num)=>{
        if( type == 1 ){
            let index = Alpha.indexOf(num);
            if( index > -1 ){
               return tine[index];
            }
        }else if(type == 2){
            let index = tine.indexOf(num);
            if( index > -1 ){
               return Alpha[index];
            }
        }
   
        return num;
    });
    return hexaDecimal;
}



// converge binear , hexa , octal to decimal

function toDecimal(converter, type){
    converter =converter.split('');
 if( type == 2 || type == 8 || type == 16 || type == 10 ){
    if( type == 16 ){
       converter = hexa(converter, 1);
    }
    converter.reverse(); 
    let sum = 0;
    converter.map((bin,index )=>{
        let num = Number(bin);
        sum += num * (Math.pow(type,index))
    })

    return sum;
}
return null;
}




// converge decimal to binear , hexa , octal 

function fromDecimal(converter, type){
    if( type == 2 || type == 8 || type == 16 || type == 10){
        let total = converter % type ;
        while( converter >= type ){
            converter = Math.floor(converter / type);
            total += "," + converter % type;
        }
        if( typeof total == "number"  ){
            total = String(total);
            total = total.split("");
        }else{
            total =  total.split(",");
        }
        if( type == 16 ){
            total = hexa(total, 2);
        }
        total = total.reverse();
        total = total.join('');
        return  total;
    }


}


let btns = document.querySelectorAll(".btnCalc");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (!btn.classList.contains("opacityBtn")) {
        let input    = document.querySelector('.numberInput').getAttribute('data-text-input');
        let typeInter = document.querySelectorAll(".typeInput")[0].getAttribute('data-type-input');
        let typeOutput = document.querySelectorAll('.typeInput')[1].getAttribute('data-type-input');
        removeShowEqual();
        if( typeOutput == 10 ){
            textInputResult.innerHTML = toDecimal(input, typeInter);
        }else if( typeInter == 10 ){
             input = Number(input);
             textInputResult.innerHTML = fromDecimal(input, typeOutput);
        }else{
            let decimal = toDecimal(input, typeInter);
            textInputResult.innerHTML = fromDecimal(decimal, typeOutput);
        }
    }
  });
});

console.log(fromDecimal(34, 2));
console.log(fromDecimal(78910, 16));
console.log(fromDecimal(65789987, 16));
console.log(toDecimal("FFEA2", 16));

function removeShowEqual(){
    if( textInputResult.parentElement.classList.contains('equalShow') ){
      textInputResult.parentElement.classList.remove('equalShow');
      document.querySelector('.numberInput').parentElement.classList.remove('noShow');
    }
}
document.querySelector(".Clear").addEventListener("click", () => {
    removeShowEqual();
  });
  