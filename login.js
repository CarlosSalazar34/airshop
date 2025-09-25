//////SIGN UP
function setCookie(name, value) {
    let date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
}

function registerUser(event){
    event.preventDefault();                                      // Evita recarga de la página
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    
    setCookie("username", username);
    setCookie("email", email);
    
    alert("Usuario registrado exitosamente");
    window.location.href = "login.html";                         // Redirige a login.html
}

//////LOGIN
function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if (cookiePair[0].trim() === name) {
            return cookiePair[1];
        }
    }
    return "";
}

function loginUser(event){
    event.preventDefault();
    let email = document.getElementById("email").value;
    let saveEmail = getCookie("email");
    console.log("Ingresado:", email, "Registrado:", saveEmail);

    if(email === saveEmail){
        alert("Log in successful");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    } else {
        console.log("DEBUG: No coincide ->", email, saveEmail);
        alert("Email not registered. Please sign up first.");
    }
}

