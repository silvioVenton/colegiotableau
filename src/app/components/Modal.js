"use client"

import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()} // Evita fechar o modal ao clicar dentro dele
      >
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Acesse os Links</h2>
        <ul className="modal-links">
          
          <li><a href="https://tableau.ultramax.com.br/gestaoescolar/admin" target="_blank" rel="noopener noreferrer">Ultramax Cer</a></li>
          <li><a href="https://tableau.ultramax.com.br/gestaoescolar/faces/aluno/v2/login.xhtml" target="_blank" rel="noopener noreferrer">Ultramax Alunos Cer</a></li>
          <li><a href="https://tableau.ultramax.com.br/gestaoescolar/professor" target="_blank" rel="noopener noreferrer">Ultramax Professor Cer</a></li>
          
          <li><a href="https://tableautecnico.ultramax.com.br/gestaoescolar/admin/" target="_blank" rel="noopener noreferrer">Ultramax Técnico</a></li>
          <li><a href="https://tableautecnico.ultramax.com.br/gestaoescolar/faces/aluno/v2/login.xhtml" target="_blank" rel="noopener noreferrer">Ultramax Alunos Técnico</a></li>
          <li><a href="https://tableautecnico.ultramax.com.br/gestaoescolar/professor" target="_blank" rel="noopener noreferrer">Ultramax Professor Técnico</a></li>
          
         {/*<li><a href='./dashboard' target='_blank' rel='noopener noreferrer'>Dashborn</a></li>*/}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
