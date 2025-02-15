"use client";
import { useState } from 'react';


export default function UploadCurriculo() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
    } else {
      setMessage('Por favor, selecione um arquivo PDF.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Nenhum arquivo selecionado.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('../components/updateEmail', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setMessage('Currículo enviado com sucesso para o e-mail!');
      } else {
        setMessage('Falha ao enviar o currículo.');
      }
    } catch (error) {
      setMessage('Erro ao enviar o arquivo.');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Envie seu Currículo</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Enviar</button>
      </form>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </div>
  );
}