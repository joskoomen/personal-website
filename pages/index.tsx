import React from "react";
import styles from '../styles/pages/Home.module.css'
import Header from "../components/Header";
import Menu from "../components/Menu";
import Post from "../components/Post";
import Head from "next/head";
import Footer from "../components/Footer";

export default class Home extends React.Component<{}> {

    render() {
        return (
            <div className="page">

               <Head>
                    <title>Jos Koomen</title>
                    <meta property="og:locale" content="en"/>
                    <meta name="title" content="Jos Koomen" property="og:title"/>
                    <meta name="description"
                          content="Jos Koomen is motivator and Lead Developer. As a development team trainer and motivator i work intensely with development teams"
                          property="og:description"/>
                    <meta content="" property="og:url"/>
                    <meta property="og:site_name" content="Jos Koomen"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <Header/>

                <main>
                    <Menu/>
                    <div className={styles.content}>
                        <div className={styles.info}><p>Welcome to the&nbsp;
                            <strong>awesome new</strong>&nbsp;home page of&nbsp;
                            <em>Jos Koomen! Creative Web Architect, Lead Developer &amp; Motivator</em></p>
                        </div>
                    </div>

                    <Post
                        title="I'm back!!"
                        date="07 July, 2021"
                        content="<p>The fancy layout for this website needed an update. It's 2021 and it needed a <em>modern look</em>. <strong>So here it is!</strong></p> <p>Also my old site was hacked! I think it was Kim Yung Un. But it's save now!</p>"
                    />
                </main>
                <Footer/>
            </div>
        );
    }
}
