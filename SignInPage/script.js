let users = JSON.parse(localStorage.getItem("users")) || []

$(".registerBtn").click(function(){
    let nameInput = $("#nameInput").val()
    let phoneInput = $("#phoneInput").val()
    let usernameInput = $("#usernameInput").val()
    let passwordInput = $("#passwordInput").val()

    let NewUser = {
        ad: nameInput,
        telefon: phoneInput,
        istifageciAd: usernameInput,
        shifre: passwordInput
    }

    users.push(NewUser);
    localStorage.setItem("users", JSON.stringify(users))
    localStorage.setItem("currentUser", JSON.stringify(NewUser))
    window.location.href = "../FirstPage/index.html"

    if(!nameInput && !phoneInput && !usernameInput && !passwordInput){
        alert("Please enter all data")
        users.push(!NewUser)
    }
})

document.querySelector(".loginBtn").addEventListener("click", function(){
    window.location.href = "../FirstPage/index.html"
})