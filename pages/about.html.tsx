import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Head from "next/head";
import Footer from "../components/Footer";
import Image from "next/image";
import pugImage from "../assets/images/pug.gif";
import styles from "../styles/pages/About.module.css";

export default class About extends React.Component<{}> {

    render() {
        return (
            <div className="page">

               <Head>
                    <title>Jos Koomen</title>
                    <meta property="og:locale" content="en"/>
                    <meta name="title" content="Jos Koomen | About me" property="og:title"/>
                    <meta name="description"
                          content="Jos Koomen is motivator and Lead Developer. As a development team trainer and motivator i work intensely with development teams"
                          property="og:description"/>
                    <meta content="" property="og:url"/>
                    <meta property="og:site_name" content="Jos Koomen"/>
                    <link rel="icon" href="../assets/favicon.ico"/>
                </Head>

                <Header subtitle="About me"/>

                <main>
                    <Menu/>
                    <p>I&lsquo;m Jos, born in the 80&lsquo;s and web developer with <strong>20 years of experience</strong>.</p>
                    <p>I&lsquo;m living the <a href="http://www.dwotd.nl/2012/04/1009-huisje-boompje-beestje.html"
                                               target="_blank" rel="noreferrer"><em>Huisje, boompje, beestje</em></a> life<strong>!</strong> I&lsquo;m the father of 3 (Stijn, Fenne &amp; Hugo) and am a Pug fanatic.</p>
                    <div className={styles.image}>
                        <Image
                            src={pugImage}
                            alt="Pug"
                            title="I <3 Pugs"
                            loading="lazy"
                            width={300}
                            height={300}
                            unoptimized={true}
                        />
                    </div>
                    <p>I&lsquo;ve had the honour to work with and at top notch agencies in the Netherlands like&nbsp;
                        <em>Mediamonks</em>,&nbsp;<em>Dept</em>&nbsp;and&nbsp;<em>LBi</em>.</p><p>After freelancing for 10 years in which i worked for brands like&nbsp;
                    <em>Nike</em>,&nbsp;<em>Heineken</em>,&nbsp;<em>Audi,</em>&nbsp;<em>ETQ </em>and <strong><em>many more</em></strong>,<em> </em>i&lsquo;ve joined YPA.</p><p>At&nbsp;
                    <a href="https://yourpersonalagency.nl/" target="_blank"
                       rel="noreferrer"><em>YPA</em></a>&nbsp;i&lsquo;m Lead developer, coach &amp; motivator.</p>
                </main>
                <Footer/>
            </div>
        );
    }
}
