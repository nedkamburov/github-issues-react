import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

class Comments extends React.Component {
    constructor(props) {
        super(props)
        this.commentsData = props.commentsData;
    }
    render() {
        let comments;
        comments = this.commentsData.map((comment) => {
            let createdAt = comment.created_at.slice(0, 10);
            return <div key={comment.id} className='comment'>
                <p className='comment-meta'><span>{comment.user.login}</span><span>{createdAt}</span></p>
                <div className='comment-body'> <ReactMarkdown plugins={[gfm]} children={comment.body} /></div>
            </div>
        });

        return (
            <div className='comments-data'>
                { comments}
            </div >
        )
    }
}

export default Comments;