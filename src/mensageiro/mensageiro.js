const { Telegraf } = require("telegraf");

exports.enviarMesagem = async (texto) => {
  const bot = new Telegraf(process.env.TELEGRAM_BOT_KEY);

  let mesagemEnviada = await bot.telegram.sendMessage(
    process.env.TELEGRAM_GROUP.toString(),
    texto
  );

  return mesagemEnviada;
};
