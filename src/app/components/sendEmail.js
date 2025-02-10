import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nome, email, telefone, curso } = req.body;

    try {
      // Configurar o transporte para o Gmail
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "pelebrufer56@gmail.com",
          pass: "(..Sil%&Ray6,,)@", // Senha de app do Gmail
        },
      });

      // Configurar o e-mail
      const mailOptions = {
        from: "seu-email@gmail.com",
        to: "destinatario@gmail.com",
        subject: "Novo Cadastro Recebido",
        text: `Novo cadastro recebido:\n
        Nome: ${nome}\n
        Email: ${email}\n
        Telefone: ${telefone}\n
        Curso: ${curso}`,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "E-mail enviado com sucesso!" });
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      res.status(500).json({ message: "Erro ao enviar e-mail." });
    }
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
