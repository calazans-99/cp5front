import Link from 'next/link';

export default function Biografia() {
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
          <h2 className="text-2xl font-bold mb-4">Sobre o Autor e o Livro</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Biografia do Autor</h3>
              {/* Conteúdo da biografia do autor */}
              <p>
                Immanuel Velikovsky (1895-1979) foi um psiquiatra e psicanalista russo que se tornou conhecido por suas teorias 
                não convencionais sobre a história antiga. Nascido em Vitebsk, Bielorrússia, Velikovsky estudou história, 
                filosofia e medicina em Moscou antes de se mudar para a Palestina em 1921, onde ajudou a fundar a Universidade Hebraica de Jerusalém.
              </p>
              <p>
                Em 1939, Velikovsky emigrou para os Estados Unidos, onde começou a pesquisar e escrever sobre suas teorias 
                de catástrofes cósmicas. Seu livro mais famoso, "Worlds in Collision" (1950), propôs que eventos 
                catastróficos como colisões entre planetas e encontros próximos com cometas moldaram a história da Terra 
                e do sistema solar em um passado relativamente recente.
              </p>
              {/* Adicione mais informações sobre a biografia do autor aqui */}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Resumo do Livro</h3>
              {/* Conteúdo do resumo do livro */}
              <p>
                "Worlds in Collision" apresenta uma teoria controversa que desafia as visões tradicionais da história 
                e da astronomia. Velikovsky argumenta que Vênus, originalmente um cometa, foi expelido de Júpiter 
                e causou caos no sistema solar, impactando a Terra e Marte em diferentes momentos.
              </p>
              <p>
                Esses eventos teriam causado cataclismos globais, como inundações, terremotos, erupções vulcânicas 
                e mudanças no eixo de rotação da Terra. Velikovsky sustenta suas afirmações com base em textos 
                antigos, mitos e lendas de diversas culturas, interpretando-os como registros de testemunhas oculares 
                desses eventos cósmicos.
              </p>
              {/* Adicione mais informações sobre o resumo do livro aqui */}
            </div>
          </div>
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