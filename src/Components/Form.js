import React from 'react';
import Loader from './Loader';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', repo: '', loading: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.name === 'username') {
            this.setState({ username: event.target.value });
        }
        else if (event.target.name === 'repo') {
            this.setState({ repo: event.target.value });
        }
    }

    handleSubmit(event) {
        this.setState({ loading: true });
        event.preventDefault();
        const apiUrl = `https://api.github.com/repos/${this.state.username}/${this.state.repo}/issues`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                this.props.getIssuesData(data);
                this.setState({ loading: false });
            }).catch((e) => console.log('Something went wrong', e));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2 className='title'>Access a list of issues from a specific GitHub Repository</h2>
                <label htmlFor="username">Username:</label>
                <input type="text" value={this.state.username} onChange={this.handleChange} id="username" name="username" placeholder="e.g. facebook"></input>
                <label htmlFor="repo">Repository:</label>
                <input type="text" value={this.state.repo} onChange={this.handleChange} id="repo" name="repo" placeholder="e.g. react"></input>
                <input type="submit" value="Submit"></input>
                {this.state.loading ? <Loader /> : ''}
            </form>
        );
    }
}

export default Form; 