"use client";
import { db } from "../components/firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "jspdf-autotable";
import FilterInput from "../components/FilterInput";
import "./dashboard.css";

interface Cadastro {
  id: string;
  curso: string;
  email: string;
  nome: string;
  telefone: string;
  data: string;
  timestamp: number;
  verificado?: boolean;
}

export default function Home() {
  const [dados, setDados] = useState<Cadastro[]>([]);
  const [verificados, setVerificados] = useState<{ [key: string]: boolean }>({});
  const [filtroCurso, setFiltroCurso] = useState<string>("");
  const [filtroNome, setFiltroNome] = useState<string>("");
  const [filtroTempo, setFiltroTempo] = useState<number | null>(null);

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
            timestamp: docData.data ? docData.data.seconds * 1000 : 0,
            verificado: docData.verificado || false,
          };
        });

        const dadosOrdenados = data.sort((a, b) => b.timestamp - a.timestamp);
        setDados(dadosOrdenados);

        const statusInicial: { [key: string]: boolean } = {};
        data.forEach((item) => {
          statusInicial[item.id] = item.verificado || false;
        });
        setVerificados(statusInicial);
      } catch (error) {
        console.error("Erro ao buscar os dados: ", error);
      }
    }
    fetchData();
  }, []);

  // Função para marcar como verificado no Firestore
  const marcarVerificado = async (id: string) => {
    if (!verificados[id]) {
      try {
        const cadastroRef = doc(db, "cadastro", id);
        await updateDoc(cadastroRef, { verificado: true });
        setVerificados((prev) => ({ ...prev, [id]: true }));
      } catch (error) {
        console.error("Erro ao atualizar status:", error);
      }
    }
  };

  // Função para gerar o PDF
  const gerarPDF = () => {
    const doc = new jsPDF();
autoTable(doc, {
  head: [["Curso", "Email", "Nome", "Telefone", "Data"]],
  body: dadosFiltrados.map((item) => [
    
    item.curso,
    item.email,
    item.nome,
    item.telefone,
    item.data,
  ]),
});
doc.save("cadastros.pdf");
  };

  // Filtrar os dados
  const dadosFiltrados = dados.filter((item) => {
    const correspondeCurso = item.curso.toLowerCase().includes(filtroCurso.toLowerCase());
    const correspondeNome = item.nome.toLowerCase().includes(filtroNome.toLowerCase());

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

      {/* Filtro por tempo */}
      <div className="filtroTempo">
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
        {/* Botão para gerar PDF */}
      <button onClick={gerarPDF} style={pdfButtonStyle}>
        Gerar PDF
      </button>
      </div>

      

      {/* Tabela de dados */}
      <table className="ListDB">
        <thead>
          <tr>
            
            <th>Curso</th>
            <th>Email</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Data</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {dadosFiltrados.length > 0 ? (
            dadosFiltrados.map((item) => (
              <tr key={item.id}>
                
                <td>{item.curso}</td>
                <td>{item.email}</td>
                <td>{item.nome}</td>
                <td>{item.telefone}</td>
                <td>{item.data}</td>
                <td>
                  <button
                    onClick={() => marcarVerificado(item.id)}
                    style={{
                      backgroundColor: verificados[item.id] ? "green" : "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      cursor: verificados[item.id] ? "default" : "pointer",
                      borderRadius: "4px",
                    }}
                    disabled={verificados[item.id]}
                  >
                    {verificados[item.id] ? "Verificado" : "Marcar"}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} style={{ textAlign: "center", padding: "10px" }}>
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
  backgroundColor: "#007bff",
  color: "#fff",
  cursor: "pointer",
  margin: "1rem",
};

const pdfButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#28a745",
};


      

