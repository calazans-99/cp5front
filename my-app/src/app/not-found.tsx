import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Página Não Encontrada</h1>
      <Image 
        src="/assets/einstein.png"
        alt="Erro - Página não encontrada" 
        width={500} 
        height={300} 
        className="mb-4" 
      />
      <p className="mb-4">
        Desculpe, não conseguimos encontrar a página que você está procurando. Pode ser que a URL esteja incorreta ou que a página tenha sido removida.
      </p>
      <p>
        <Link href="/" className="text-blue-500 hover:underline text-lg">
          Voltar para a página inicial
        </Link>
      </p>
    </div>
  );
}
