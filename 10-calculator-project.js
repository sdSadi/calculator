let displayValue = '';

        function updateDisplay(value){
          displayValue += value;
          document.body.querySelector('.js-calculation')
            .innerHTML = displayValue;
        }

        function calculate(){
          document.body.querySelector('.js-calculation')
            .innerHTML = eval(displayValue);
        }

        function clearDisplay() {
          displayValue = '';
          document.body.querySelector('.js-calculation')
            .textContent = '0';
        }
      