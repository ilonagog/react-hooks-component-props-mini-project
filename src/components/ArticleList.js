//import userEvent from '@testing-library/user-event';
import React from 'react'
import Article from './Article'
//import blogData from '../data/blog';
//import posts from "../data/blog";



function ArticleList({ posts }) {
    // console.log({ posts })
    let articles = posts.map(function (post) {
        // console.log("post", post)
        return < Article title={post.title} date={post.date} preview={post.preview} />
    })
    // console.log("articles", articles)
    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList;