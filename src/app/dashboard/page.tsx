"use client";
import { db } from "../components/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import FilterInput from "../components/FilterInput";

// Definir o tipo para os dados do Firestore
interface Cadastro {
  id: string;
  curso: string;
  email: string;
  nome: string;
  telefone: string;
  data: string;
}

export default function Home() {
  const [dados, setDados] = useState<Cadastro[]>([]); // Definir tipo explícito para os dados
  const [filtroCurso, setFiltroCurso] = useState<string>("");
  const [filtroNome, setFiltroNome] = useState<string>("");

  // Função para buscar os dados
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
          };
        });
        setDados(data); // Agora o tipo de dados é conhecido
      } catch (error) {
        console.error("Erro ao buscar os dados: ", error);
      }
    }
    fetchData();
  }, []); // O useEffect só vai rodar uma vez quando o componente for montado

  // Filtro dos dados com base nos campos de busca
  const dadosFiltrados = dados.filter((item) => {
    const correspondeCurso = item.curso.toLowerCase().includes(filtroCurso.toLowerCase());
    const correspondeNome = item.nome.toLowerCase().includes(filtroNome.toLowerCase());
    return correspondeCurso && correspondeNome;
  });

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Lista de Cadastros</h1>

      {/* Filtros */}
      <FilterInput label="Curso" value={filtroCurso} onChange={setFiltroCurso} />
      <FilterInput label="Nome" value={filtroNome} onChange={setFiltroNome} />

      {/* Tabela de dados */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
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



      

