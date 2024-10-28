document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('back-to-top-btn');

    function updateButtonVisibility() {
        if (window.innerWidth >= 1440) {
            if (window.pageYOffset > window.innerHeight) {
                backToTopBtn.classList.remove('hidden');
            } else {
                backToTopBtn.classList.add('hidden');
            }
        } else {
            backToTopBtn.classList.add('hidden');
        }
    }

    window.addEventListener('scroll', updateButtonVisibility);
    window.addEventListener('resize', updateButtonVisibility);

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 初始调用以设置正确的状态
    updateButtonVisibility();
});