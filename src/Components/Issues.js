import React from 'react';
import Issue from './Issue';

class Issues extends React.Component {

    render() {
        let issues = []
        try {
            issues = this.props.issues.map((issue) => (
                <Issue key={issue.id} issue={issue} />
            ));
        } catch {
            return <p className='invalid-message'>Invalid name of a user or repository</p>;
        }

        return (
            <div className='issues'>
                {issues}
            </div>
        )
    }
}

export default Issues;