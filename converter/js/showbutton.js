let itemSelect = document.querySelectorAll('.itemSelect')[0];
let item = itemSelect.querySelectorAll('.item');

function opcityBtn(text){
    let buttonCalc = document.querySelectorAll('.buttonCalc .btnCalc');
    buttonCalc.forEach(el => {
        if( !(el.classList.contains(text)) ){
            el.classList.add('opacityBtn');
        }else{
            el.classList.remove('opacityBtn');
        }
    });
}

item.forEach(element => {
    let text ;
    element.addEventListener('click', (e)=>{
         text = e.target.querySelector(".typeText").innerHTML;
        opcityBtn(text);
    });

    if( element.classList.contains('active') ){
        text = element.querySelector(".typeText").innerHTML;
        opcityBtn(text);
    }

});