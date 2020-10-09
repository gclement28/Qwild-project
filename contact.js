document.getElementById('contactform').addEventListener("submit", function(e){
   

    let error;
    const userName = document.getElementById('username');
    const eMail = document.getElementById('email');
    const message = document.getElementById('text-message');
    const inputs = document.getElementsByClassName('form-control');
    
    
    if (!userName.value){
        error="*Please enter your name";
    }

    if (!eMail.value){
        error="*Please enter your email";
    }

    if (!message.value){
        error="*Please write your message";
    }
    
    if (error){
        e.preventDefault();
        document.getElementById('error').innerHTML = error;
        return false;
    }

    
    
    
    else{
        
        alert('Thanks, Your message has been successfully sent!!');
    }


})