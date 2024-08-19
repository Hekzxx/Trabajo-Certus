document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.querySelector('#username').value.trim();
        const password = document.querySelector('#password').value.trim();
        const telefono = document.querySelector('#telefono').value.trim();
        const direccion = document.querySelector('#direccion').value.trim();
        const correo = document.querySelector('#correo').value.trim();
        const genero = document.querySelector('input[name="genero"]:checked') ? 
                       document.querySelector('input[name="genero"]:checked').value : '';

        let errors = [];
        
        if (username === '') {
            errors.push('El nombre de usuario es obligatorio.');
        } else if (username.length > 20) {
            errors.push('El nombre de usuario debe tener menos de 20 caracteres.');
        }

        if (password === '') {
            errors.push('La contraseña es obligatoria.');
        } else if (password.length > 10) {
            errors.push('La contraseña debe tener menos de 10 caracteres.');
        }

        if (telefono === '') {
            errors.push('El teléfono es obligatorio.');
        } else if (!/^\d{9}$/.test(telefono)) {
            errors.push('El teléfono debe tener 9 dígitos.');
        }

        if (direccion === '') {
            errors.push('La dirección es obligatoria.');
        }

        if (correo === '') {
            errors.push('El correo electrónico es obligatorio.');
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(correo)) {
            errors.push('El correo electrónico no es válido.');
        }

        if (genero === '') {
            errors.push('Debe seleccionar un género.');
        }
        //----------------------------------------------------------------
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const storedUser = JSON.parse(localStorage.getItem(key));

            if (storedUser.username === username) {
                errors.push('Ya existe una cuenta con este nombre de usuario.');
            }
            if (storedUser.correo === correo) {
                errors.push('Ya existe una cuenta con este correo electrónico.');
            }
            if (storedUser.telefono === telefono) {
                errors.push('Ya existe una cuenta con este número de teléfono.');
            }
        }

        if (errors.length > 0) {
            alert(errors.join('\n'));
        } else {
            const newUser = {
                username: username,
                password: password,
                telefono: telefono,
                direccion: direccion,
                correo: correo,
                genero: genero
            };

            localStorage.setItem(username, JSON.stringify(newUser));

            alert('Cuenta creada con éxito.');
            window.location.href = '../Login/login.html';
        }
    });
});


