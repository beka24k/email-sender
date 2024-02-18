# Email Sender JS

Проект "Email Sender JS" представляет собой простое приложение на JavaScript для отправки электронной почты с использованием модуля Nodemailer.

## Установка

1. Сначала склонируйте репозиторий:

   ```bash
   git clone https://github.com/beka24k/email-sender.git
   ```

2. Перейдите в директорию проекта:

   ```bash
   cd email-sender
   ```

3. Установите зависимости с помощью npm:

   ```bash
   npm install
   ```

## Конфигурация

1. В корне проекта создайте файл `.env` и добавьте в него следующие переменные среды:

   ```plaintext
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   ```

   Замените `your_email@gmail.com` и `your_email_password` на ваш адрес электронной почты и пароль соответственно.

## Использование

1. Создайте файл `email.js` в корне проекта и импортируйте модуль Nodemailer:

   ```javascript
   const nodemailer = require('nodemailer');
   ```

2. Используйте модуль для отправки электронной почты. Вот пример отправки письма:

   ```javascript
   // Создание транспортера
   let transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
           user: process.env.EMAIL_USER,
           pass: process.env.EMAIL_PASS
       }
   });

   // Настройка письма
   let mailOptions = {
       from: process.env.EMAIL_USER,
       to: 'recipient@example.com',
       subject: 'Тема письма',
       text: 'Текст письма'
   };

   // Отправка письма
   transporter.sendMail(mailOptions, function(error, info){
       if (error) {
           console.log(error);
       } else {
           console.log('Email sent: ' + info.response);
       }
   });
   ```

   Убедитесь, что ваш `.env` файл содержит корректные данные для отправки писем.

## Вклад и обратная связь

Если у вас есть предложения по улучшению этого проекта или вы нашли ошибку, пожалуйста, откройте новый issue или pull request на GitHub.

## Лицензия

Этот проект лицензируется в соответствии с лицензией MIT. Подробности смотрите в файле LICENSE.
   
