import nodemailer from 'nodemailer'; // Exemplo de envio de e-mail com Nodemailer
import formidable from 'formidable';


export const config = {
  api: {
    bodyParser: false, // Desabilitar o bodyParser para lidar com o envio de arquivos
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ message: 'Erro ao processar o arquivo.' });
      }

      const { file } = files;
      if (!file || file[0].mimetype !== 'application/pdf') {
        return res.status(400).json({ message: 'Arquivo inválido. Envie um PDF.' });
      }

      try {
        // Configurar o envio de e-mail (exemplo com Nodemailer)
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'pelebrufer56@gmail.com',
            pass: '(..Sil%&Ray6,,)@',
          },
        });

        const mailOptions = {
          from: 'seu-email@gmail.com',
          to: 'destinatario@email.com',
          subject: 'Currículo enviado',
          text: 'O currículo foi enviado em anexo.',
          attachments: [
            {
              filename: file[0].originalFilename,
              path: file[0].filepath,
            },
          ],
        };

        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Currículo enviado com sucesso!' });
      } catch (error) {
        return res.status(500).json({ message: 'Erro ao enviar o currículo.' });
      }
    });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
