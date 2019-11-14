import React, { Component } from 'react'
import SearchBar from '../SearchBar';
import BooksContainer from '../BooksContainer';
import { category } from '../../actions/searchAction';
import { connect } from 'react-redux';

class Humor extends Component {

    componentDidMount = () => {
        this.props.category('Humor')
    }

    render() {
        return (
            <div>
                <SearchBar />
                <div className="container">
                    <h1>Humor</h1>
                    <BooksContainer />
                </div>
            </div>
        )
    }
}

export default connect(null, { category })(Humor);