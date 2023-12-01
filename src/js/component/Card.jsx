import React, { useContext, useState } from "react";
import { Editcontact } from "../views/editcontact";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "./Modal.jsx";
import { Context } from "../store/appContext.js";

const Card = ({name, address, email, phone,id}) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    return (
        <div className="card" id={id} key={id} style={{width: "85vw", margin: "auto",}}>
        <div className="row g-0">
            <div className="col-md-4 pt-4 pb-4">
                <img src="https://picsum.photos/200" className="img-fluid image" alt="..."/>
            </div>
            <div className="col-md-6">
                <div className="card-body me-3 pb-4">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"> <i className="fa-solid fa-location-dot" style={{fontSize: "15px",}}></i> {address}</p>
                    <p className="card-text"> <i className="fa-solid fa-envelope" style={{fontSize: "15px",}}></i> {email}</p>
                    <p className="card-text"> <i className="fa-solid fa-phone" style={{fontSize: "15px",}}></i> {phone}</p>
                </div>
            </div>
            <div id="buttons" className="col-md-2 d-flex flex-column gap-3 justify-content-around pt-4 pb-4">
                <Link to={`/editcontact/${id}`}>
                    <i className="fa-solid fa-pen-to-square text-dark fa-buttons"></i>
                </Link>
                <i className="fa-solid fa-trash text-dark fa-buttons" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
            </div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Delete contact</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete the contact? 
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Oh no!</button>
                            <button type="button" className="btn btn-success" onClick={() => {
                                console.log(id);
                                actions.deleteContact(id);
                            }}>Yes Baby!</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
};

export default Card;