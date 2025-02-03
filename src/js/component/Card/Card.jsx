import React from "react";
import './Card.css';

const Card = (props) => {
    return (
        <>
            <div className="card myCard">
                <div className="container">
                    <img src={props.imageSource} className="card-img-top" alt="img1" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-outline-secondary"><strong>keep reading ...</strong></button>
                    </div>
                </div>
            </div>
        </>
    );
    ;
}

export default Card