/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");


const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const gmailEmail = "pelebrufer56@gmail.com";
const gmailPassword = "(..Sil%&Ray6,,)@";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendEmail = functions.firestore.document("cadastro/{docId}").onCreate(async (snapshot) => {
  const data = snapshot.data();

  const mailOptions = {
    from: `"Cadastro Técnico" <${gmailEmail}>`,
    to: "destinatario@gmail.com",
    subject: "Novo Cadastro Técnico",
    text: `Novo cadastro:
    Curso: ${data.curso}
    Nome: ${data.nome}
    Email: ${data.email}
    Telefone: ${data.telefone}
    Data de Preenchimento: ${data.dataPreenchimento || "Não informada"}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("E-mail enviado com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
  }
});


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
