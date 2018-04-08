import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            term: ''
        }

        // this which is an instance of SearchBar has a function called onInputChange
        // bind that function to this (which is SearchBar) and then replace
        // onInputChange with this new bind instance of this function
        // or take the existing function, bind it to this and then replace the existing
        // function with this
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(event) {
        this.setState({term: event.target.value})
    }

    render() {
        return (
            <form className="input-group">
                <input 
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}