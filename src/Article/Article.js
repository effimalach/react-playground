import React from 'react';
import CommentList from './CommentList/CommentList'

export default function Article(props) {
    return (
        <div>
            <p>{props.title}</p>{props.content}
            <CommentList />
        </div>
    )
}
