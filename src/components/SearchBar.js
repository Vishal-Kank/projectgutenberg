import React, { Component } from 'react';
import { searchBook } from '../actions/searchAction';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import left from '../sym/left.png';
import search from '../sym/search.png';

class SearchBar extends Component {
    onChange = e => {
        this.props.searchBook(e.target.value);
    }
    render() {
        return (
            <div className="main">
                <div className="container">
                    <form className="form-group py-3" >
                        <div className="input-group mb-3">
                            <Link to="/">
                                <img src={left} alt='Back' className="my-auto text-light pr-2" />
                            </Link>
                            <div className="input-group-prepend ">
                                <img src={search} alt='search' className="search" />
                            </div>
                            <input
                                type="search"
                                onChange={this.onChange}
                                className="my-auto text-light form-control"
                            />
                            {/*<p className="my-auto text-light">Cancel</p>*/}
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default connect(null, { searchBook })(SearchBar);