document.getElementById('registration').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Submit');

    let isValid = true;

    // validasi username
    let username = document.getElementById('username').value;
    if(username.length < 5) {
        document.getElementById('usernameError')
        .innerText = "Username must be more than 5 character"
        isValid = false;
    }
    else if(invalidUsername(username) == true){
        document.getElementById('usernameError')
        .innerText = "Username must not include symbols"
        isValid = false;
    }
    else {
        document.getElementById('usernameError').innerText = ""
    }

    // validasi email
    let email = document.getElementById('email').value;
    if((email.endsWith('@gmail.com') || email.endsWith('@binus.ac.id')) && (validEmail(email))) {
        document.getElementById('emailError').innerText = ""
    }
    else {
        document.getElementById('emailError')
        .innerText = "Email must end with @gmail.com or @binus.ac.id and without space"
        isValid = false;
    }

    // validasi password
    let password = document.getElementById('password').value;
    if (!validPassword(password)){
        document.getElementById('passwordError')
        .innerText = "Password must be alphanumeric and include symbol, without space"
        isValid = false;
        
    }
    else{
        document.getElementById('passwordError').innerText = ""
    }

    // validasi age
    let age = document.getElementById('age').value;
    if(age < 1 || age > 190){
        document.getElementById('ageError')
        .innerText = "Age Input is Invalid."
        isValid = false;
    }
    else if(age <= 5){
        document.getElementById('ageError')
        .innerText = "You must be more than 5 years old."
        isValid = false;
    }
    else{
        document.getElementById('ageError').innerText = ""
    }

    // validasi gender
    let genderSelected = document.querySelector('input[name="gender"]:checked');
    if(!genderSelected) {
        document.getElementById('genderError')
        .innerText = "Gender must be selected"
        isValid = false;
    }
    else{
        document.getElementById('genderError').innerText = ""
    }

    if(isValid == true){
        openPopup()
    }

})


function openPopup() {
    document.getElementById('popup').classList.add("open-popup")
}


function invalidUsername(username) {
    let haveSymbol = false;
    for(let i = 0; i < username.length; i++){
        const char = username[i];
        if(!((char >= 'a' && char <= 'z')||(char >= 'A' && char <= 'Z'))){
            if(!(char >= '0' && char <= '9')){
                if(!(char == ' ')){
                    haveSymbol= true;
                }
            }
        }
    }
    return haveSymbol
}

function validPassword(password) {
    let haveNumber = false;
    let haveLetter = false;
    let haveSymbol = false;
    let haveSpace = false;
    for(let i = 0; i < password.length; i++){
        const char = password[i];
        if((char >= 'a' && char <= 'z')||(char >= 'A' && char <= 'Z')){
            haveLetter = true;
        }
        else if (char >= '0' && char <= '9') {
            haveNumber = true;
        }
        else if(char == ' '){
            haveSpace = true;
        }
        else{
            haveSymbol = true;
        }
    }
    return haveLetter && haveNumber && !haveSpace && haveSymbol;
}

function validEmail(email){
    let havespace = false;
    for(i = 0; i < email.length; i++){
        const char = email[i];
        if(char === ' '){
            havespace = true;
        }
    }
    return !havespace;
}

for(let i = 0; i < 5; i++){
    document.getElementsByClassName('social')[i].addEventListener('click', function(){
        alert('No Link Yet')
    })
}