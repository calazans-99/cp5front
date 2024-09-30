import Link from 'next/link';
import { useEffect, useState } from 'react';

// Interface para o conteúdo da imagem
interface NasaImage {
  title: string;
  url: string;
  explanation: string;
  date: string;
}

export default function Home() {
  const [images, setImages] = useState<NasaImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=uak2hWXk9EoxwYJxtUnDZYBfGq1lyXJE2sOXq9lC');
        const data = await res.json();
        setImages(data); // Atualizando o estado com a lista de imagens
      } catch (error) {
        setError('Falha ao carregar dados da NASA');
        console.error('Erro ao buscar dados da NASA:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Imagens da NASA</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="text-center">
            <Link href={`/post/${image.date}`}>
              <a>
                <h2 className="text-xl font-semibold mb-2">{image.title}</h2>
                <img src={image.url} alt={image.title} className="w-full h-auto" />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
