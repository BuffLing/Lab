window.onload = function(){ 

    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    let color = 1;
    let backfon = 1;
    
    function Factorial(number) {
        if (number === 0) {
          return "1";
        } else {
          let result = 1;
          for (let i = 1; i <= number; i++) {
            result *= i;
          }
          return result;
        }
      }

      document.getElementById("swapInput").onclick = function() { 
        color = !color;
                if(color === true){
                outputElement.style.backgroundColor = "rgb(45, 31, 109)"
                }
                else{
                    outputElement.style.backgroundColor = "rgb(98, 11, 11)"
                }
                  
            }

            document.getElementById("swapFon").onclick = function() { 
                backfon = !backfon
                    if(backfon === true){
                document.body.style.backgroundColor = "#000000"
                    }
                    else{
                        document.body.style.backgroundColor = "#252524"
                    
                    }
                
            }

    // окно вывода результата
    outputElement = document.getElementById("result")
    
    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    
    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                a += digit
            }
            outputElement.innerHTML = a
        } else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit
                outputElement.innerHTML = b        
            }
        }
    }
    
    // устанавка колбек-функций на кнопки циферблата по событию нажатия
    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });
    
    // установка колбек-функций для кнопок операций
    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '') return
        selectedOperation = 'x'
    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '') return
        selectedOperation = '+'
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        if (a === '') return
        selectedOperation = '-'
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return
        selectedOperation = '/'
    }
    
    // кнопка очищения
    document.getElementById("btn_op_clear").onclick = function() { 
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }
    
    // кнопка расчёта результата
    document.getElementById("btn_op_equal").onclick = function() { 
        if (a === '' || b === '' || !selectedOperation)
            return
            
        switch(selectedOperation) { 
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;
        }
        
        a = expressionResult.toString()
        b = ''
        selectedOperation = null
    
        outputElement.innerHTML = a
    }
    
    document.getElementById("btn_op_swap").onclick = function() {
        if (selectedOperation === null) {
            if (a !== '') {
                a = (-a).toString();
                outputElement.innerHTML = a;
            }
        } else {
            if (b !== '') {
                b = (-b).toString();
                outputElement.innerHTML = b;
            }
        }
    };

    document.getElementById("btn_op_percent").onclick = function() {
        if (selectedOperation === null) {
            if (a !== '') {
                a = (parseFloat(a) / 100).toString();
                outputElement.innerHTML = a;
            }
        } else {
            if (b !== '') {
                b = (parseFloat(b) * parseFloat(a) / 100).toString();
                outputElement.innerHTML = b;
            }
        }
    };

    document.getElementById("btn_backspace").onclick = function() {
        if (selectedOperation === null) {
            a = a.slice(0, -1);
            outputElement.innerHTML = a;
        } else {
            b = b.slice(0, -1);
            outputElement.innerHTML = b;
            }
        };

        document.getElementById("btn_sqrt").onclick = function() {
            if (selectedOperation === null) {
                a = Math.sqrt(parseFloat(a)).toString();
                outputElement.innerHTML = a;
            } else if (b !== '') {
                b = Math.sqrt(parseFloat(b)).toString();
                outputElement.innerHTML = b;
            }
        };

        document.getElementById("btn_square").onclick = function() {
            if (selectedOperation === null) {
              a = Math.pow(parseFloat(a), 2).toString();
              outputElement.innerHTML = a;
            } else if (b !== '') {
              b = Math.pow(parseFloat(b), 2).toString();
              outputElement.innerHTML = b;
            }
          };

          document.getElementById("btn_factorial").onclick = function() {
            if ( a ) {
              a = Factorial(parseFloat(a)).toString();
              outputElement.innerHTML = a;
            } else if (b !== '') {
              b = Factorial(parseFloat(b)).toString();
              outputElement.innerHTML = b;
            }
          };

          document.getElementById("btn_add_zeros").onclick = function() {
            if (selectedOperation === null) {
              a += "000";
              outputElement.innerHTML = a;
            } else {
              b += "000";
              outputElement.innerHTML = b;
            }
          };

    };