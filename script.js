document.addEventListener('DOMContentLoaded', function (){
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');

    function toggleTheme(){
        body.classList.toggle("dark-theme");

        if (body.classList.containts('dark-theme')){
            themeToggle.textContent = 'Light';
        } else{
            themeToggle.textContent = 'Dark';
        }
    }

    themeToggle.addEventListener("click", toggleTheme);
});