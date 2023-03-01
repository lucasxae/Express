// 
const express = require("express"); // importando o express
const app = express(); // (iniciando)funcao q vai carregar todo o express dentro de uma variavel


// Como criar rotas

app.get("/",function(req,res){   // req = requisicao res = resposta "/" -> tela principal do site, definir oque essa rota faz e por uma function
    res.send("Bem vindo ao meu site onde estou aprendendo sobre rotas") //devolvendo uma respotas em formato de texto
});
// nn pode enviar multiplas respostas e nn pode deixar de enviar uma resposta
/* OUTROS MEIOS DE CRIAR UMA ROTA
app.post()
app.delete()
app.patch()
app.options
*/

app.get("/blog",function(req,res){
    res.send("<h1>Bem vindo ao meu blog</h1>")
})

app.get("/canal/youtube",function(req,res){
    res.send("Bem vindo ao meu canal do youtube")
})









// iniciando um servidor em express(ULTIMA COISA Q SE FAZ DENTRO DO CODIGO)
app.listen(4000,function(error){ // 4000 = porta onde o servidor vai rodar(parametro)
    if(error){
        console.log("Ocorreu um error!") //mostar se deu error ao entrar no servidor
    } else{
        console.log("Servidor iniciado com sucesso!") // monstrar se deu tudo certo ao entrar no servidor
    }
})//iniciando o servidor