"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface NasaImage {
  title: string;
  url: string;
  explanation: string;
  date: string;
}

export default function NasaImages() {
  const [images, setImages] = useState<NasaImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch('/api/nasa');
        
        // Verifica se a resposta foi bem-sucedida
        if (!res.ok) {
          throw new Error('Erro na resposta da API');
        }

        const data: NasaImage[] = await res.json();
        setImages(data);
      } catch (error) {
        setError('Erro ao carregar imagens');
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  if (loading) return <p className="text-center">Carregando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>
      <header className="flex justify-end space-x-4 p-4 bg-gray-800 text-white">
        <Link href="/" className="transition-[0.25s] hover:text-[#0099ff]">Página Inicial</Link>
        <Link href="/About" className="transition-[0.25s] hover:text-[#0099ff]">Sobre</Link>
        <Link href="/Calculation" className="transition-[0.25s] hover:text-[#0099ff]">Cálculo</Link>
        <Link href="/NasaImages" className="transition-[0.25s] hover:text-[#0099ff]">Imagens da NASA</Link>
      </header>

      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Imagens da NASA</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="text-center">
              <h2 className="text-xl font-semibold mb-2">{image.title}</h2>
              <Link href={`/nasa-images/${image.date}`}>
                <img src={image.url} alt={image.title} className="w-full h-auto mb-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
