const themeSelector = document.querySelector('#theme-select');

// function to change theme
function changeTheme() {
    const body = document.body;
    const logo = document.querySelector('#byui-logo');

    if (themeSelector.value === 'dark') {
        body.classList.add('dark');
        logo.src = 'style/images/byui-logo_white.png';
    
    } else {
        body.classList.remove('dark');
        logo.src = 'style/images/byui-logo_blue.webp';
    }
}

themeSelector.addEventListener('change', changeTheme);
