import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
        // To bind the context of this(Searchbar) to on InputChange
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }
    render() {
        return (
            <form className="input-group">
                <input
                    placeholder="Get a five-day forecast inyour favourite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    };
}