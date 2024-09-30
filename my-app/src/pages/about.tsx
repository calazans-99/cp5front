import Link from 'next/link';

export default function About() {
  return (
    <div>
      <header className="flex justify-end space-x-4 p-4 bg-gray-800 text-white">
        <Link href="/" className="hover:underline">Página Inicial</Link>
        <Link href="/about" className="hover:underline">Sobre</Link>
        <Link href="/calculation" className="hover:underline">Cálculo</Link>
        <Link href="/nasa-images" className="hover:underline">Imagens da NASA</Link>
      </header>

      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Sobre Immanuel Velikovsky</h1>
        <p className="mb-8">
          Immanuel Velikovsky foi um dos pensadores mais controversos do século XX. Seus livros desafiaram as visões 
          convencionais da história e da ciência, propondo que o sistema solar passou por eventos catastróficos recentes, 
          que teriam impacto na Terra e em outras culturas antigas.
        </p>
        <h2 className="text-2xl font-bold mb-4">Principais Ideias de Velikovsky</h2>
        <ul className="list-disc list-inside">
          <li>Colisões Cósmicas</li>
          <li>Intervenções Divinas Astronômicas</li>
          <li>Memória Cultural Coletiva</li>
        </ul>
      </div>
    </div>
  );
}
