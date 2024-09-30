import Link from 'next/link';

export default function Calculos() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 py-4 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-bold">
            Worlds in a Collision
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/home" className="text-white hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/biografia" className="text-white hover:text-gray-300">
                  Biografia e Resumo
                </Link>
              </li>
              <li>
                <Link href="/calculos" className="text-white hover:text-gray-300">
                  Cálculos
                </Link>
              </li>
              <li>
                <Link href="/imagens" className="text-white hover:text-gray-300">
                  Imagens NASA
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Cálculos e Simulações</h2>
          <p>
            Conteúdo sobre cálculos e simulações... Aqui você pode adicionar 
            explicações sobre os cálculos e simulações que foram utilizados 
            para sustentar as teorias de Velikovsky. Se possível, inclua 
            exemplos, gráficos e tabelas para ilustrar os conceitos.
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 py-4 mt-auto">
        <div className="container mx-auto px-4">
          <p className="text-white text-center">Copyright &copy; 2024</p>
        </div>
      </footer>
    </div>
  );
}