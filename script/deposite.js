document.getElementById('deposit-submit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    const depositDisplay = parseFloat(depositAmount);

    const beforeDeposit = document.getElementById('deposit-amount');
    const totalDeposit = beforeDeposit.innerText;
    const mainDeposit = parseFloat(totalDeposit)
    const currentDeposit = depositDisplay + mainDeposit;
    beforeDeposit.innerText = currentDeposit;
    console.log(currentDeposit);

    const beforeTotalBalance = document.getElementById('total-amount');
    const totalBalance = beforeTotalBalance.innerText;
    const mainBalance = parseFloat(totalBalance);
    const depositTotalBalance = depositDisplay + mainBalance;
    beforeTotalBalance.innerText = depositTotalBalance;
    console.log(depositTotalBalance);
    



    depositField.value = '';
})