// step 1:add event handeler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
   const withdrawFild = document.getElementById('user-withdraw');
   const newWithdrawAmmoStri = withdrawFild.value;
   const newWithdrawAmmount =parseFloat(newWithdrawAmmoStri);
   
//    step 3 clear the input fild
   withdrawFild.value ='';

//    step4
 const withdrawTotalElement = document.getElementById('witdraw-total');
 const previousWithdrawTotaStr = withdrawTotalElement.innerText;
 const previousBalanceTotal =parseFloat(previousWithdrawTotaStr);

//  step 5
const newWithdrawTotal = previousBalanceTotal + newWithdrawAmmount;
withdrawTotalElement.innerText = newWithdrawTotal;

// step 6
const balanceElement = document.getElementById('balance-total');
const previousBalanceTotalstr = balanceElement.innerText;
const previoustotalBalance= parseFloat (previousBalanceTotalstr) ;

// step 7
const finalBalance =previoustotalBalance - newWithdrawAmmount;
//step8
balanceElement.innerText =finalBalance;

})