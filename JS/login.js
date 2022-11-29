function login() {
    let email = document.getElementById("login_email").value;
    let senha = document.getElementById("login_senha").value;
  
    let data = {
      email: email,
      senha: senha,
    };

    efetuarLogin(data)

}

function efetuarLogin(data) {

        localStorage.setItem("login-token", data);
        location.href = "../HTML/initPage.html";
     
  }