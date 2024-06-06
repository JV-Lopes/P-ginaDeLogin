document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (username === "admin" && password === "admin123") {
        alert("Login bem-sucedido!");
        errorMessage.style.display = 'none';
    } else {
        errorMessage.textContent = "Usuário ou senha inválidos!";
        errorMessage.style.display = 'block';
    }
});
