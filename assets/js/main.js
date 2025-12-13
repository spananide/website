(function() {
    const themeSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    if (!themeSwitch) {
        return;
    }

    // Function to set the theme
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeSwitch.checked = theme === 'dark';
    };

    // Event listener for the toggle
    themeSwitch.addEventListener('change', (e) => {
        setTheme(e.target.checked ? 'dark' : 'light');
    });

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Default to dark theme as per original design
        setTheme('dark');
    }
})();

