"use client"
import Link from 'next/link';
import Image from 'next/image'; // Importe o componente Image

export default function About() {
  return (
    <div>
      <header className="flex justify-end space-x-4 p-4 bg-gray-800 text-white">
        <Link href="/" className="transition-[0.25s] hover:text-[#0099ff]">Página Inicial</Link>
        <Link href="/About" className="transition-[0.25s] hover:text-[#0099ff]">Sobre</Link>
        <Link href="/Calculation" className="transition-[0.25s] hover:text-[#0099ff]">Cálculo</Link>
        <Link href="/NasaImages" className="transition-[0.25s] hover:text-[#0099ff]">Imagens da NASA</Link>
      </header>

      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Sobre Immanuel Velikovsky</h1>
        <Image 
          src="/assets/velikovsky.png" className='mb-8' alt="Immanuel Velikovsky" width={300} height={100} />
        <p className="mb-8">
          Immanuel Velikovsky nasceu em 10 de junho de 1895, em Vitebsk, na atual Bielorrússia, que na época fazia parte do Império Russo. Ele foi criado em uma família judia, onde recebeu uma educação rica e diversificada. Velikovsky estudou medicina na Universidade de Moscovo e, durante a Revolução Russa, fugiu para a Palestina, onde se formou e começou a trabalhar como psicanalista.
        </p>
        <p className="mb-8">
          Em 1939, Velikovsky emigrou para os Estados Unidos, onde começou a desenvolver suas teorias sobre catástrofes e sua relação com a história e a mitologia. Ele publicou "Worlds in Collision" em 1950, e o livro rapidamente se tornou um fenômeno cultural, atraindo tanto o interesse popular quanto a controvérsia acadêmica. Apesar de enfrentar resistência considerável da comunidade científica, ele continuou a explorar suas ideias, publicando vários outros trabalhos, incluindo "Ages in Chaos" e "Earth in Upheaval".
        </p>
        <p className="mb-8">
          Velikovsky nunca se considerou um cientista no sentido tradicional; em vez disso, ele via a si mesmo como um pensador interdisciplinar que buscava conectar diferentes campos do conhecimento. Suas teorias foram frequentemente criticadas por falta de rigor científico e por desafiar dogmas estabelecidos. Ele também foi acusado de não usar os métodos científicos convencionais, o que levou a um isolamento em muitos círculos acadêmicos.
        </p>
        <p className="mb-12">
          Immanuel Velikovsky morreu em 17 de agosto de 1979, em Princeton, Nova Jersey. Apesar das críticas, sua obra continua a ser estudada e debatida, e seu legado é uma demonstração de como teorias não convencionais podem provocar discussões importantes sobre a relação entre ciência e crença, história e mito.
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
