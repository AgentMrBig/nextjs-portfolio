import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import "./Navbar.scss";

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        return (
            <nav>
                <Head><title>Eric Hendrix Full Stack Web Developer</title></Head>
                <div>
                    <Link href="/">
                        <a title="Our API">Home</a>
                    </Link>
                    <Link href="/about">
                        <a title="About Page">About</a>
                    </Link>
                    <mark className="badge">Hello</mark>

                </div>
            </nav>
        )
    }
}

export default Navbar;