var numberClicked = false;
function add (button) {
    if(numberClicked == false) { 
        if(isNaN(button) == true) {            
        } else { 
            document.getElementById('output').value += button; 
        }
    } else { 
        document.getElementById('output').value += button; 
    }
    if(isNaN(button) == true) { 
        numberClicked = false; 
    } else {
        numberClicked = true; 
    }
}
function calculate() {
    var output = document.getElementById('output');
    var result = eval(output.value);
    document.getElementById('result').value = result;
}
function reset() {
    document.getElementById('output').value = "";
    document.getElementById('result').value = "";
}