"use client";

import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import InputMask from "react-input-mask"; // Importa a biblioteca de máscara
import "../../app/escola.css";

const Cadastro = () => {
  const [form, setForm] = useState({
    curso: "",
    nome: "",
    email: "",
    telefone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }
  
    try {
      const response = await fetch("/api/enviarFormIndex", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Seu cadastro foi enviado com sucesso!");
        setForm({ curso: "", nome: "", email: "", telefone: "" });
      } else {
        alert(data.error || "Erro ao enviar o formulário.");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar o formulário. Tente novamente.");
    }
  };
  



  return (
    <div className="formulario">
      <div className="headLine">
        <h1>Venha fazer parte da família Tableau</h1>
      </div>
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
              <option value="">Curso de Interesse</option>
              <option value="fundamental">Fundamental</option>
              <option value="ensinoMedio">Ensino Médio</option>
              <option value="auxiliarEnfermagem">Auxiliar de Enfermagem</option>
              <option value="tecnicoEnfermagem">Técnico em Enfermagem</option>
              <option value="radiologia">Radiologia</option>
              <option value="analiseClinica">Análise Clínica</option>
              <option value="veterinaria">Veterinária</option>
              <option value="segurancaTrabalho">Segurança do Trabalho</option>
              <option value="Farmacia">Farmácia</option>
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
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              style={inputStyle}
            />
            <InputMask
              mask="(99) 99999-9999" // Máscara para telefone
              value={form.telefone}
              onChange={(e) =>
                setForm({ ...form, telefone: e.target.value })
              }
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  type="text"
                  name="telefone"
                  placeholder="Telefone"
                  required
                  style={inputStyle}
                />
              )}
            </InputMask>
            <button type="submit" style={buttonStyle}>
              Enviar
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

export default Cadastro;


