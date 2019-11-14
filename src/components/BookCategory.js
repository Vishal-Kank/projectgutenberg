import React, { Component } from 'react';
import right from '../sym/right.png';
import { Link } from 'react-router-dom';

class BookCategory extends Component {
    render() {
        return (
            <div className="main">
                <div className="container py-2">
                    <h1 className="text-center py-5 text-light">Gutenberg Project</h1>

                    <div className="mx-auto my-4 font-weight-bold category-container text-light">
                        <Link to='/Fiction' className="pl-5 text-light subject py-3 mb-4 d-flex justify-content-around">
                            <p className=" my-auto" >FICTION</p> <div className="ml-auto mr-5 my-auto"><img className="img-fluid" src={right} alt="->" /></div>
                        </Link>

                        <Link to='/Drama' className="pl-5 text-light subject py-3 mb-4 d-flex justify-content-around">
                            <p className=" my-auto">DRAMA</p> <div className="ml-auto mr-5 my-auto"><img className="img-fluid" src={right} alt="->" /></div>
                        </Link>

                        <Link to='/Humor' className="pl-5 text-light subject py-3 mb-4 d-flex justify-content-around">
                            <p className=" my-auto">HUMOR</p> <div className="ml-auto mr-5 my-auto"><img className="img-fluid" src={right} alt="->" /></div>
                        </Link>

                        <Link to='/Politics' className="pl-5 text-light subject py-3 mb-4 d-flex justify-content-around">
                            <p className=" my-auto">POLITICS</p> <div className="ml-auto mr-5 my-auto"><img className="img-fluid" src={right} alt="->" /></div>
                        </Link>

                        <Link to='/Philosophy' className="pl-5 text-light subject py-3 mb-4 d-flex justify-content-around">
                            <p className=" my-auto">PHILOSOPHY</p> <div className="ml-auto mr-5 my-auto"><img className="img-fluid" src={right} alt="->" /></div>
                        </Link>

                        <Link to='/History' className="pl-5 text-light subject py-3 mb-4 d-flex justify-content-around">
                            <p className=" my-auto">HISTORY</p> <div className="ml-auto mr-5 my-auto"><img className="img-fluid" src={right} alt="->" /></div>
                        </Link>

                        <Link to='/Adventure' className="pl-5 text-light subject py-3 mb-4 d-flex justify-content-around">
                            <p className=" my-auto">ADVENTURE</p> <div className="ml-auto mr-5 my-auto"><img className="img-fluid" src={right} alt="->" /></div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookCategory;