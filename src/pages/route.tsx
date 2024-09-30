import { useEffect, useState } from 'react';

// Definindo a interface para os dados da API da NASA
interface NasaImage {
    title: string;
    url: string;
}

export default function NasaImages() {
    // Tipando o estado como um array de NasaImage
    const [images, setImages] = useState<NasaImage[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY');
                const data = await res.json();
                setImages([data]); // Atualiza o estado com os dados da API
            } catch (error) {
                console.error('Erro ao buscar dados da NASA:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {images.map((image, index) => (
                <div key={index}>
                    <h1>{image.title}</h1>
                    <img src={image.url} alt={image.title} />
                </div>
            ))}
        </div>
    );
}
