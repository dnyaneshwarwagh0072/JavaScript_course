const tempCalc = () => {
    const inpVal = document.getElementById('inpVal').value;
    const selVal = document.getElementById('selVal').value;
    console.log(selVal);


    const celToFah = (inpVal) => {
        Fahrenheit = ((inpVal * 9 / 5) + 32);
        return;
    }
    const fahToCel = (inpVal) => {
        celsiusVal = ((inpVal - 32) * 5 / 9);
        return celsiusVal;
    }

    let result;
    
    if (selVal == 'fah') {
        result = celToFah(inpVal);
        document.getElementById('res').innerHTML = `${result} ° F`;
        console.log(result);
    } else if (selVal == 'cel') {
        result = fahToCel(inpVal);
        document.getElementById('res').innerHTML = `${result} ° C`;
        console.log(result);
    }
}


