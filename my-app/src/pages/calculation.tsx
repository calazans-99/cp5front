import { useState } from 'react';
import Link from 'next/link';

export default function Calculation() {
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    // Exemplo de cálculo relacionado a Velikovsky
    const value = Math.random() * 100; // Simulando um cálculo fictício
    setResult(value);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Cálculo Baseado nas Ideias de Velikovsky</h1>
      <p className="mb-8">
        Vamos realizar um cálculo simples, inspirado nas teorias de Velikovsky sobre catástrofes cósmicas que
        poderiam impactar a Terra.
      </p>

      <button 
        onClick={calculate} 
        className="bg-blue-500 text-white p-2 rounded"
      >
        Realizar Cálculo
      </button>

      {result !== null && (
        <div className="mt-4">
          <p className="text-xl">Resultado do Cálculo: {result.toFixed(2)}</p>
        </div>
      )}

      {/* Adicionando o link para a página das imagens da NASA */}
      <div className="mt-8">
        <Link href="/nasa-images" className="text-blue-500 hover:underline">
          Ver imagens da NASA
        </Link>
      </div>

      {/* Link para voltar à página inicial */}
      <div className="mt-4">
        <Link href="/" className="text-blue-500 hover:underline">
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}
