import Navbar from "../components/Navbar";
import styles from '../styles/about.module.css';
import Image from 'next/image';
import Head from 'next/head';

const About = () => {
    return (
        <div>
            <Head>
                <title>About Us</title>
            </Head>
            <Navbar />
            <h1 className={styles.heading}>About</h1>
            <Image src="https://cdn.pixabay.com/photo/2016/02/17/15/37/laptop-1205256_960_720.jpg" height="500" width="500" alt="img" objectFit="cover"></Image>
        </div>
    );
};

export default About;