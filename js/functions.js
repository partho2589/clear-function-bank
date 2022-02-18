
function getInputValu (fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value
}
function updateTotal (fieldId, amount){
    const totalTag = document.getElementById(fieldId);
    const previousTotalInText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalInText);
    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;

}
document.getElementById('diposit-button').addEventListener('click',function(){
  const amount = getInputValu('diposit-input')
  updateTotal('diposit-total',amount);
})