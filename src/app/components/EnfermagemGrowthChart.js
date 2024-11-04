
"use client"; // Adicione isso no topo do arquivo

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: '2014', profissionais: 350.000 },
  { year: '2015', profissionais: 370.000 },
  { year: '2016', profissionais: 390.000 },
  { year: '2017', profissionais: 410.000 },
  { year: '2018', profissionais: 430.000 },
  { year: '2019', profissionais: 450.000 },
  { year: '2020', profissionais: 480.000 },
  { year: '2021', profissionais: 500.000 },
  { year: '2022', profissionais: 520.000 },
  { year: '2023', profissionais: 550.000 },
];

const EnfermagemGrowthChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="profissionais" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default EnfermagemGrowthChart;


