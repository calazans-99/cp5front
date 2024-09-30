import Image from 'next/image';
export default function NotFound() {
    return (
        <div>
            <h1>Página não encontrada</h1>
            <Image src="/erro.png" alt="Erro" width={500} height={300} />
        </div>
    );
}
