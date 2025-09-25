function toggleFaq(element) {
       const faqItem = element.parentElement;
       const answer = faqItem.querySelector('.faq-answer');
       const button = element.querySelector('button');

        if (answer.style.display === 'block') {
                answer.style.display = 'none';
                button.textContent = '+';
            } else {
                answer.style.display = 'block';
                button.textContent = '−';
            }
        }


        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.faq-item, .partie2, .partie3, .partie4, .partie5, .partie6').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});
