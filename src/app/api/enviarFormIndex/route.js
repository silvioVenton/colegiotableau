import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req) {
    try {
        const {curso, nome, email, telefone } = await req.json();

        if (!curso || !nome || !email || !telefone ){
            return NextResponse.json({error: "Todos os campos são obrigatórios."}, {status:400});
        }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'tableau.contatos@gmail.com',
            pass: 'bjsisibndkbcuvjq',
        },
    }) ;
    
    
    const mailOptions = {
        from: '"Cadastro de interesse" <tableau.contatos@gmail.com>',
        to: "tableau.contatos@gmail.com", // Substituir pelo e-mail que receberá as mensagens
        subject: "Novo Cadastro de Interesse",
        html: `
          <h2>Novo Cadastro ${curso}</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${telefone}</p>
        `,
      };


      await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json({ error: "Erro ao enviar e-mail." }, { status: 500 });
  }


    
}