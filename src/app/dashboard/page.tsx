"use client";
import { db } from "../components/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import FilterInput from "../components/FilterInput";
import "../dashboard/dashboard.css"

interface Cadastro {
  id: string;
  curso: string;
  email: string;
  nome: string;
  telefone: string;
  data: string;
  timestamp: number; // Timestamp da data de cadastro
}

export default function Home() {
  const [dados, setDados] = useState<Cadastro[]>([]);
  const [filtroCurso, setFiltroCurso] = useState<string>("");
  const [filtroNome, setFiltroNome] = useState<string>("");
  const [filtroTempo, setFiltroTempo] = useState<number | null>(null); // Filtro por tempo em dias

  useEffect(() => {
    async function fetchData() {
      try {
        const querySnapshot = await getDocs(collection(db, "cadastro"));
        const data = querySnapshot.docs.map((doc) => {
          const docData = doc.data();
          return {
            id: doc.id,
            curso: docData.curso || "Não informado",
            email: docData.email || "Não informado",
            nome: docData.nome || "Não informado",
            telefone: docData.telefone || "Não informado",
            data: docData.data
              ? new Date(docData.data.seconds * 1000).toLocaleDateString("pt-BR")
              : "Não informado",
            timestamp: docData.data ? docData.data.seconds * 1000 : 0, // Timestamp para cálculo
          };
        });
  
        // Ordenando os dados por timestamp de forma decrescente
        const dadosOrdenados = data.sort((a, b) => b.timestamp - a.timestamp);
        setDados(dadosOrdenados);
      } catch (error) {
        console.error("Erro ao buscar os dados: ", error);
      }
    }
    fetchData();
  }, []);
  

  // Filtrar os dados
  const dadosFiltrados = dados.filter((item) => {
    const correspondeCurso = item.curso.toLowerCase().includes(filtroCurso.toLowerCase());
    const correspondeNome = item.nome.toLowerCase().includes(filtroNome.toLowerCase());

    // Filtro por tempo
    if (filtroTempo !== null) {
      const diasEmMilissegundos = filtroTempo * 24 * 60 * 60 * 1000;
      const dataAtual = Date.now();
      const dataCadastro = item.timestamp;

      if (dataAtual - dataCadastro > diasEmMilissegundos) {
        return false;
      }
    }

    return correspondeCurso && correspondeNome;
  });

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Lista de Cadastros</h1>

      {/* Filtros */}
      <div className="filtroInput">
        <FilterInput label="Curso" value={filtroCurso} onChange={setFiltroCurso} />
        <FilterInput label="Nome" value={filtroNome} onChange={setFiltroNome} />
      </div>

      {/* Filtros por tempo */}
      <div className="filtroTempo" style={{}}>
        <button onClick={() => setFiltroTempo(7)} style={buttonStyle}>
          Últimos 7 dias
        </button>
        <button onClick={() => setFiltroTempo(30)} style={buttonStyle}>
          Últimos 30 dias
        </button>
        <button onClick={() => setFiltroTempo(60)} style={buttonStyle}>
          Últimos 60 dias
        </button>
        <button onClick={() => setFiltroTempo(null)} style={buttonStyle}>
          Remover Filtro de Data
        </button>
      </div>

      {/* Tabela de dados */}
      <table className="ListDB">
  <thead>
    <tr>
      <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>ID</th>
      <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Curso</th>
      <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Email</th>
      <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Nome</th>
      <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Telefone</th>
      <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Data</th>
    </tr>
  </thead>
  <tbody>
    {dadosFiltrados.length > 0 ? (
      dadosFiltrados.map((item) => (
        <tr key={item.id}>
          <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>{item.id}</td>
          <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>{item.curso}</td>
          <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>{item.email}</td>
          <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>{item.nome}</td>
          <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>{item.telefone}</td>
          <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>{item.data}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={6} style={{ textAlign: "center", padding: "10px" }}>
          Nenhum dado encontrado
        </td>
      </tr>
    )}
  </tbody>
</table>

    </div>
  );
}

const buttonStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #007bff",
  backgroundColor: "#007bff",
  color: "#fff",
  cursor: "pointer",
  margin: "1rem",
};

const tableHeaderStyle = {
  borderBottom: "1px solid #ccc",
  textAlign: "left",
  padding: "8px",
};

const tableCellStyle = {
  padding: "8px",
  borderBottom: "1px solid #eee",
};

      

