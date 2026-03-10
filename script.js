function showMessage(){
alert("Hello!")
}

let form = document.getElementById("contactForm")

if(form){
form.addEventListener("submit", function(e){

e.preventDefault()

document.getElementById("result").innerText = "Message sent successfully"

})
}
