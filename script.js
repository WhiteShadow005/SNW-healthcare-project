document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckbox = document.getElementById('theme-checkbox');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme === 'dark' ? 'dark-mode' : 'light-mode');
        if (currentTheme === 'dark') {
            toggleCheckbox.checked = true;
        }
    }

    toggleCheckbox.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});
