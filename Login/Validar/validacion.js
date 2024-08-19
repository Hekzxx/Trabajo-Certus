document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.querySelector('#username').value.trim();
        const password = document.querySelector('#password').value.trim();
        
        const storedUser = JSON.parse(localStorage.getItem(username));
        
        if (username === "" && password === "") {
            alert('¡Por favor ingrese su usuario y contraseña!');
        } else if (username === "" && password !== "") {
            alert('¡Por favor ingrese su usuario!');
        } else if (username !== "" && password === "") {
            alert('¡Por favor ingrese su contraseña!');
        } else if (storedUser && storedUser.password === password) {
            window.location.href = '../Catalogo/catalogo.html';
        } else {
            if(!storedUser) {
                alert('¡Usuario incorrecto!');
            } else if (storedUser.password !== password) {
                alert('¡Contraseña incorrecta!');
            }
        }
    });
});




