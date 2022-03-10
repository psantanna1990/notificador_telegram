class Tabelas {
  init(conexao) {
    this.conexao = conexao;

    this.criarMensagens();
  }

  criarMensagens() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Mensagens (id int NOT NULL AUTO_INCREMENT, texto varchar(50) NOT NULL, enviado BOOLEAN NOT NULL, PRIMARY KEY(id))";

    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela Mensagens criada com sucesso");
      }
    });
  }
}

module.exports = new Tabelas();
