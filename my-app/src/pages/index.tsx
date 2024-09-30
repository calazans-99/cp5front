import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header className="flex justify-end space-x-4 p-4 bg-gray-800 text-white">
        <Link href="/" className="hover:underline">Página Inicial</Link>
        <Link href="/about" className="hover:underline">Sobre</Link>
        <Link href="/calculation" className="hover:underline">Cálculo</Link>
        <Link href="/nasa-images" className="hover:underline">Imagens da NASA</Link>
      </header>

      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Immanuel Velikovsky</h1>
        <p className="mb-8">
          Immanuel Velikovsky foi um psiquiatra, escritor e teórico que propôs uma série de teorias controversas sobre 
          a história antiga e catástrofes cósmicas. Seu livro "Worlds in Collision" sugeriu que eventos astronômicos 
          teriam causado mudanças dramáticas na Terra.
        </p>
        <Image src="/thumbnail.png" alt="Immanuel Velikovsky" width={500} height={300} />
        <div className="mt-8">
          <Link href="/about" className="text-blue-500 hover:underline">
            Saiba mais sobre Velikovsky
          </Link>
        </div>
      </div>
    </div>
  );
}
