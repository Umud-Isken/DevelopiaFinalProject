let users = JSON.parse(localStorage.getItem("users")) || [];

document.querySelector(".loginBtn").addEventListener("click", function(){
    let nameInput = document.getElementById("nameInput").value;
    let passwordInput = document.getElementById("passwordInput").value;

    users.forEach(element => {
        if (element.istifageciAd === nameInput && element.shifre === passwordInput) {
            alert("Welcome, " + element.istifageciAd);
            localStorage.setItem("currentUser", JSON.stringify(element));
            window.location.href = "../FirstPage/index.html";
        }
    });
});

document.querySelector(".esas").addEventListener("click", function(){
    window.location.href = "../FirstPage/index.html"
})

document.querySelector(".loginBtn2").addEventListener("click", function(){
    window.location.href = "../SignInPage/index.html"
})