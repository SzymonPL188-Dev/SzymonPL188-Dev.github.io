function resetStorageLogout() {
    localStorage.clear();
    window.location.replace("login.html");
}
function login() {
    if(document.getElementById("us").value != "") {
        if(document.getElementById("em").value != "") {
            if(document.getElementById("pw").value != "") {
                localStorage.setItem("username", document.getElementById("us").value);
                localStorage.setItem("email", document.getElementById("em").value);
                localStorage.setItem("password", document.getElementById("pw").value);
                window.location.replace("account.html");
            } else {
                alert("error NO password")
            }
        } else {
            alert("error NO email")
        }
    } else {
        alert("error NO username")
    }
}
document.getElementById("usOu").textContent =  localStorage.getItem("username");
document.getElementById("emOu").textContent =  localStorage.getItem("email");