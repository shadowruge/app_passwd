function gerasenha(){
    const upCase = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]"
    const passwordLength = document.getElementById('variant').value 
    if(!passwordLength){
        alert("Selecione aomenos qutro(4)")
            return
    }
    
    let gerar = document.getElementById('gerar').value    
    if(!gerar){
        alert("Digite aomenos qutro(4) caracteres e aolado seleciona o tamanho")
            return
    }
    
    for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * upCase.length)
        gerar += upCase.substring(randomNumber, randomNumber + 1)
        
      }
    
      let x = document.createElement("li")
      let t = document.createTextNode(gerar)
  x.appendChild(t)
  document.getElementById("senha").appendChild(x)
   
}