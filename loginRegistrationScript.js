document.getElementById("show-register").addEventListener("click", function() {
    document.getElementById("login-box").classList.add("hidden");
    document.getElementById("register-box").classList.remove("hidden");
});

document.getElementById("show-login").addEventListener("click", function() {
    document.getElementById("register-box").classList.add("hidden");
    document.getElementById("login-box").classList.remove("hidden");
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login functionality not implemented yet.");
});

document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Registration functionality not implemented yet.");
});
