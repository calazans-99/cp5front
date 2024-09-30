import { useEffect, useState } from 'react';

// Definindo a interface para os dados da API da NASA
interface NasaImage {
    title: string;
    url: string;
    explanation: string; // Adicionando mais detalhes, como explicação
}

export default function NasaImages() {
    const [images, setImages] = useState<NasaImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=uak2hWXk9EoxwYJxtUnDZYBfGq1lyXJE2sOXq9lC');
                const data = await res.json();
                setImages([data]); // Se a API retornar uma lista, remova os colchetes
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {images.map((image, index) => (
                <div key={index} className="text-center">
                    <h1 className="text-xl font-bold mb-4">{image.title}</h1>
                    <img src={image.url} alt={image.title} className="mx-auto mb-4" />
                    <p>{image.explanation}</p>
                </div>
            ))}
        </div>
    );
}
