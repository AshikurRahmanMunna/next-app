import Navbar from "../../components/Navbar";
import { useRouter } from 'next/router';
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
        props: { data }
    }
}

const Index = ({ data }) => {
    const router = useRouter();
    return (
        <div style={{ background: '#f1f1f1' }}>
            <Navbar />
            <div>
                {
                    data.map(d => <div className="blog" key={d.id}>
                        <div className="blog-number">
                            <h3>{d.id}</h3>
                        </div>
                        <Link href={`/blogs/${d.id}`}>
                            <h3 className="blog-text">{d.title}</h3>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Index;