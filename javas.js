function javas(form){
  var form = document.querySelector('form')
  if(form.login.value == "Pitaia" && form.senha.value == "querominhavaga"){
    location = "index.html"
  }
  else {
    form.login.value = ""
    form.senha.value = ""
    alert("Dados incorretos")
  }
}
