// Manejo del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad-niño').value;

    if(nombre && edad) {
        alert(`¡Gracias ${nombre}! Hemos recibido tu interés para el cuidado del peque de ${edad} años. Nos pondremos en contacto contigo muy pronto.`);
        this.reset();
    }
});

// Scroll suave para los enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
