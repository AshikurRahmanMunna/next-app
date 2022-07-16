import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Head from 'next/head';

const Error = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [router]);
    return (
        <>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <Navbar />
            <div id='notfound'>
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>We are sorry, page not found!</h2>
                    <p>The page you are looking for might have been removed, had its name changed or temporarily unavailable</p>
                    <a style={{ cursor: 'pointer' }} onClick={() => router.push('/')}>Home</a>
                </div>
            </div>
        </>
    );
};

export default Error;