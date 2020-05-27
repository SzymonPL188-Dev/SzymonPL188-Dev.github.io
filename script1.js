window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("banner").style.width = "375px";
    document.getElementById("banner").style.height = "40px";
    document.getElementById("header").style.backgroundColor = "#9b2527";
    document.getElementById("beginBtn").style.marginLeft = "-390px";

  } else {
    document.getElementById("banner").style.width = "751px";
    document.getElementById("banner").style.height = "80px";
    document.getElementById("header").style.backgroundColor = "#ff3539";
    document.getElementById("beginBtn").style.marginLeft = "-760px";
  }
}
var quoteList = ["Game Dev is fun","Make games, become them","Game Dev makes you more creative","Game Dev != Advanced Math"]
console.log(Math.floor(Math.random() * 4))
document.getElementById("quote").textContent = quoteList[Math.floor(Math.random() * 4)] + " - SzymonPL188"
if(localStorage.getItem("username") != null && localStorage.getItem("email") != null && localStorage.getItem("password") != null) {
document.getElementById("lgn").textContent = localStorage.getItem("username") +"(account)"
document.getElementById("lgn").href = "account.html"
document.getElementById("ideaBtn").href = "gameideagen.html"
document.getElementById("beginBtn").href = "contact.html"
}