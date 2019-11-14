import React, { Component } from 'react'
import { connect } from 'react-redux';
import { searchBook, fetchBook, fetchurl } from '../actions/searchAction';
//import BookCard from './BookCard';
import close from '../sym/close.png';
import right from '../sym/right.png';
import left from '../sym/left.png';

class BooksContainer extends Component {

    componentDidMount = () => {
        this.props.searchBook('');
        this.props.fetchBook();
    }
    handleClickPrevious = () => {
        console.log('clicked on previous: ' + this.props.previous)
        this.props.fetchurl(this.props.previous)
    }
    handleClickNext = () => {
        console.log('clicked on next: ' + this.props.next)
        this.props.fetchurl(this.props.next)
    }

    render() {
        let text = this.props.text;
        let books = this.props.books;
        let author = '';
        let category = this.props.category.toLowerCase();

        let content = books

        content = books.length > 0 ?
            books.map(({ id, subjects, formats, title, authors, bookshelves }, index) => {
                subjects = subjects.join().toLowerCase();
                author = authors.map(({ name }) => name).join();
                if (!text && subjects.includes(category) === true) {
                    return (<div key={index} className="col-md-3 mb-5" >
                        <div className="card card-body bg-dark text-center h-100">
                            <a href={formats['application/pdf']} target='blank'><img className="w-100 mb-2" src={formats['image/jpeg'] || close} alt="Book Cover" /></a>
                            <h5 className="text-light text-left card-title">
                                {title}
                            </h5>
                            <p className="text-light text-left">
                                {author}
                            </p>
                        </div>
                    </div>)
                }
                if (text) {
                    text = text.toLowerCase()
                    if (subjects.includes(category) && (title.toLowerCase().includes(text) || author.toLowerCase().includes(text) || bookshelves.join().toLowerCase().includes(text) || subjects.includes(text)))
                        //return console.log('Found your book.....=>' + id + ': ' + title + ' / ' + author + ' / ' + bookshelves + ' / ' + subjects);
                        return (<div key={index} className="col-md-3 mb-5" >
                            <div className="card card-body bg-dark text-center h-100">
                                <a href={formats['application/pdf']} target='blank'><img className="w-100 mb-2" src={formats['image/jpeg'] || close} alt="Book Cover" /></a>
                                <h5 className="text-light text-left card-title">
                                    {title}
                                </h5>
                                <p className="text-light text-left">
                                    {author}
                                </p>
                            </div>
                        </div>)
                }
            }
            )
            : null;



        return (
            <div>
                <div className="row">
                    {content}
                </div>
                <div>
                    <div className="d-flex justify-content-between">
                        <img className="bg-dark" src={left} alt="previous" onClick={this.handleClickPrevious} />
                        <img className="bg-dark" src={right} alt="next" onClick={this.handleClickNext} />
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    books: state.books.books,
    next: state.books.next,
    previous: state.books.previous,
    text: state.books.text,
    category: state.books.category
})

export default connect(mapStateToProps, { searchBook, fetchBook, fetchurl })(BooksContainer);

/*
else if (text && (subjects.includes(text) || title.includes(text) || authors.join().includes(text) || bookshelves.join().includes(text))) {
                        console.log('Found tour book now print it...........');
                    }
*/