document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth < 1460) {
        const cajas = document.querySelectorAll('.week');
    
        cajas.forEach((caja, index) => {
        caja.addEventListener('click', () => {
            // Ocultar todas las cajas
            cajas.forEach(caja => {
            caja.style.display = 'none';
            });
    
          // Mostrar el primer rectángulo si se presionó el último
            if (index === cajas.length - 1) {
            cajas[0].style.display = 'block';
            } else {
            // Mostrar el siguiente rectángulo
            cajas[index + 1].style.display = 'block';
            }
        });
        });
    }
    });