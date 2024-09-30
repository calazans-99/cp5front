import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header className="flex justify-end space-x-4 p-4 bg-gray-800 text-white">
        <Link href="/" className="transition-[0.25s] hover:text-[#0099ff]">Página Inicial</Link>
        <Link href="/about" className="transition-[0.25s] hover:text-[#0099ff]">Sobre</Link>
        <Link href="/calculation" className="transition-[0.25s] hover:text-[#0099ff]">Cálculo</Link>
        <Link href="/nasa-images" className="transition-[0.25s] hover:text-[#0099ff]">Imagens da NASA</Link>
      </header>

      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Immanuel Velikovsky</h1>
        <p className="mb-8">
          Immanuel Velikovsky, um polêmico psicanalista e historiador, ganhou notoriedade mundial com sua obra "Worlds in Collision" (Mundos em Colisão), publicada em 1950. Neste livro, Velikovsky propõe uma nova perspectiva sobre a história da Terra e da humanidade, afirmando que eventos cataclísmicos ocorreram em um passado recente, moldando não apenas o nosso planeta, mas também a trajetória das civilizações.
        </p>
        <Image src="/assets/worlds.png" alt="Worlds in Collision" className='mb-8' width={300} height={100}/>
        <p className="mb-8">
          Velikovsky argumenta que a mitologia e as tradições de várias culturas contêm vestígios de eventos astronômicos significativos. Ele sugere que Vênus, em sua juventude, teria sido ejetada do sistema solar de Júpiter e, posteriormente, teria colidido ou passado próximo à Terra, causando catástrofes naturais e influenciando a história humana. Esta hipótese contrasta fortemente com a visão científica convencional sobre a formação do sistema solar e os eventos geológicos na Terra.
        </p>
        <p className="mb-8">
          O livro combina astronomia, história, arqueologia e mitologia, propondo que as narrativas antigas de deuses e heróis estão, de fato, enraizadas em experiências coletivas de desastres. Embora "Worlds in Collision" tenha sido amplamente criticado e rejeitado pela comunidade científica, sua influência perdurou, inspirando debates sobre a intersecção entre ciência, história e a interpretação da mitologia. O estilo acessível de Velikovsky e sua audácia em desafiar o status quo fizeram de seu livro um best-seller, atraindo tanto admiradores quanto detratores.
        </p>
        <p className="mb-8">
          Além de "Worlds in Collision", Velikovsky continuou a desenvolver suas ideias em obras subsequentes, mas nenhuma alcançou a mesma notoriedade. O impacto de "Worlds in Collision" é inegável, pois provocou discussões sobre a forma como entendemos a história da Terra e nosso lugar no cosmos, levantando questões que ainda ressoam em debates contemporâneos sobre ciência e mito.
        </p>
        <div className="mt-8">
          <Link href="/about" className="text-blue-500 hover:underline">
            Saiba mais sobre Velikovsky
          </Link>
        </div>
      </div>
    </div>
  );
}
