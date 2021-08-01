import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Head from "next/head";
import Footer from "../components/Footer";
import Image from "next/image";
import ucImage from "../assets/images/underconstruction.gif";
export default class Guestbook extends React.Component<{}> {

    render() {
        return (
            <div className="page">

               <Head>
                    <title>Jos Koomen</title>
                    <meta property="og:locale" content="en"/>
                    <meta name="title" content="Jos Koomen | Guestbook" property="og:title"/>
                    <meta name="description"
                          content="Jos Koomen is motivator and Lead Developer. As a development team trainer and motivator i work intensely with development teams"
                          property="og:description"/>
                    <meta content="" property="og:url"/>
                    <meta property="og:site_name" content="Jos Koomen"/>
                    <link rel="icon" href="../assets/favicon.ico"/>
                </Head>

                <Header subtitle="Guestbook"/>

                <main>
                    <Menu/>
                    <figure>
                        <Image
                            src={ucImage}
                            alt="Page is under Construction"
                            title="Work in Progress"
                            width={200}
                            />
                    </figure>
                </main>
                <Footer/>
            </div>
        );
    }
}
