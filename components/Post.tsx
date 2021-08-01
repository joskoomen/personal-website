import React, {Component, ReactNode} from "react";
import styles from '../styles/components/Post.module.css'

type PostProps = {
    title: string,
    title_img: string,
    date: string,
    content: string,
    sig: string
}

export default class Post extends Component<PostProps> {

    static defaultProps = {
        title: '',
        title_img: '',
        date: '',
        content: '',
        sig: 'Jos'
    }

    setContent(html: string): { __html: string } {
        return {__html: html};
    }

    getTitle(): { __html: string } {
        if (this.props.title_img === '') {
            return {__html: this.props.title};
        }
        return {__html: this.props.title + '<img src="' + this.props.title_img + '" width="80" height="80">'};
    }

    render(): ReactNode {
        return (
            <article className={styles.post}>
                <h2 dangerouslySetInnerHTML={this.getTitle()}/>
                <p className={styles.date}>{this.props.date}</p>
                <div dangerouslySetInnerHTML={this.setContent(this.props.content)}/>
                <p className={styles.sig}>{this.props.sig}</p>
            </article>
        )
    }
}
