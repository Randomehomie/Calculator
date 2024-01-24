document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');

    
    display.addEventListener('input', function(event) {
        event.preventDefault();
        this.value = ''; 
    });
});

function error(){
    try {
        display.value = eval(display.value)
    }
    catch(error){
        dsiplay.value="Error";
    }

}