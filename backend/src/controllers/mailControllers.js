const nodemailer = require("nodemailer");
require("dotenv").config();

const sendContactMail = (req, res) => {
  const { lastName, firstName, phone, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SENDIN,
    port: process.env.SMTP_PORT_SENDIN,
    secure: true,
    auth: {
      user: process.env.SMTP_SENDIN_USER,
      pass: process.env.SMTP_SENDIN_PASSWORD,
    },
  });
  const mailOptions = {
    from: "julien.ladreyt@gmail.com",
    to: "julien.ladreyt@gmail.com",
    sujet: "Nouveau message du formulaire de contact",
    texte: `${message} \n\n Téléphone : ${phone} \n\n Prénom : ${firstName} \n\n\n Nom : ${lastName} \n\n\n Email : ${email}`,
    html: `<p>${message}</p> <p>Téléphone : ${phone}</p> <p>Prénom : ${firstName}</p> <p>Nom : ${lastName}</p> <p>Email : ${email}</p>`,
  };

  transporter
    .sendMail(mailOptions)
    .then((info) => {
      console.warn(info);
      res.status(200).send("Message envoyé");
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send("Le mail ne s'est pas envoyé :(");
    });
};

module.exports = {
  sendContactMail,
};
