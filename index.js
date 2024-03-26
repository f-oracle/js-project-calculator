document.addEventListener("DOMContentLoaded", function () {
    // Get all the number links
    const numberLinks = document.querySelectorAll('.number-link');
    const clearButton = document.querySelector('.clear');
    const display = document.getElementById('display');
    const operatorButtons = document.querySelectorAll('.operator');
    let currentDisplayValue = '';

    //Loop through each link and attach click event listner
    numberLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); //prevent default link behavior
            //Get the value from the data attribute
            const value = this.getAttribute('data-value');
            currentDisplayValue += value;
            display.textContent = currentDisplayValue;
            updateDisplay();
            countCharacters();
            console.log(value);
        });
    });
    operatorButtons.forEach(function (operator) {
        operator.addEventListener('click',
            function (event) {
                event.preventDefault();
                const operatorValue = this.getAttribute('data-value');
                if (operator !== '=') { // clear the display for non-equals to operators
                    currentDisplayValue = '';
                    updateDisplay();
                } else {
                    // Perform calculation or other operations for equal operator
                    console.log("perform calculation");
                }
                currentDisplayValue += operatorValue;
                display.textContent = currentDisplayValue;
                console.log("Operator clicked:", operatorValue);
            });
    });

    clearButton.addEventListener('click',
        function (event) {
            event.preventDefault();
            currentDisplayValue = '';
            display.textContent = currentDisplayValue;
            updateDisplay();
        }
    );

    function updateDisplay() {
        display.textContent = currentDisplayValue;
        const fontSize = 80 - Math.min(Math.floor(currentDisplayValue.length / 1), 5) * 5;
        display.style.fontSize = fontSize + 'px';
    }
    function countCharacters() { //this is to count characters an add ',' to it like the iphone calculator
        display.textContent = currentDisplayValue;
        var count = 0
        for (var i = 0; i < currentDisplayValue.length; i++) {
            count++;

            var char = currentDisplayValue.length;
            switch (char) {
                case 3:
                    console.log('its 3 already');
                    var str1 = ",";
                    currentDisplayValue += str1;
                    break;
                case 7:
                    console.log('its 6 already');
                    var str1 = ",";
                    currentDisplayValue += str1;
                    break;
                case 12:
                 currentDisplayValue = ""
            }
        }
        console.log(count);
    }

});