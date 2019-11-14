import React, { Component } from 'react'

export class BookCard extends Component {
    render() {
        let { authors, formats, title } = this.props;

        return (
            <div>
                <div className="col-md-3 mb-5">
                    <div className="card card-body bg-dark text-center h-100">
                        <img className="w-100 mb-2" src={formats['image/jpeg']} alt="Book Cover" />
                        <h5 className="text-light card-title">
                            {title}
                        </h5>
                        <p>
                            {authors.map(({ name }) => name)}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookCard;
