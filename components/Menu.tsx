import React, {Component, ReactNode} from "react";
import styles from '../styles/components/Menu.module.css'
import Link from 'next/link'

export default class Menu extends Component<{}> {

    render(): ReactNode {
        return (
            <nav className={styles.mainNav}>
               <div className={styles.inner}>
                 <h2>Navigation</h2>
                 <ul>
                     <li><Link href="/"><a>Home</a></Link></li>
                     <li><Link href="/about.html"><a>About me</a></Link></li>
                     <li><Link href="/links.html"><a>Links</a></Link></li>
                     <li><Link href="/guestbook.html"><a>Guestbook</a></Link></li>
                 </ul>
               </div>
             </nav>
        )
    }
}
