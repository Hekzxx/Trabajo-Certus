document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;
        
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        
        if (username === "" && password === "") {
            alert('¡Por favor ingrese su usuario y contraseña!');
        } else if (username === "" && password !== "") {
            alert('¡Por favor ingrese su usuario!');
        } else if (username !== "" && password === "") {
            alert('¡Por favor ingrese su contraseña!');
        } else if (username === storedUsername && password === storedPassword) {
            window.location.href = '../Catalogo/catalogo.html';
        } else {
            if(username !== storedUsername && password !==storedPassword) {
                alert('¡Usuario y Contraseña incorrectas!');
            } else if (username !== storedUsername) {
                alert('¡Usuario incorrecto!');
            } else if (password !== storedPassword) {
                alert('¡Contraseña incorrecta!');
            }
        }
    });
});



