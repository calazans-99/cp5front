import { NextResponse } from 'next/server';

// Função handler para lidar com a requisição
export async function GET() {
  try {
    // Fazendo a requisição para a API da NASA
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=uak2hWXk9EoxwYJxtUnDZYBfGq1lyXJE2sOXq9lC&count=12');

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro na API da NASA: ${response.statusText}`);
    }

    const data = await response.json();

    // Retornando os dados ao cliente
    return NextResponse.json(data);
  } catch (error) {
    // Tratamento de erros
    console.error('Erro ao buscar dados da API da NASA:', error);
    return NextResponse.json({ error: 'Erro ao buscar dados da API da NASA' }, { status: 500 });
  }
}
