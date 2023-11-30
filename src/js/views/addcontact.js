import React, { useState } from "react";
import FormData from "form-data";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Addcontact = () => {
    const[newContact, setNewContact] = useState({});
    const { store, actions } = useContext(Context);

    const createContact = async (e) => {

        e.preventDefault();
        const data = new FormData(e.target);
        const fullData = Object.fromEntries(data.entries());
        setNewContact(fullData)
        console.log(newContact);
        console.log(newContact.name)
        e.target.reset();

        try{
            const response = await fetch(store.APIURL, {
                method: "POST",
                body: JSON.stringify(
                    {
                        full_name: `${newContact.full_name}`,
                        email: `${newContact.email}`,
                        agenda_slug: "{agenda_slug}",
                        address:`${newContact.address}`,
                        phone:`${newContact.phone}`
                    }
                ),
                headers: { 'Content-type': 'application/json' }
            });
            if(response.ok){
                console.log('contacto creado')
            }
        }catch(error){
            console.log(error);
        }
    }
    
    /*
    const formHandler = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const fullData = Object.fromEntries(data.entries());
        setNewContact(fullData)
        console.log(newContact);
        e.target.reset();
    };
   */

    return(
        <div className="text-center mt-5">
            <h1 className="fs-1">Add a new contact</h1>
                <div className="Form box">
                    <form className="form" onSubmit={createContact}>
                        <label> 
                            <p>Full name</p>
                            <input 
                                name="name"
                                className="form-control"
                                type="text" 
                                placeholder="Full name" 
                                id="full_name"
                                required
                                > 
                            </input>
                        </label>        
                        <label> 
                            <p>Email</p> 
                            <input 
                                name="email"
                                className="form-control"
                                type="email" 
                                placeholder="Enter Email" 
                                id="fullemail"
                                required
                                >
                        </input>
                        </label>
                        <label> 
                            <p>Phone</p>
                            <input 
                                name="phone"
                                className="form-control"
                                type="tel" 
                                placeholder="Enter phone" 
                                id="fullphone"
                                required
                                >  
                            </input>
                        </label>
                        <label> 
                            <p>Adress</p>
                            <input 
                                name="address"
                                className="form-control"
                                type="text" 
                                placeholder="Enter the Adress" 
                                id="fullname"
                                required
                                > 
                            </input>
                        </label>
                        <div className="buttons">
                            <input className="btn btn-success" type="submit" value="Save"/>
                            <Link to="/">
                                <button className="btn btn-dark"> Back to Agenda </button>
                            </Link>
                        </div>
                        
                    </form>
                </div>
        </div>
    );
};
