import React from 'react'
import Comment from './comments/Comment.js'

export default function CommentList() {
    return (
        <div>
            <Comment content={"content 1"} author={"bill gates"}/>
            <Comment content={"content 2"} author={"mark zuckerberg"}/>
            <Comment content={"content 3"} author={"moshe levi"}/>
        </div>
    )
}

