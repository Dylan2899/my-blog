document.getElementById('toggleTheme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Adding dark mode CSS
const style = document.createElement('style');
style.innerHTML = `
    .dark-mode {
        background: #333;
        color: #fff;
    }

    .dark-mode .post {
        background: #555;
        border-color: #777;
    }

    .dark-mode header, .dark-mode footer {
        background: #111;
    }
`;
document.head.appendChild(style);
