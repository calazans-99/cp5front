import { useEffect, useState } from 'react';

// Definindo a interface para os dados da API da NASA
interface NasaImage {
    title: string;
    url: string;
    explanation: string; // Adicionando mais detalhes, como explicação
}

export default function NasaImages() {
    const [images, setImages] = useState<NasaImage[]>([]); // Estado para armazenar as imagens
    const [loading, setLoading] = useState(true); // Estado para controle de carregamento
    const [error, setError] = useState<string | null>(null); // Estado para armazenar erros

    useEffect(() => {
        async function fetchData() {
            try {
                // Fazendo a requisição para a API da NASA
                const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=uak2hWXk9EoxwYJxtUnDZYBfGq1lyXJE2sOXq9lC');
                const data = await res.json();

                // Aqui você usa o setImages para atualizar o estado com os dados retornados da API
                setImages([data]); // Se a API retornar uma lista de imagens, remova os colchetes

            } catch (error) {
                // Em caso de erro, o estado de erro será atualizado
                setError('Falha ao carregar dados da NASA');
                console.error('Erro ao buscar dados da NASA:', error);
            } finally {
                // Finalizando o estado de carregamento
                setLoading(false);
            }
        }

        // Executando a função de busca dos dados
        fetchData();
    }, []); // O array vazio [] significa que o useEffect só executa uma vez após o componente ser montado

    // Verificando o estado de carregamento e erro
    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    // Renderizando as imagens retornadas pela API
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
