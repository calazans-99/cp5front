import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Interface para o conteúdo da imagem
interface NasaImage {
  title: string;
  url: string;
  explanation: string;
}

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<NasaImage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    async function fetchPost() {
      try {
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=uak2hWXk9EoxwYJxtUnDZYBfGq1lyXJE2sOXq9lC=${slug}`);
        const data = await res.json();
        setPost(data); // Atualiza o estado com os dados da imagem
      } catch (error) {
        setError('Falha ao carregar o post');
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!post) {
    return <p>Post não encontrado</p>;
  }

  return (
    <div className="text-center p-8">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <img src={post.url} alt={post.title} className="mx-auto mb-4 w-full max-w-xl" />
      <p>{post.explanation}</p>
    </div>
  );
}
