document.getElementById('withdraw-submit').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = withdrawField.value;
    const totalWithdrawAmount = parseFloat(withdrawAmount);

    const beforeWithdraw = document.getElementById('withdraw-amount');
    const inputWithdraw = beforeWithdraw.innerText;
    const beforeWithdrawAmount = parseFloat(inputWithdraw);
    const currentWithdrawAmount = beforeWithdrawAmount + totalWithdrawAmount;
    beforeWithdraw.innerText = currentWithdrawAmount;


    const getTotalBalance = document.getElementById('total-amount')
    const totalMainBalance = getTotalBalance.innerText;
    const totalBalanceConvert = parseFloat(totalMainBalance);
    const totalCurrentBalance = totalBalanceConvert - totalWithdrawAmount;
    getTotalBalance.innerText = totalCurrentBalance;



    // const currentTotalBalance = parseFloat(totalMainBalance);
    // const finalBalance = currentTotalBalance - currentWithdrawAmount;
    // currentTotalBalance.innerText = finalBalance;

    withdrawField.value = '';
})
