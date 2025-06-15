function AddValues(value) {
    document.getElementById('display').value += value;
}

function ClearDisplay()  {
    document.getElementById('display').value = '';
}

function CalculateResult() {
    let DisplayValue = document.getElementById('display').value;
    DisplayValue = DisplayValue.replace( /×/g ,'*').replace(/÷/g , '/');

        try {
            let result = eval(DisplayValue);
            document.getElementById('display').value = result;
        } catch (error) {
            document.getElementById('display').value = 'error';

        }
}
