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


            console.log(value);
        });
    });
    operatorButtons.forEach(function(operator) {
        operator.addEventListener('click',
        function(event){
            event.preventDefault();
            const operatorValue = this.getAttribute('data-value');
            currentDisplayValue += operatorValue;
            display.textContent = currentDisplayValue;
            console.log("Operator clicked:", operatorValue);
        });
    });

    clearButton.addEventListener('click',
    function(event){
        event.preventDefault();
        currentDisplayValue = '';
        display.textContent = currentDisplayValue;
    }
    )

});