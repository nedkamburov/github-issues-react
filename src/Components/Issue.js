import React from 'react';
import Comments from './Comments';
import Loader from './Loader';

class Issue extends React.Component {
    constructor(props) {
        super(props)
        this.title = props.issue.title;
        this.assignee = this.props.issue.assignee;
        this.numComments = this.props.issue.comments;
        this.commentsURL = this.props.issue.comments_url;
        this.getComments = this.getComments.bind(this);
        this.hideComments = this.hideComments.bind(this);
        this.state = { commentsData: [], showComments: false };
    }

    getComments() {
        this.setState({ loading: true });
        fetch(this.commentsURL)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ commentsData: data, showComments: true });
                this.setState({ loading: false });
            });
    }

    hideComments() {
        this.setState({ showComments: false });
    }

    render() {
        const commentsData = this.state.commentsData;
        let comments;
        let commentsButton;

        if (commentsData.length > 0 && this.state.showComments) {
            commentsButton = <button onClick={this.hideComments}>Hide Comments</button>
            comments = <Comments commentsData={this.state.commentsData} />;
        } else {
            commentsButton = <button onClick={this.getComments}> Get Comments</button >
            comments = '';
        }

        return (
            <div className='issue' >
                <div className='issue-data'>
                    <h4 onClick={this.handleComments}>{this.title}</h4>
                    {this.assignee ? <p className='assignee'>Assignee: {this.assignee.login}</p> : ''}
                    {this.numComments > 0 ? <div className='info-comments'><span className="num-comments">Comments: {this.numComments}</span>{commentsButton}{this.state.loading ? <Loader /> : ''}</div> : ''}
                </div>
                { comments}
            </div >
        )
    }
}

export default Issue;