let operand1 = null;
        let operand2 = null;
        let operator = null;
        function press(num) {
            const display = document.getElementById('display');
            if (display.innerText === '0' && num !== '.') {
            display.innerText = num;
            } else {
            display.innerText += num;
            }
        }
        function clr() {
            document.getElementById('display').innerText = '0';
        }
        function setOP(op) {
            operand1 = parseFloat(document.getElementById('display').innerText);
            operator = op;
            clr();
        }
        function calculate() {
            operand2 = parseFloat(document.getElementById('display').innerText);
            let result = 0;
            switch (operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
              result = operand1 * operand2;
                break;
            case '/':
                result = operand1 / operand2;
                break;
            }
            document.getElementById('display').innerText = result;
            operand1 = result;
        }