import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Calculation() {
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const value = Math.random() * 100;
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
        
        <p className="mt-8 mb-8">
          Os cálculos e previsões de Immanuel Velikovsky, especialmente em "Worlds in Collision", são centrais para as controvérsias que cercam seu trabalho. Velikovsky usou um método que mesclava observações astronômicas, interpretações mitológicas e relatos históricos para fundamentar suas alegações de que eventos cataclísmicos ocorreram de maneira muito mais recente do que a ciência aceita.
        </p>
        <p className="mb-8">
          Um dos pontos mais contestados foi sua interpretação do movimento dos planetas. Velikovsky sugeriu que Vênus, ao ser ejetado de Júpiter, passou próximo à Terra, resultando em uma série de catástrofes naturais. Ele se apoiou em textos mitológicos e relatos antigos para fundamentar suas teorias, mas seus métodos de cálculo não foram considerados rigorosos por muitos cientistas. A falta de evidências empíricas para sustentar suas alegações astronômicas levou a um ceticismo generalizado.
        </p>
        <p className="mb-8">
          A resistência à sua obra se intensificou devido à natureza radical de suas afirmações, que desafiavam não apenas a astronomia, mas também a geologia e a história. A comunidade científica argumentou que suas previsões sobre as consequências dos eventos cataclísmicos eram inconsistentes com a compreensão estabelecida dos processos geológicos e astronômicos. Por exemplo, a ideia de que a Terra poderia ter sofrido impactos cataclísmicos em escalas de tempo tão curtas não encontra suporte nas evidências geológicas.
        </p>
        
        <Image 
          src="/assets/immanuel_carl.png"
          alt="Carl Sagan com Immanuel Velikovsky"
          width={300}
          height={100}
          className='mb-8'
        />
        
        <p className="mb-8">
          A controvérsia em torno das teorias de Velikovsky gerou um debate mais amplo sobre o papel da ciência, da mitologia e da história. Embora suas ideias tenham sido desacreditadas em muitos círculos, elas continuam a suscitar interesse, especialmente entre aqueles que buscam explicações alternativas para os eventos da história da Terra. Velikovsky se tornou uma figura emblemática no estudo de teorias não convencionais, lembrando-nos da complexidade da busca por entender o nosso lugar no universo.
        </p>
      </div>
    </div>
  );
}
