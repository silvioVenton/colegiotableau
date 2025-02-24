import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "Arquivo não enviado." }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Configuração do transportador (use seu e-mail e senha ou credenciais seguras)
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    

    // Configurações do e-mail
    await transporter.sendMail({
      from: "seuemail@gmail.com",
      to: "destinatario@gmail.com",
      subject: "Novo Currículo Recebido",
      text: "Você recebeu um novo currículo em anexo.",
      attachments: [
        {
          filename: file.name,
          content: buffer,
        },
      ],
    });

    return NextResponse.json({ message: "Currículo enviado com sucesso!" }, { status: 200 });
  } catch (error) {
    console.error("Erro ao enviar o e-mail:", error);
    return NextResponse.json({ error: "Erro ao enviar o currículo." }, { status: 500 });
  }
}
