// First Step add EventListener to the submit button

document.getElementById('btn-submit').addEventListener('click', function() {
    const email = document.getElementById('user-email');
    const getMail = email.value;
    
    const password = document.getElementById('user-password');
    const getPassword = password.value;

    if (getMail === '@' && getPassword === '@' ) {
        window.location.href = 'home.html';
    } else {
        alert('Invalid User')
    }
    
})