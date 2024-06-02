
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Hard-coded login credentials
    const validUsername = "124062";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
        // Redirect to the main content page
        window.location.href="Student portal.html"
    } else {
        document.getElementById("loginError").style.display = "block";
    }
});
