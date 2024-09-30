import { useState } from 'react';
import Link from 'next/link';

export default function Calculation() {
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const value = Math.random() * 100; // Simulando um cálculo fictício
    setResult(value);
  };

  return (
    <div>
      <header className="flex justify-end space-x-4 p-4 bg-gray-800 text-white">
        <Link href="/" className="transition-[0.25s] hover:text-[#0099ff]">Página Inicial</Link>
        <Link href="/about" className="transition-[0.25s] hover:text-[#0099ff]">Sobre</Link>
        <Link href="/calculation" className="transition-[0.25s] hover:text-[#0099ff]">Cálculo</Link>
        <Link href="/nasa-images" className="transition-[0.25s] hover:text-[#0099ff]">Imagens da NASA</Link>
      </header>

      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Cálculo Baseado nas Ideias de Velikovsky</h1>
        <p className="mb-8">
          Vamos realizar um cálculo simples, inspirado nas teorias de Velikovsky sobre catástrofes cósmicas que
          poderiam impactar a Terra.
        </p>

        <button 
          onClick={calculate} 
          className="bg-blue-500 text-white p-2 rounded transition-[0.25s] hover:bg-[#005c99]"
        >
          Realizar Cálculo
        </button>

        {result !== null && (
          <div className="mt-4">
            <p className="text-xl">Resultado do Cálculo: {result.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
