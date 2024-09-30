import Link from 'next/link';

export default function About() {
  return (
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
      <div className="mt-8">
        <Link href="/calculation" className="text-blue-500 hover:underline">
          Veja um cálculo baseado nas ideias de Velikovsky
        </Link>
      </div>
      <div className="mt-4">
        <Link href="/" className="text-blue-500 hover:underline">
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}
