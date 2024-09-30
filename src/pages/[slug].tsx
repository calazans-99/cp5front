
import { useRouter } from 'next/router';

export default function SlugPage() {
    const router = useRouter();
    const { slug } = router.query;

    return <p>Você acessou: {slug}</p>;
}
