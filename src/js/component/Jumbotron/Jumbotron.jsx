import React from "react";
import './Jumbotron.css'

const Jumbotron = () => {
    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container containerJ">
                    <h1 className="display-2">Wellcome to <strong>Balu</strong>.</h1>
                    <p className="lead">

                    On this page you can learn about all known dog breeds. 
                    What they like and what they don't. 
                    You will learn how to love them and how to take care of them.
                        
                    </p>
                    <button type="button" className="btn btn-outline-secondary"><strong>keep reading ...</strong></button>
                </div>
            </div>
        </>
    )
}

export default Jumbotron;