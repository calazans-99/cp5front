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
        const res = await fetch('/api/route'); // Chama o endpoint local que puxa imagens da NASA
        const data = await res.json();
        setImages(data);
      } catch (error) {
        setError('Erro ao carregar imagens');
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <header className="flex justify-end space-x-4 p-4 bg-gray-800 text-white">
        <Link href="/" className="transition-[0.25s] hover:text-[#0099ff]">Página Inicial</Link>
        <Link href="/about" className="transition-[0.25s] hover:text-[#0099ff]">Sobre</Link>
        <Link href="/calculation" className="transition-[0.25s] hover:text-[#0099ff]">Cálculo</Link>
        <Link href="/nasa-images" className="transition-[0.25s] hover:text-[#0099ff]">Imagens da NASA</Link>
      </header>

      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Imagens da NASA</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="text-center">
              <h2 className="text-xl font-semibold mb-2">{image.title}</h2>
              <Link href={`/nasa-images/${image.date}`} legacyBehavior>
                <a className="text-blue-500 hover:underline">
                  <img src={image.url} alt={image.title} className="w-full h-auto" />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
