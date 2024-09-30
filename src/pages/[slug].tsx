import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Interface para o conteúdo do post
interface Post {
    title: string;
    url: string;
    explanation: string;
}

export default function PostPage() {
    const router = useRouter();
    const { slug } = router.query; // Pegando o slug da URL
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) return; // Aguarda até que o slug esteja disponível

        async function fetchPost() {
            try {
                const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=uak2hWXk9EoxwYJxtUnDZYBfGq1lyXJE2sOXq9lC`);
                const data = await res.json();

                // Aqui, por exemplo, você poderia filtrar o post pelo slug
                setPost(data); // Ajuste para o formato correto de retorno da API
            } catch (error) {
                setError('Falha ao carregar o post');
                console.error('Erro ao buscar dados:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchPost();
    }, [slug]); // Executa sempre que o slug mudar

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
            <h1 className="text-xl font-bold mb-4">{post.title}</h1>
            <img src={post.url} alt={post.title} className="mx-auto mb-4" />
            <p>{post.explanation}</p>
        </div>
    );
}
