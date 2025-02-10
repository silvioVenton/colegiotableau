"use client";
import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import "../../app/escola.css";

const CadastroFund = () => {
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
    try {
      // Salva no Firestore
      await addDoc(collection(db, "cadastro"), {
        ...form,
        data: serverTimestamp(),
      });

      // Faz a requisição para enviar o e-mail
      await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      alert("Cadastro enviado com sucesso!");
      setForm({ curso: "", nome: "", email: "", telefone: "" });
    } catch (error) {
      console.error("Erro ao enviar cadastro:", error);
      alert("Ocorreu um erro ao enviar seu cadastro. Por favor, tente novamente.");
    }
  };

  return (
    <div className="formulario">
      <h1>Venha fazer parte da família Tableau</h1>
      <div className="boardForm">
        <form onSubmit={handleSubmit}>
          <select name="curso" value={form.curso} onChange={handleChange} required>
            <option value="">Curso de Interesse</option>
            <option value="EnsinoFundamental">Ensino Fundamental</option>
            <option value="EnsinoMedio">Ensino Médio</option>
          </select>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Nome"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="telefone"
            value={form.telefone}
            onChange={handleChange}
            placeholder="Telefone"
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroFund;

