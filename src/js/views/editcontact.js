import React, { useState } from "react";
import FormData from "form-data";
import "../../styles/home.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Editcontact = () => {
    const { store, actions } = useContext(Context);
    const[fullName, setFullName] = useState('');
    const[email, setEmail] = useState('');
    const[address, setAddress] = useState('');
    const[phone, setPhone] = useState('');
    const params = useParams()
    const navigate = useNavigate();
    console.log(params);

    const newContact = {
        fullName: fullName,
        email: email,
        address: address,
        phone: phone
    }

    const fullNameHandler = (e) => {
        setFullName(e.target.value);
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const addressHandler = (e) => {
        setAddress(e.target.value);
    }

    const phoneHandler = (e) => {
        setPhone(e.target.value);
    }


    const createContact = async (contact) => {
        try{
            const response = await fetch(store.APIURL + params.someid , {
                method: "PUT",
                body: JSON.stringify(
                    {
                        full_name: `${contact.fullName}`,
                        email: `${contact.email}`,
                        agenda_slug: "yoel_agenda",
                        address:`${contact.address}`,
                        phone:`${contact.phone}`
                    }
                ),
                headers: { 'Content-type': 'application/json' }
            });
            if(response.ok){
                console.log('contacto creado')
                navigate("/");
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
            <h1 className="fs-1">Edit your contact</h1>
                <div className="Form box">
                    <form className="form" onSubmit={(e) => {
                        e.preventDefault();
                        console.log(newContact)
                        e.target.reset();
                        createContact(newContact);
                    }
                         }>
                        <label> 
                            <p>Full name</p>
                            <input 
                                name="name"
                                className="form-control"
                                type="text" 
                                placeholder="Full name" 
                                id="full_name"
                                onChange={fullNameHandler}
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
                                onChange={emailHandler}
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
                                onChange={phoneHandler}
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
                                onChange={addressHandler}
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
