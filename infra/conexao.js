//terá todo codigo necessário para seconecar com o mysql e o db
import mysql from 'mysql';

const conexao = mysql.createConnection({
  //parametros de conexão
  host: 'localhost',
  port: '3306', //port do mysql padrao
  user: 'root',
  password: '1991', 
  database: 'dbcopa' //importante passar o nome do banco
})

export default conexao;