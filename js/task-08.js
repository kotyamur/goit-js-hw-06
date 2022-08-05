const loginFormEl = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (email.value === '' || password.value === '') {
        alert('Please fill in all the fields!');
        return
    }
    const userInfo = {
        email: email.value,
        password: password.value,
    };
    console.log(userInfo);
    event.currentTarget.reset();
}

loginFormEl.addEventListener('submit', onFormSubmit);

