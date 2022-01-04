import React, {Component, ReactNode} from "react";
import Link from 'next/link'
import Image from 'next/image';

import cssImage from '../assets/images//banners/vcss.gif';
import bestViewImage from '../assets/images//banners/bestview.gif';
import macMadeImage from '../assets/images//banners/macmade-wht.gif';
import sendThisImage from '../assets/images//banners/send_this_page.gif';
import emailImage from '../assets/images//banners/email-icon.gif';
import nukeIEImage from '../assets/images//banners/nukeieani.gif';
import miauwImage from '../assets/images//banners/miauw.gif';
import pikachuImage from '../assets/images//banners/pikachu.gif';
import styles from "../styles/components/Footer.module.css";

export default class Footer extends Component<{}> {


    render(): ReactNode {
        return (
            <footer className={styles.footer}>
                <Link href="/"><a>Jos Koomen</a></Link>&lsquo;s site - Copyright &copy; 1980 - 2022<br/>
                All images, trademarks, and copyrights are property of their respective owners.<br/><br/>
                <a className={styles.footerImage} href="http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjoskoo.men&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en"
                   target="_blank" rel="noreferrer">
                        <Image
                            src={cssImage}
                            alt="Made with Cascading Style Sheets"
                            title="Made with Cascading Style Sheets"
                            loading="lazy"
                            width={88}
                            height={31}
                            unoptimized={true}
                        />
                </a>
                 <a className={styles.footerImage} href="http://www.anybrowser.org/campaign/"
                    target="_blank" rel="noreferrer">
                        <Image
                            src={bestViewImage}
                            alt="Best viewed"
                            title="Best viewed"
                            loading="lazy"
                            width={88}
                            height={31}
                            unoptimized={true}
                        />
                </a>
                <Image
                    src={macMadeImage}
                    alt="Made on a Mac"
                    title="Made on a Mac"
                    loading="lazy"
                    width={88}
                    height={31}
                    className={styles.footerImage}
                    unoptimized={true}
                />
                <a className={styles.footerImage} href="https://www.addtoany.com/share"
                   target="_blank" rel="noreferrer">
                        <Image
                            src={sendThisImage}
                            alt="Send it"
                            title="Send it"
                            loading="lazy"
                            width={88}
                            height={31}
                            unoptimized={true}
                        />
                </a>
                <Image
                    src={pikachuImage}
                    alt="Pokemon"
                    title="Pokemon"
                    loading="lazy"
                    className={styles.footerImage}
                    width={88}
                    height={31}
                    unoptimized={true}
                />
                <a className={styles.footerImage} href="mailto:hello@joskoo.men"
                   target="_blank" rel="noreferrer">
                        <Image
                            src={emailImage}
                            alt="E-mail me"
                            title="E-mail me"
                            loading="lazy"
                            width={88}
                            height={31}
                            unoptimized={true}
                        />
                </a>
                <Image
                    src={nukeIEImage}
                    alt="Nuke Internet Explorer"
                    title="Nuke Internet Explorer"
                    loading="lazy"
                    className={styles.footerImage}
                    width={88}
                    height={31}
                    unoptimized={true}
                />
                <Image
                    src={miauwImage}
                    alt="I love animals"
                    title="Miauw"
                    loading="lazy"
                    className={styles.footerImage}
                    width={88}
                    height={31}
                    unoptimized={true}
                />
            </footer>
        )
    }
}
