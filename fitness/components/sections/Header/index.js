import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/logo.png';

const Header = ({ isLoggedIn }) => {
    const router = useRouter();
    const { asPath } = router;

    const checkActive = (path) => {
        return asPath === path ? 'selected' : '';
    };

    return (
        <header id='header' className="header header-1 header_tran">
            <div className="nav-wrap">
                <div className="reletiv_box">
                    <div className="container-fluid">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-2">
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <Image src={logo} alt="logo"/>
                                        </a>
                                    </Link>
                                </div>
                                <button id="menu" className="menu hidden-md-up"></button>
                            </div>
                            <div className="col-md-10 nav-bg">
                                <nav className="navigation">
                                    <ul>
                                        <li className={checkActive('/')}>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li className={checkActive('/about')}>
                                            <Link href="#">About us</Link>
                                        </li>
                                        <li className={checkActive('/testimonial')}>
                                            <Link href="#">Testimonial</Link>
                                        </li>
                                        <li className={checkActive('/contact')}>
                                            <Link href="#">Contact</Link>
                                        </li>
                                        {isLoggedIn ? (
                                            <li className="no_login_btn blank_btn">
                                                <Link href="#">
                                                    <a className="signup">Logout</a>
                                                </Link>
                                            </li>
                                        ) : (
                                            <>
                                                {asPath !== '/login' && (
                                                    <li className="login_btn">
                                                        <Link href="#">
                                                            <a className="login">Login</a>
                                                        </Link>
                                                    </li>
                                                )}
                                                {asPath !== '/register' && (
                                                    <li>
                                                        <Link href="#">
                                                            <a className="signup">Sign up</a>
                                                        </Link>
                                                    </li>
                                                )}
                                            </>
                                        )}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;