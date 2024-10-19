function showInput(operation) {
    const inputArea = document.getElementById('inputArea');
    const operationTitle = document.getElementById('operationTitle');
    const result = document.getElementById('result');

    
    result.innerHTML = '';
    inputArea.style.display = 'block'; 

    
    operationTitle.innerHTML = operation === 'add' ? 'Addition' : 'Multiplication';
}


function calculate() {
   
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operationTitle = document.getElementById('operationTitle');
    const result = document.getElementById('result');

    
    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = 'Please enter valid numbers.';
        return;
    }

    let answer;


    if (operationTitle.innerHTML === 'Addition') {
        answer = num1 + num2; 
    } else if (operationTitle.innerHTML === 'Multiplication') {
        answer = num1 * num2; 
    }

  
    result.innerHTML = `The result is: ${answer}`;
}


function exit() {
    alert("Exiting the program.");
    
}
