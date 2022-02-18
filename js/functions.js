// input balance

function getInputValu (fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value
}

// update diposit balance

function updateTotal (fieldId, amount){
    const totalTag = document.getElementById(fieldId);
    const previousTotalInText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalInText);
    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;
    return newTotal;
};

function getInnerTextValue (fieldId){
    const fieldTag = document.getElementById(fieldId);
    const valueInText = fieldTag.innerText;
    const value = parseFloat (valueInText);
    return  value;
}

// update balance 
function updateBalance (amount, isAdding ){
    const balanceTag = document.getElementById('balance-total');
    const balanceInText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceInText);
    let newBalance;
    if (isAdding == true){
         newBalance = previousBalance + amount;
    }else{
         newBalance = previousBalance - amount;
    }
    
    balanceTag.innerText = newBalance;
}

// handel diposit amount

document.getElementById('diposit-button').addEventListener('click',function(){
  const amount = getInputValu('diposit-input')
  
  if(amount >0){
    updateTotal('diposit-total',amount);
    updateBalance(amount, true)
  }
  
});

// handel withdraw amount 
document.getElementById('Withdraw-button').addEventListener('click',function(){
   const amount =  getInputValu('Withdraw-input');
   const balance = getInnerTextValue('balance-total');
   if(amount >0 && amount <= balance ){
    updateTotal('withdraw-total',amount);
    updateBalance(amount, false)
   }
})