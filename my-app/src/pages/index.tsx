import Link from 'next/link';
import { useEffect, useState } from 'react';

// Interface para o conteúdo da imagem
interface NasaImage {
  title: string;
  url: string;
  explanation: string;
  date: string; // Certifique-se de que o campo "date" existe nos dados retornados pela API
}

export default function Home() {
  const [images, setImages] = useState<NasaImage[]>([]); // Tipagem correta do estado
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Usando a chave de API fornecida
        const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=uak2hWXk9EoxwYJxtUnDZYBfGq1lyXJE2sOXq9lC&count=10');
        const data = await res.json();

        // Verificando se os dados são um array
        if (Array.isArray(data)) {
          setImages(data); // Atualizando o estado com os dados retornados da API
        } else {
          setError('Dados inválidos retornados da API');
        }
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

  // Verificação para garantir que o `images` não seja indefinido ou vazio
  if (!images || images.length === 0) {
    return <p>Nenhuma imagem disponível</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Imagens da NASA</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="text-center">
            <Link href={`/post/${image.date}`}>
              <h2 className="text-xl font-semibold mb-2">{image.title}</h2>
              <img src={image.url} alt={image.title} className="w-full h-auto" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
