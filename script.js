document.addEventListener('DOMContentLoaded', function() {
    // Animação de entrada do container principal
    setTimeout(() => {
        document.getElementById('main-container').classList.add('loaded');
    }, 100);
    
    // Animação das seções com scroll
    const sections = document.querySelectorAll('section');
    
    function checkVisibility() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
    }
    
    // Verificar visibilidade ao carregar e ao rolar
    window.addEventListener('load', checkVisibility);
    window.addEventListener('scroll', checkVisibility);
    
    // Links interativos
    document.getElementById('phone-link').addEventListener('click', function() {
        window.open('https://wa.me/5511943639393', '_blank');
    });
    
    document.getElementById('email-link').addEventListener('click', function() {
        window.location.href = 'mailto:Emillysilva4664@gmail.com';
    });
    
    document.getElementById('linkedin-link').addEventListener('click', function() {
        window.open('https://www.linkedin.com/in/emilly-silva-2942512b0/', '_blank');
    });
    
    // Adicionar hover aos itens de contato
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1)';
        });
    });
});
