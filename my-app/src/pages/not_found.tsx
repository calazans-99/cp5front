import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center p-8">
      <h1 className="text-2xl font-bold mb-4">Página não encontrada</h1>
      <Image src="/erro.png" alt="Erro" width={500} height={300} />
      <p>
        <Link href="/" className="text-blue-500 hover:underline">
          Voltar para a página inicial
        </Link>
      </p>
    </div>
  );
}
