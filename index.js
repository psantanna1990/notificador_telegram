const conexao = require("./src/infraestrutura/conexao");
const Tabelas = require("./src/infraestrutura/tabelas");
const mensageiro = require("./src/mensageiro/mensageiro");

let continuar = true;

const executar = async () => {
  console.log("Iniciando");
  await sleep(10000);

  conexao.connect((erro) => {
    if (erro) {
      console.log(erro);
    } else {
      console.log("conectado com sucesso");

      Tabelas.init(conexao);
    }
  });
  console.log("Mensageiro Funcionando");

  while (continuar) {
    await sleep(5000);

    const sql = "SELECT * FROM Mensagens where enviado is false";

    conexao.query(sql, async (erro, resultados) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log(resultados);

        for (let i = 0; i < resultados.length; i++) {
          const mensagemEnviar = resultados[i];
          console.log("texto", mensagemEnviar.texto);
          console.log("id", mensagemEnviar.id);

          let enviou = await mensageiro.enviarMesagem(mensagemEnviar.texto);

          if (enviou.message_id) {
            const sql2 = `UPDATE teste.Mensagens SET enviado=1 WHERE id=${mensagemEnviar.id};
            `;
            conexao.query(sql2, async (erro, resultados) => {
              if (erro) {
                console.log(erro);
              } else {
                console.log("mensagem marcada como enviada");
              }
            });
          }
        }
      }
    });
  }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

executar();
