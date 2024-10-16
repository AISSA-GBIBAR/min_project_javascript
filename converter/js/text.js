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



console.log(toDecimal("FA3D", 16));