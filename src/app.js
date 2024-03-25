//importando o express atravez do require
//const express = require('express'); -modo antigo
import express from "express";

/* criar uma instancia do express chamando o construtor
do modulo */
const app = express();

//indicar que o express faça leitura de um json caso esteja no corpo de uma
//requisição, resolve o erro do insomnia "null" qundo envia json
/* indicar para o express ler body com json */ //linha fundamental
app.use(express.json()); 

//------------------------------------------
/* express tbm sugere que defina uma porta */
//const port = 3333; - movido para o server.js
//------------------------------------------

/* criar uma rota padrão, ou raiz */
app.get("/", (req, res) => {
  res.send("Hello Worlds!");
});

//MOCK ESTRUTURA DE DADOS BASICA TESTES
const selecoes = [
  {
    id: 1,
    selecao: "Brasil",
    grupo: "G",
  },
  {
    id: 2,
    selecao: "Sérvia",
    grupo: "G",
  },
  {
    id: 3,
    selecao: "Suiça",
    grupo: "G",
  },
  {
    id: 4,
    selecao: "Camarões",
    grupo: "G",
  },
];

//função buscar selecções por id
function buscarSelecaoPorId(id) {
  //filtrar selecao que seja igual a selecao passada no parametro
  return selecoes.filter((selecao) => selecao.id == id)
}

//função busca index de selecao pelo Id
function buscarIndexSelecao(id) {
  //filtrar o indice da seleção que estamos buscando
  return selecoes.findIndex((selecao) => selecao.id == id)
}


/* criar uma rota para o endpoint */
app.get("/selecoes", (req, res) => {
  //metodo send envia resposta para quem fez a requisição
  //pode ser um texto simples ou json, arrays e etc
  res.status(200).send(selecoes);
});

//buscr seleçao por id Get  :id -> parametro
app.get('/selecoes/:id', (req, res) => {
  let selecao = req.params.id;
  res.json(buscarSelecaoPorId(selecao))
})

/* rota post para postar dados */
app.post('/selecoes', (req, res) => {
    //pegar apenas o corpo da requisiçao
    selecoes.push(req.body)
    //sttus 201 sucess na criação
    res.status(201).send("seleção cadastrada com sucesso")
})

app.delete('/selecoes/:id', (req, res) => {
  let index = buscarIndexSelecao(req.params.id);
  //apartir do index que pegamos, cortar apenas 1 que é o proprio elemento
  //selecoes.splice(buscarIndexSelecao(selecao), 1)
  selecoes.splice(index, 1)
  res.status(200).send(`deletado com sucesso,seleção com index: ${index}`)
})

//rota atualizar dados com base no id
//o verbo PUT é feito pra fazer atualização com base no id
app.put('/selecoes/:id', (req, res) => {
  let index = buscarIndexSelecao(req.params.id);
  
  selecoes[index].selecao = req.body.selecao
  selecoes[index].grupo = req.body.grupo
  
  res.json(selecoes);
})


export default app; //exportar para usar no server.js
//------------------------------------------
/* precisa e escutar essa porta 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}) */ //- movido para o server.js
//------------------------------------------
