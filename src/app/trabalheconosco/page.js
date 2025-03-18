"use client";
import { div } from "framer-motion/client";
import { useState } from "react";
import  "../trabalheconosco/trabalheConosco.css";

export default function UploadCurriculo() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setMessage(""); // Limpa mensagens anteriores
    } else {
      setMessage("Por favor, selecione um arquivo PDF.");
      setFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Nenhum arquivo selecionado.");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/enviarCurriculo", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("✅ Currículo enviado com sucesso!");
        setFile(null);
        e.target.reset(); // Limpa o campo de upload
      } else {
        setMessage("❌ Falha ao enviar o currículo.");
      }
    } catch (error) {
      setMessage("❌ Erro ao enviar o arquivo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
    <div className="trabalheConosco">
      <h1 style={{fontSize:"60px", color:'#1b1464'}}>Faça parte da família Tableau</h1>
    </div>
    
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Envie seu Currículo</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          disabled={isLoading}
        >
          {isLoading ? "Enviando..." : "Enviar"}
        </button>
      </form>
      {message && (
        <p className={`mt-2 ${message.startsWith("✅") ? "text-green-500" : "text-red-500"}`}>
          {message}
        </p>
      )}
    </div>
    </div>
  );
}
