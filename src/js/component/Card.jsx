import React from "react";
import { Editcontact } from "../views/editcontact";
import { Link } from "react-router-dom";

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
            <div className="col-md-2 d-flex flex-row justify-content-around pt-4 pb-4">

                <Link to={`/editcontact/${id}`}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                <i className="fa-solid fa-trash"></i>
            </div>
        </div>
    </div>
    )
};

export default Card;