let display = document.querySelector('.display');
let buttons = document.querySelectorAll('button');

buttons.forEach((button)=>{
    button.addEventListener('click',function(){
        if(button.value === 'c'){
            clearDisplay();
        }
        else if(button.value === 'back'){
        erase();        
        }       
        else{
            if(button.value === '='){
            let text = display.innerHTML;
            let newText = text.substring(0,text.length-1);
            operate(text);
            
        }else{
            display.innerHTML += button.value;
        }
        }
    });
});

function clearDisplay(){
        display.innerHTML = '';
}

function erase(){
    let text = display.innerHTML;
    let newText = text.substring(0,text.length-1);
    display.innerHTML = newText;
}

function operate(text){
    if(text.length === 0){
        display.innerHTML = '';
    }else if(text.indexOf('+') !== -1){
        let result = text.split('+');
        let total = 0;
        for(var i=0; i<result.length;i++){
            total += parseFloat(result[i]);
        }
        display.innerHTML = total;
    }
    else if(text.indexOf('-') !== -1){
        let result = text.split('-');
        
        let total = parseFloat(result[0]);
        for(var i=1; i<result.length;i++){
         total -= parseFloat(result[i]);
        }
        display.innerHTML = total;
    }else if(text.indexOf('/')!== -1){
        let result = text.split('/');
        let total = parseFloat(result[0]);
        for(var i=1; i<result.length;i++){
            total /= parseFloat(result[i]);
        }
        display.innerHTML = total;
    }else if(text.indexOf('*') !==-1){
        let result = text.split('*');
        let total = parseFloat(result[0]);
        for(var i=1; i<result.length;i++){
            total *= parseFloat(result[i]);
        }
        display.innerHTML = total;
    }
}
