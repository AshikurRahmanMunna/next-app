import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className="menu-bar">
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blogs">
                            <a>Blogs</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/products">
                            <a>Product</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;