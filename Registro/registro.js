document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        
        alert('Cuenta creada con éxito. Puedes iniciar sesión ahora.');
        window.location.href = '../Login/Login.html';
    });
});






