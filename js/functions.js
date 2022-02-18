// input balance

function getInputValu (fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value
}


// update diposit balance


function getInnerTextValue (fieldId){
    const fieldTag = document.getElementById(fieldId);
    const valueInText = fieldTag.innerText;
    const value = parseFloat (valueInText);
    return  value;
}

function updateTotal (fieldId, amount){
   /*  const totalTag = document.getElementById(fieldId);
    const previousTotalInText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalInText); */
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;
};


// update balance 
function updateBalance (amount, isAdding ){
    /* const balanceTag = document.getElementById('balance-total');
    const balanceInText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceInText); */
    const previousBalance = getInnerTextValue('balance-total')
    let newBalance;
    if (isAdding == true){
         newBalance = previousBalance + amount;
         
    }else{
         newBalance = previousBalance - amount;
    }
    
    document.getElementById('balance-total').innerText = newBalance;
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
    
   }return alert('You do not have enough money in your account')
})