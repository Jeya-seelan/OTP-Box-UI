const inputs = document.querySelector('#inputs');
       
inputs.addEventListener('input',(e)=>{
    const t = e.target;
    const val = t.value;
            
    if(isNaN(val)){
        t.value = "";
    }
    if(val !== ""){
        t.value = val;
        const next = t.nextElementSibling;
        if(next){
            next.focus();
        }
    }
});
       
inputs.addEventListener('keyup',(e)=>{
    const t = e.target;
    const key = e.key.toLowerCase();
         
    if(key == "backspace" || key == "delete"){
        t.value = "";
           
        const pre = t.previousElementSibling;
           
        if(pre){
            pre.focus();
        }
    }
});