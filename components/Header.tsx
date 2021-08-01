import React, {Component, ReactNode} from "react";
import styles from '../styles/components/Header.module.css'
import Link from 'next/link'

type HeaderProps = {
    title: string,
    subtitle: string,
}

export default class Header extends Component<HeaderProps> {

    static defaultProps = {
        title: 'Jos Koomen\'s site!',
        subtitle: 'Jos Koomen',
    }

    render(): ReactNode {
        return (
            <header className={styles.header}>
              <Link href="/"><a><h1>{this.props.title}</h1></a></Link>
              <h2>{this.props.subtitle}</h2>
            </header>
        )
    }
}
