function fun(variable){
  document.getElementById("output").value=document.getElementById("output").value+variable
}
function clearscreen(){
  document.getElementById("output").value=""
}

function equalclick(){
  var result=document.getElementById("output").value
  document.getElementById("output").value=eval(result)
  
}
