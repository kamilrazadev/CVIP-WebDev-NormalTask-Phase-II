const inputValue = document.getElementById('inputValue');
        const inputUnit = document.getElementById('inputUnit');
        const outputUnit = document.getElementById('outputUnit');
        const outputValue = document.getElementById('outputValue');

        inputValue.addEventListener('input', convertTemperature);
        inputUnit.addEventListener('change', convertTemperature);
        outputUnit.addEventListener('change', convertTemperature);

        function convertTemperature() {
            const value = parseFloat(inputValue.value) || 0;
            const input = inputUnit.value;
            const output = outputUnit.value;

            let result;

            if (input === 'celsius' && output === 'fahrenheit') {
                result = (value * 9/5) + 32;
            } else if (input === 'celsius' && output === 'kelvin') {
                result = value + 273.15;
            } else if (input === 'fahrenheit' && output === 'celsius') {
                result = (value - 32) * 5/9;
            } else if (input === 'fahrenheit' && output === 'kelvin') {
                result = (value - 32) * 5/9 + 273.15;
            } else if (input === 'kelvin' && output === 'celsius') {
                result = value - 273.15;
            } else if (input === 'kelvin' && output === 'fahrenheit') {
                result = (value - 273.15) * 9/5 + 32;
            } else {
                result = value;
            }

            outputValue.value = result.toFixed(2);
        }