import React from "react";

class SearchBar extends React.Component {
    state = { input: '' }

    onInputChange = (event) => {
        this.setState({ input: event.target.value })
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.input)
        // TODO: make sure we call 
        // callback from parent component
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Weird video searcher</label>
                        <input 
                        type="text" 
                        value={this.state.input} 
                        onChange={this.onInputChange}
                        placeholder="What do you wanna see today?"
                        />
                    </div>
                </form>
            </div>
        );
    }
};

export default SearchBar;