function checkPasswords(a, b) {
    let firstContainer = document.querySelector('li.password');
    if (a.value !== b.value) {
        a.setCustomValidity('Passwords do not match.');
        b.setCustomValidity('Passwords do not match.');
        firstContainer.classList.add('password-invalid');
    } else {
        a.setCustomValidity('');
        b.setCustomValidity('');
        firstContainer.classList.remove('password-invalid');
    }
}

passwords = document.querySelectorAll('input[type="password"]');

passwords[1].addEventListener('input', () => {
    checkPasswords(passwords[0], passwords[1]);
});