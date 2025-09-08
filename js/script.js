
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // create typing  and add it 
    const typingElement = document.createElement('div');
    typingElement.className = 'typing-effect';
    const coverSubtitle = document.querySelector('.cover-subtitle');
    if (coverSubtitle) {
        coverSubtitle.parentNode.insertBefore(typingElement, coverSubtitle.nextSibling);
    }
    
    // displayed phrases
    const phrases = [
        'People Centered',
        'Data Storytelling',
        'Design Thinking',
        'Product Strategy', 
        'Insight Discovery',
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];
        
        // Remove character if it is deleting
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }
        
        // make the typing speed
        let typeSpeed = isDeleting ? 50 : 100;
        
        // of word is complete, wait then delete
        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 1000; // Pause at end 
            isDeleting = true;
        } 
        // move onto the next string 
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; 
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    // start the typing 
    typeWriter();

 

});

document.addEventListener('DOMContentLoaded', function() {
    // Get the current page name from the URL
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];
    
    // Hide the corresponding project card based on the current page
    const cardToHide = document.getElementById(currentPage + '-card');
    if (cardToHide) {
        cardToHide.style.display = 'none';
    }
    
    // Adjust grid layout if only 2 cards are showing (when one is hidden)
    const projectsGrid = document.querySelector('.more-projects-grid');
    const visibleCards = projectsGrid.querySelectorAll('.more-project-card:not([style*="display: none"])');
    
    if (visibleCards.length === 3) {
        projectsGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    } else if (visibleCards.length === 2) {
        projectsGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
        projectsGrid.style.maxWidth = '800px';
        projectsGrid.style.margin = '0 auto 3rem auto';
    }
});