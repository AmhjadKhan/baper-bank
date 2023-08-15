//step1. add click handeler whith submit button 
document.getElementById('btn-submit').addEventListener('click', function() {
    //step2: get an email address inside email input
    const emailFild = document.getElementById('user-email');
    //alawys remember to decliar const ----.value check;
    const email = emailFild.value;
    //step3.get password from html id; 
    const passwordFild = document.getElementById('user-password');
    //alawys remember to decliar const ----.value check;
    const password = passwordFild.value;

    // step4: veryfi email and pasword
    if(email === 'sontan@baap.com' && password === 'amjad'){
        window.location.href = 'bank.html'
    }
    else{
        alert('you are not my son');
    }
})