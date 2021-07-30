function searchUser(searchForName){

    let requisicao = new XMLHttpRequest()
    requisicao.onload = function(){
        let resposta = this.responseText
        let objeto = JSON.parse(resposta)
        console.log(objeto)
        document.getElementById('div1').innerHTML=objeto.login
    
    }
    requisicao.open("GET","https://api.github.com/users/"+searchForName,true)
    requisicao.send()
    if(localStorage.searchHistorys==undefined){
localStorage.searchHistorys="https://api.github.com/users/"+searchForName+","
    }
else{
localStorage.searchHistorys+="https://api.github.com/users/"+searchForName+","
}
   
}