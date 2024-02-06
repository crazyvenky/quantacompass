// Dark mode toggle functionality
const themeToggleButton = document.querySelector('.theme-toggle');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Example animation for smooth scrolling to sections
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    }
};
