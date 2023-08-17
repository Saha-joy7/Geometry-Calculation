function getInputById (inputId){
    const inputField = document.getElementById(inputId)
    const inputValue = parseFloat(inputField.value)
    inputField.value='';
    return inputValue;
}
function setElement (elementId, area){
    const setToArea = document.getElementById(elementId);
    setToArea.innerText = area;
}

function triangleCalculate(){
    const triangleBase = getInputById('triangle-b')
    const triangleHeight = getInputById('triangle-h')
    const area = 0.5 * triangleBase * triangleHeight;
    setElement('result', area)
    
}
