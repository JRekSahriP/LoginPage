const inputUser = <HTMLInputElement>document.getElementById("username")!;
const inputPassword = <HTMLInputElement>document.getElementById("password")!;
const loginBtn = document.getElementById("submitBtn")!;

loginBtn.addEventListener("click",function(event) {
    event.preventDefault()
    let user:string = inputUser.value;
    let password:string = inputPassword.value;
    
    let valid = true;
    
    if(user.length < 1 || user.length > 40){valid = false;}
    if(password.length < 1 || password.length > 60){valid = false;}

    if (valid) {
        alert("Login successful");
    } else {
        alert("Username or password invalid");
    }
});
