const inputs = document.querySelectorAll('input');
const showNumber = document.querySelector('.number-show');

inputs.forEach((input, index)=>{

    input.addEventListener("input", function (e) {
       this.value = this.value.replace(/[^0-9]/g, '');
        if(input.value.length === 1 && index < inputs.length - 1){
            inputs[index + 1].focus();
        }
    })
    input.addEventListener("keydown", (e)=>{
        if(e.key === "Backspace" && index > 0 && input.value == ""){
            inputs[index - 1].focus();
        }
    })
})