import React, { useState } from "react";
import { Editcontact } from "../views/editcontact";
import { Link } from "react-router-dom";
import { Modal } from "./Modal.jsx";

const Card = ({name, address, email, phone,id}) => {

    return (
        <div className="card mb-3" id={id} key={id} style={{width: "80vw", margin: "auto"}}>
        <div className="row g-0">
            <div className="col-md-4 pt-4 pb-4">
                <img src="https://picsum.photos/200" className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-6">
                <div className="card-body me-3 pt-4 pb-4">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{address}</p>
                    <p className="card-text">{email}</p>
                    <p className="card-text">{phone}</p>
                </div>
            </div>
            <div id="buttons" className="col-md-2 d-flex flex-row justify-content-around pt-4 pb-4">
                <Link to={`/editcontact/${id}`}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                <i className="fa-solid fa-trash text-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
            </div>
            /* Modal */
            <div classNameName="modal mb-3">
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
};

export default Card;