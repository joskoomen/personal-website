import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Head from "next/head";
import Footer from "../components/Footer";
import Link from "../components/Link";

import styles from '../styles/pages/Links.module.css';
import linkedinGif from '../assets/images/linkedin-panda.gif';
import githubGif from '../assets/images/github-dino.gif';
import beccaGif from '../assets/images/pug.gif';

export default class Links extends React.Component<{}> {

    render() {
        return (
            <div className="page">

               <Head>
                    <title>Jos Koomen</title>
                    <meta property="og:locale" content="en"/>
                    <meta name="title" content="Jos Koomen | Links" property="og:title"/>
                    <meta name="description"
                          content="Jos Koomen is motivator and Lead Developer. As a development team trainer and motivator i work intensely with development teams"
                          property="og:description"/>
                    <meta content="" property="og:url"/>
                    <meta property="og:site_name" content="Jos Koomen"/>
                    <link rel="icon" href="../assets/favicon.ico"/>
                </Head>

                <Header subtitle="Links"/>

                <main>
                    <Menu/>
                    <article className={styles.links}>
                        <Link
                            title="Linkedin"
                            href="https://linkedin.com/in/joskoomen"
                            img={linkedinGif}
                            image_alt="Linkedin"
                            width={300}
                            height={200}
                            text="My LinkedIn Profile!"
                        />
                        <Link
                            title="Github"
                            href="https://github.com/joskoomen"
                            img={githubGif}
                            image_alt="Github"
                            width={200}
                            height={200}
                            text="My Github Profile"
                        />
                        <Link
                            title="BubbleBecca Pugs"
                            href="https://bubblebecca.co.uk"
                            img={beccaGif}
                            image_alt="BubbleBecca"
                            width={200}
                            height={200}
                            text="Support Becca in her wonderfull work"
                        />
                    </article>
                </main>
                <Footer/>
            </div>
        );
    }
}
