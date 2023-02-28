  
const upCase = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]"
 var checkBox = document.getElementById("prefix")
function gerasenha(){
 
  let gerar = document.getElementById('gerar').value
  const passwordLength = document.getElementById('variant').value 
    if(checkBox.checked==true){
     console.log(gerar.length)
    if(gerar.length <= 3){
      alert("Digite pelo menos (4) caracteres e ao lado seleciona o tamanho da senha")
      return
    }
   }
    var senhagerada=""
    for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * upCase.length)
        senhagerada += upCase.substring(randomNumber, randomNumber + 1)
        
      }
    
      let x = document.createElement("li")
      let t = document.createTextNode(gerar+senhagerada)
  x.appendChild(t)
  document.getElementById("senha").appendChild(x)
   
}

function mycheckbox() {

if (checkBox.checked == true){
  document.getElementById("gerar").disabled = false;
  document.getElementById('variant').value="4";
}
else{
  document.getElementById('variant').value="8";
  document.getElementById("gerar").disabled = true;
  document.getElementById("gerar").value=""

}
}