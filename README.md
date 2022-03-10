# Exemplo de notificação no Telegram buscando dados no Postgrees


Projeto que fica rodando e caso haja uma alteração em uma tabela no banco de dados Postgrees envia uma notificação em um grupo no Postgrees


## Para rodar o projeto:

1 - [criar um bot usando o Telegram Bot father](https://core.telegram.org/bots)

2 - Criar um grupo no Telegram  e adicionar o bot criado no passo anterior

3 - Setar as variáveis de ambiente no docker-compose.yaml


4 - executar o comando a partir da raiz do projeto:
    ``
      docker-compose up --build
    ``
    
## Para enviar mensagens

Para efetuar o envio de mensagem basta que seja adicionado um registro na tabela Menagens que é criada assim que o projeto é executado:

Comando para efetuar o insert diretamente no banco de dados:

  ``INSERT INTO Mensagens
(texto, enviado)
VALUES('Mensagem a ser enviada', 0);``
