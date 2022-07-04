const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const dob = document.getElementById('dob');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const usernameValue = username.value.trim();
const passwordValue = password.value.trim();

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
    
});

const sendData = (count, sRate) => {
    
    if (sRate === count) {
        alert("registration successfful....!!!");
       
        location.href=`login.html`
       
    }
}

//final data validation
const successMsg = () => {
    let formCon = document.getElementsByClassName('input-control');
    var count = formCon.length - 1;
    console.log(count);
    for (var i = 0; i < formCon.length; i++) {
        if (formCon[i].className === 'input-control success'){
            var sRate = 0 + i;
            sendData(count,sRate);
            // console.log(sRate,usernameValue,passwordValue);
            
        } else {
            return false;
    }

    }
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const isvaliduserName = username => {
    const ru = /^[A-Za-z]+$/
    return username.value.match(ru);
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const dobValue = dob.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    var maxlength = "2022-07-04";
    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else if (!isvaliduserName(username)) {
        setError(username, 'Username contain only alphabet');
    }else
    {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(phoneValue === '') {
        setError(phone, 'phone number is required');
    } else if (phoneValue.length !== 10) {
        setError(phone, 'phone number must be 10 digits');  
    }else
    {
        setSuccess(phone);
    }
    
    if(dobValue === '') {
        setError(dob, 'DOB  is required');
    } else 
    {
        setSuccess(dob);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

    successMsg();
};
