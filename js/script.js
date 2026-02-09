document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MENÚ MÓVIL ---
    const boton = document.getElementById('botonMenu');
    const menu = document.getElementById('navMenu');

    // Verificamos que el botón exista antes de agregar el evento (para evitar errores en páginas sin menú)
    if (boton && menu) {
        boton.addEventListener('click', () => {
            menu.classList.toggle('activo');
        });
    }

    // --- 2. SLIDER AUTOMÁTICO ---
    let slideIndex = 0;
    const slides = document.getElementsByClassName("mySlides");

    // CORRECCIÓN IMPORTANTE: Verificamos .length > 0
    // getElementsByClassName siempre devuelve "algo" (una lista vacía), así que el if anterior siempre daba true y daba error.
    if (slides.length > 0) {
        showSlides();
    }

    function showSlides() {
        let i;
        // Ocultamos todas las fotos
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        
        // Incrementamos el índice
        slideIndex++;
        
        // Si llegamos al final, volvemos a la primera foto
        if (slideIndex > slides.length) { slideIndex = 1 }    
        
        // Mostramos la foto actual (restamos 1 porque el array arranca en 0)
        slides[slideIndex - 1].style.display = "block";  
        
        // Configurar el delay (5000 = 5 segundos)
        setTimeout(showSlides, 5000); 
    }
    // 1. Intentamos buscar el modal
var modal = document.getElementById("imageModal");

// 2. EL CONDICIONAL DE SEGURIDAD
// Si 'modal' existe (no es null), entramos. Si no existe, JavaScript se salta este bloque.
if (modal) {
    
    var modalImg = document.getElementById("imgFull");
    var span = document.getElementsByClassName("close")[0];
    
    // Seleccionamos las imágenes
    var images = document.querySelectorAll(".news-img-container img");

    // Lógica para abrir
    images.forEach(function(img) {
        img.onclick = function(){
            modal.style.display = "flex"; 
            modal.style.alignItems = "center"; 
            modal.style.justifyContent = "center"; 
            modalImg.src = this.src; 
        }
    });

    // Lógica para cerrar con la X
    // (Ponemos otro if por seguridad, por si borraste la X del html)
    if (span) {
        span.onclick = function() { 
            modal.style.display = "none";
        }
    }

    // Lógica para cerrar haciendo clic afuera
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
});

// --- 3. TARJETAS DEL EQUIPO ---
// Esta función debe estar fuera del DOMContentLoaded para que el onclick="" del HTML la encuentre.
function toggleInfo(boton) {
    const card = boton.closest('.member-card');
    const bio = card.querySelector('.member-bio');
    
    bio.classList.toggle('abierto');

    if (bio.classList.contains('abierto')) {
        boton.textContent = '-';
    } else {
        boton.textContent = '+';
    }
}