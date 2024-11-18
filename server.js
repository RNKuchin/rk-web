// curl -X GET https://api.telegram.org/bot<8024803226:AAG6MIvIdLIkDmKELf_tdBJeqgGYqjFhfbA>/getUpdates

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "https://rk-web.ru", // Разрешить только запросы с Vue.js
  })
);

// Токен бота Telegram
const TELEGRAM_TOKEN = "8024803226:AAG6MIvIdLIkDmKELf_tdBJeqgGYqjFhfbA";
// ID чата, в который будут отправляться сообщения
const CHAT_ID = "-4532763126";

app.use(bodyParser.json());

// Маршрут для обработки данных формы
app.post("/submit-form", async (req, res) => {
  const { name, email, message } = req.body;

  // Форматируем текст сообщения
  const text = `
📩 Новое сообщение с формы:
👤 Имя: ${name}
✉️ Email: ${email}
📝 Сообщение: ${message}
  `;

  try {
    // Отправляем сообщение в Telegram
    await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
      {
        chat_id: CHAT_ID,
        text: text,
      }
    );
    res
      .status(200)
      .send({ message: "Сообщение успешно отправлено в Telegram!" });
  } catch (error) {
    console.error("Ошибка при отправке сообщения в Telegram:", error);
    res
      .status(500)
      .send({ error: "Не удалось отправить сообщение в Telegram." });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на https://rk-web.ru:${port}/submit-form`);
});
