//JS do banner do index 
document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const container = document.querySelector('.slides-backgrounds');
    const slides = document.querySelectorAll('.slide-bg');

    if (!container || slides.length === 0) return;

    // Total de slides reais (4 imagens reais + 1 clone)
    const totalSlidesReais = slides.length - 1; 

    setInterval(() => {
        slideIndex++;
        
        // Desliza suavemente a imagem de fundo
        container.style.transition = 'transform 0.8s ease-in-out';
        container.style.transform = `translateX(-${slideIndex * 100}%)`;

        // Quando chega no clone do Taylorismo
        if (slideIndex === totalSlidesReais) {
            setTimeout(() => {
                // Desativa a transição para retornar invisivelmente ao slide 1
                container.style.transition = 'none';
                slideIndex = 0;
                container.style.transform = `translateX(0%)`;
                
                // Força o navegador a aplicar o reset instantâneo
                void container.offsetHeight; 
            }, 800);
        }
    }, 3000); // Altera a cada 3 segundos
});