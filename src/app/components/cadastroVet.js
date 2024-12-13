"use client";
import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Importar serverTimestamp
import InputMask from "react-input-mask"; // Importando a biblioteca de máscara
import "../../app/escola.css";

const CadastroVet = () => {
  const [form, setForm] = useState({
    curso: "",
    nome: "",
    email: "",
    telefone: "",
  });

  // Atualiza os valores do formulário conforme o usuário digita
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Envia o formulário com o campo "data" preenchido automaticamente
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Registra a data de preenchimento
      const preenchimentoData = new Date().toLocaleString();

      await addDoc(collection(db, "cadastro"), {
        ...form,
        data: serverTimestamp(), // Adiciona a data/hora do servidor (timestamp do Firebase)
        dataPreenchimento: preenchimentoData, // Data de preenchimento no formato de string
      });

      alert("Seu cadastro foi enviado com sucesso! Em breve entraremos em contato.");
      // Limpa os campos do formulário após o envio
      setForm({ curso: "", nome: "", email: "", telefone: "" });
    } catch (error) {
      console.error("Erro ao enviar cadastro:", error);
      alert("Ocorreu um erro ao enviar seu cadastro. Por favor, tente novamente.");
    }
  };

  return (
    <div className="formulario">
      <div className="boardForm">
        <div style={formContainerStyle}>
          <p style={formDescriptionStyle}>
            Preencha o formulário abaixo e nossa equipe entrará em contato com você.
          </p>
          <form onSubmit={handleSubmit} style={formStyle}>
            <select
              style={inputStyle}
              name="curso"
              value={form.curso}
              onChange={handleChange}
              required
            >
              <option value="">Curso técnico em veterinária</option>
            </select>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Nome"
              required
              style={inputStyle}
            />
            <input
              type="email" // Alterado para validar formato de email
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              style={inputStyle}
            />
            <InputMask
              mask="(99) 99999-9999"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              placeholder="Telefone"
              required
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>
              Inscreva-se Agora!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Estilos modernos para o formulário
const formContainerStyle = {
  maxWidth: "500px",
  margin: "0 auto",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  textAlign: "center",
};

const formDescriptionStyle = {
  fontSize: "16px",
  marginBottom: "20px",
  color: "#555",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ddd",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "10px 15px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#007bff",
  color: "#fff",
  fontSize: "16px",
  cursor: "pointer",
};

export default CadastroVet;


