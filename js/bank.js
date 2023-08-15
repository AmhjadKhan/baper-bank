//step1. add event listener to diposite button. 
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step2: get diposite amount from diposite fild
    const depositeFild = document.getElementById('user-diposite');
    const newdepositeString = depositeFild.value;
    //step:2.1 convert string to number 
    const newdepositeAmmount =parseFloat(newdepositeString);
    //step:3 cleare the input fild
    depositeFild.value ='';

    // step:4 get the previous value total
    const depositeTotalElement = document.getElementById('deposite-total');
    const PreviousDepositeTotalString = depositeTotalElement.innerText;
    const PreviousDepositeTotalAmmount =parseFloat(PreviousDepositeTotalString);

    // step:5 calculate newq deposite total and set innertext in deposite total
    const newdepositeTotal = PreviousDepositeTotalAmmount + newdepositeAmmount ;
    depositeTotalElement.innerText = newdepositeTotal;

    //step 6: get current balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString= balanceTotalElement.innerText;
    const previoustotalBalance = parseFloat (previousBalanceTotalString);

    // step7: calculate a new balance to set it total valance
    const newBalanceTotal = previoustotalBalance + newdepositeAmmount;
    balanceTotalElement.innerText = newBalanceTotal;



})