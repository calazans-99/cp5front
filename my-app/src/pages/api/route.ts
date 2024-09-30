import { NextApiRequest, NextApiResponse } from 'next';

// Função handler para lidar com a requisição
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Fazendo a requisição para a API da NASA
      const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=uak2hWXk9EoxwYJxtUnDZYBfGq1lyXJE2sOXq9lC&count=12');
      
      // Verifica se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error(`Erro na API da NASA: ${response.statusText}`);
      }

      const data = await response.json();

      // Retornando os dados ao cliente
      res.status(200).json(data);
    } catch (error) {
      // Tratamento de erros
      console.error('Erro ao buscar dados da API da NASA:', error);
      res.status(500).json({ error: 'Erro ao buscar dados da API da NASA' });
    }
  } else {
    // Método não permitido
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
