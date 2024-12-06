document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        autor: document.getElementById('autor').value,
        apellido: document.getElementById('apellido').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('http://localhost:3000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Formulario enviado con éxito');
        } else {
            alert('Error al enviar el formulario');
        }
    } catch (error) {
        alert('Error de conexión');
    }
});
