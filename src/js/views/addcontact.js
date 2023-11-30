import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Addcontact = () => {
    const{newContact, setNewContact} = useState({
        full_name: "",
        email: "",
        agenda_slug: "yoel_agenda",
        address:"",
        phone:""
    });

    const formHandler = (evt) => {
        const { target } = evt;
        const { name, value } = target;
        const newValues = {
          ...newContact,
          [name]: value,
        };
    console.log(newValues)
    setNewContact(newValues);
    }

    return(
        <div className="text-center mt-5">
            <h1 className="fs-1">Add a new contact</h1>
                <div className="Form box">
                    <form className="form" onSubmit={(event) => {event.preventDefault}}>
                        <label> 
                            <p>Full name</p>
                            <input 
                                type="text" 
                                placeholder="Full name" 
                                id="fullname"
                                onChange={formHandler}
                                > 
                            </input>
                        </label>        
                        <label> 
                            <p>Email</p> 
                            <input 
                                type="email" 
                                placeholder="Enter Email" 
                                id="fullemail"
                                onChange={formHandler}
                                >
                        </input>
                        </label>
                        <label> 
                            <p>Phone</p>
                            <input 
                                type="tel" 
                                placeholder="Enter phone" 
                                id="fullphone"
                                onChange={formHandler}
                                >  
                            </input>
                        </label>
                        <label> 
                            <p>Adress</p>
                            <input 
                                type="text" 
                                placeholder="Enter the Adress" 
                                id="fullname"
                                onChange={formHandler}> 
                            </input>
                        </label>
                        <div className="buttons">
                            <input className="btn btn-success" type="submit" value="Save" onSubmit={console.log(newContact)}/>
                            <Link to="/">
                                <button className="btn btn-dark"> Back to Agenda </button>
                            </Link>
                        </div>
                        
                    </form>
                </div>
        </div>
    );
};
