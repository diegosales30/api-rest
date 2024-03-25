import app from "./src/app.js"; //importante usar .js no final
import conexao from "./infra/conexao.js"; //importando conexão

const PORT = 3333;

//fazer iniciar a conexao com o banco de dados
conexao.connect((erro) => {
  if(erro) {
    console.log(erro);
  }else {
    console.log('conexão realizada com sucesso');
    //escutar a porta apos iniciar a conexao com sucesso
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    })
  }
});

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// })