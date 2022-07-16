import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Navbar from '../../components/Navbar';

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const data = await res.json();
    const paths = data.map(d => {
        return {
            params: {
                pageNo: d.id.toString()
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const id = params.pageNo;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return {
        props: { data }
    }
}

const PageNo = ({ data }) => {
    return (
        <div>
            <Head>
                <title>{data.title}</title>
            </Head>
            <Navbar />
            <div className="blog details">
                <div className='top'>
                    <div className="blog-number">
                        <h3>{data.id}</h3>
                    </div>
                    <div className='blog-text'>
                        <h3>{data.title}</h3>
                    </div>
                </div>
                <p>{data.body}</p>
            </div>
        </div>
    );
};

export default PageNo;