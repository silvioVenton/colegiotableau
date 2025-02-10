"use client";
import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import InputMask from "react-input-mask";
import "../../app/escola.css";

const CadastroAnalises = () => {
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
      await addDoc(collection(db, "cadastro"), {
        ...form,
        data: serverTimestamp(),
        dataPreenchimento: new Date().toLocaleString(),
      });

      alert("Seu cadastro foi enviado com sucesso! Em breve entraremos em contato.");
      setForm({ curso: "", nome: "", email: "", telefone: "" });
    } catch (error) {
      console.error("Erro ao enviar cadastro:", error);
      alert("Ocorreu um erro ao enviar seu cadastro. Por favor, tente novamente.");
    }
  };

  return (
    <div className="formulario">
      <div className="boardForm">
        <div>
          <p>
            Preencha o formulário abaixo e nossa equipe entrará em contato com você.
          </p>
          <form onSubmit={handleSubmit}>
            <select
              name="curso"
              value={form.curso}
              onChange={handleChange}
              required
            >
              <option value="">Curso técnico em Análise Clínica</option>
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
            <InputMask
              mask="(99) 99999-9999"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              placeholder="Telefone"
              required
            />
            <button type="submit">Inscreva-se Agora!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CadastroAnalises;
