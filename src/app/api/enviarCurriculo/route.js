import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "Arquivo não enviado." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());


    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: 'tableau.contatos@gmail.com',
        pass: 'bjsisibndkbcuvjq', // Verifique se precisa de senha de aplicativo
      },
    });

    await transporter.sendMail({
      from: '"Curriculo" <tableau.contatos@gmail.com>',
      to: "tableau.contatos@gmail.com",
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

