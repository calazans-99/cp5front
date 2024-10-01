import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface NasaImage {
  title: string;
  url: string;
  explanation: string;
}

export default function NasaImagePage() {
  const router = useRouter();
  const { slug } = router.query;

  const [image, setImage] = useState<NasaImage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    async function fetchImage() {
      try {
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=uak2hWXk9EoxwYJxtUnDZYBfGq1lyXJE2sOXq9lC&date=${slug}`);
        
        // Verificando se a resposta foi bem-sucedida
        if (!res.ok) {
          throw new Error('Erro ao buscar a imagem');
        }

        const data = await res.json();
        setImage(data);
      } catch (error) {
        setError('Erro ao carregar imagem');
      } finally {
        setLoading(false);
      }
    }

    fetchImage();
  }, [slug]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!image) return <p>Imagem não encontrada</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{image.title}</h1>
      <img src={image.url} alt={image.title} className="mx-auto mb-4 w-full max-w-xl" />
      <p>{image.explanation}</p>
      <p>
        <a href="/nasa-images" className="text-blue-500 hover:underline">
          Voltar para as Imagens da NASA
        </a>
      </p>
    </div>
  );
}
