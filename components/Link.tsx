import React, {Component, ReactNode} from "react";
import Image from 'next/image';
import styles from '../styles/components/Link.module.css'

type LinkProps = {
    title: string,
    href: string,
    img: any,
    image_alt: string,
    width: number,
    height: number,
    text: string
}

export default class Link extends Component<LinkProps> {

    static defaultProps = {
        title: '',
        href: '',
        img: '',
        image_alt: '',
        text: '',
        width: 150,
        height: 150
    }


    render(): ReactNode {
        return (
            <figure className={styles.link}>
                <a href={this.props.href} target="_blank" rel="noopener noreferrer">
                    <div>
                        <Image
                            src={this.props.img}
                            alt={this.props.image_alt}
                            width={this.props.width}
                            height={this.props.height}
                            loading="lazy"
                        />
                    </div>
                </a>
                <figcaption>
                    <p>
                        <a href={this.props.href} target="_blank" rel="noopener noreferrer">{this.props.text}</a>
                    </p>
                </figcaption>
            </figure>
        )
    }
}
