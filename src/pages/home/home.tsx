import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-100">
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
          <h2 className="text-2xl font-bold mb-4">Worlds in a Collision: Uma Jornada por Catástrofes Cósmicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Image
                src="/img/img.world2.jpg"
                alt="Capa do livro Worlds in a Collision"
                width={640}
                height={640}
                className="rounded-md shadow-md"
              />
            </div>
            <div>
              <p className="mb-4">
                Em "Worlds in a Collision", Immanuel Velikovsky apresenta uma teoria revolucionária e controversa sobre a história da Terra e do sistema solar.
                Segundo o autor, eventos catastróficos, como colisões entre planetas e encontros próximos com cometas, moldaram o nosso mundo de maneira drástica
                em um passado relativamente recente.
              </p>
              <p className="mb-4">
                Através da análise de textos antigos, mitos e evidências geológicas, Velikovsky argumenta que Vênus, originalmente um cometa,
                foi expelido de Júpiter e causou caos no sistema solar, impactando a Terra e Marte em diferentes momentos.
                Esses eventos teriam provocado cataclismos como inundações, terremotos, erupções vulcânicas e mudanças no eixo de rotação da Terra.
              </p>
              <p>
                Explore este site para conhecer mais sobre a vida e obra de Immanuel Velikovsky, mergulhar nos cálculos e simulações que sustentam sua teoria
                e se maravilhar com imagens impressionantes da NASA que ilustram a grandiosidade e o poder do cosmos.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <p className="text-white text-center">Copyright &copy; 2024</p>
        </div>
      </footer>
    </div>
  );
}