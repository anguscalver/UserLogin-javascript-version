// USER LOGIN ASSIGNMENT

// EVENT LISTENER 
document.getElementById('button').addEventListener ('click', checkUserInfo);

// EVENT FUNCTION
function checkUserInfo () {
    // READ USERNAME AND PASSWORD
    let username = document.getElementById('username-input').value;
    let password = document.getElementById('password-input').value;
    //Test input variable 

    console.log(username);

    //binary
    if (username == 'markarm') {
        document.getElementById('forgot-password').innerHTML = 'login successful';
    } else {
        document.getElementById('forgot-password').innerHTML = 'login unsuccessful';
    }
//binary
if (password == 'greenriver') {
    document.getElementById('forgot-password').innerHTML = 'login successful';
} else {
    document.getElementById('forgot-password').innerHTML = 'login unsuccessful';
}
}